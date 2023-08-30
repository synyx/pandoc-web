import express from 'express';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';

const VALID_FORMATS = ['markdown', 'gfm', 'textile'];

const app = express();
const port = 8080;

app.use(express.text());
app.use(express.static('frontend/dist'));

app.post('/api/pandoc/run', async (req, res) => {
  const from = req.query.from || 'gfm';
  const to = req.query.to || 'textile';

  if (VALID_FORMATS.indexOf(from) < 0 || VALID_FORMATS.indexOf(to) < 0) {
    res.status(400).send('Invalid format');
    return;
  }

  /** @type {String} */
  const inputText = String(req.body);
  const process = exec(`pandoc --from=${from} --to=${to}`);

  const outputChunks = [];
  process.stdout.on('data', (data) => {
    outputChunks.push(data);
  });

  /** @type {function(String, String): Promise} */
  const endPromise = promisify(process.stdin.end);
  await endPromise.call(process.stdin, inputText, 'utf-8');

  /** @type {function(String): Promise} */
  const onPromise = promisify(process.on);
  await onPromise.call(process, 'close');

  const pandocOutput = outputChunks.join();

  if (process.exitCode !== 0) {
    res.status(500).send('Pandoc failed');
    console.error('Pandoc failed', pandocOutput);
    return;
  }

  res.status(200).contentType('text/plain').send(pandocOutput);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
