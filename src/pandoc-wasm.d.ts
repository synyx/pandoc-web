declare module "pandoc-wasm" {
  interface Resource {
    contents: string | Blob;
    filename: string;
  }

  type PandocInputFormat =
    | "asciidoc"
    | "bibtex"
    | "biblatex"
    | "bits"
    | "commonmark"
    | "commonmark_x"
    | "creole"
    | "csljson"
    | "csv"
    | "tsv"
    | "djot"
    | "docbook"
    | "docx"
    | "dokuwiki"
    | "endnotexml"
    | "epub"
    | "fb2"
    | "gfm"
    | "haddock"
    | "html"
    | "ipynb"
    | "jats"
    | "jira"
    | "json"
    | "latex"
    | "markdown"
    | "markdown_mmd"
    | "markdown_phpextra"
    | "markdown_strict"
    | "mediawiki"
    | "man"
    | "mdoc"
    | "muse"
    | "native"
    | "odt"
    | "opml"
    | "org"
    | "pod"
    | "pptx"
    | "ris"
    | "rtf"
    | "rst"
    | "t2t"
    | "textile"
    | "tikiwiki"
    | "twiki"
    | "typst"
    | "vimwiki"
    | "xlsx"
    | "xml"
    // Lua or extension
    | string;
  type PandocOutputFormat =
    | "ansi"
    | "asciidoc"
    | "asciidoc_legacy"
    | "asciidoctor"
    | "bbcode"
    | "bbcode_fluxbb"
    | "bbcode_phpbb"
    | "bbcode_steam"
    | "bbcode_hubzilla"
    | "bbcode_xenforo"
    | "beamer"
    | "bibtex"
    | "biblatex"
    | "chunkedhtml"
    | "commonmark"
    | "commonmark_x"
    | "context"
    | "csljson"
    | "djot"
    | "docbook"
    | "docbook5"
    | "docx"
    | "dokuwiki"
    | "epub"
    | "epub2"
    | "fb2"
    | "gfm"
    | "haddock"
    | "html"
    | "html4"
    | "icml"
    | "ipynb"
    | "jats_archiving"
    | "jats_articleauthoring"
    | "jats_publishing"
    | "jats"
    | "jira"
    | "json"
    | "latex"
    | "man"
    | "markdown"
    | "markdown_mmd"
    | "markdown_phpextra"
    | "markdown_strict"
    | "markua"
    | "mediawiki"
    | "ms"
    | "muse"
    | "native"
    | "odt"
    | "opml"
    | "opendocument"
    | "org"
    | "pdf"
    | "plain"
    | "pptx"
    | "rst"
    | "rtf"
    | "texinfo"
    | "textile"
    | "slideous"
    | "slidy"
    | "dzslides"
    | "revealjs"
    | "s5"
    | "tei"
    | "typst"
    | "vimdoc"
    | "xml"
    | "xwiki"
    | "zimwiki"
    // Lua or extension
    | string;

  type Verbosity = "ERROR" | "WARNING" | "INFO";
  type Filter =
    "citeproc" | string | { type: "json" | "lua" | "citeproc"; path: string };

  // For documentation see https://pandoc.org/MANUAL.html#defaults-files
  interface Options {
    // General
    "input-file"?: string;
    "input-files"?: string[];
    from?: PandocInputFormat;
    reader?: PandocInputFormat;
    to?: PandocOutputFormat;
    writer?: PandocOutputFormat;
    "output-file"?: string;
    "data-dir"?: string;
    defaults?: string[];
    verbose?: Verbosity;
    "fail-if-warnings"?: boolean;
    sandbox?: boolean;
    "log-file"?: string;

    // Reader
    "shift-heading-level-by"?: number;
    "indented-code-classes"?: string[];
    "default-image-extension"?: string;
    "file-scope"?: boolean;
    filters?: Filter[];
    metadata?: Record<string, unknown>;
    "metadata-file"?: string;
    "metadata-files"?: string[];
    "preserve-tabs"?: boolean;
    "tab-stop"?: number;
    "track-changes"?: "accept" | "reject" | "all";
    "extract-media"?: string;
    abbreviations?: string;
    "typst-inputs"?: Record<string, string>;
    trace?: boolean;

    // Writer
    standalone?: boolean;
    template?: string;
    variables?: Record<string, unknown>;
    eof?: "crlf" | "lf" | "native";
    dpi?: number;
    wrap?: "auto" | "none" | "preserve";
    columns?: number;
    "table-of-contents"?: boolean;
    toc?: boolean;
    "toc-depth"?: number;
    "strip-comments"?: boolean;
    "syntax-highlighting"?: "default" | "none" | "idiomatic" | string;
    "syntax-definitions"?: string[];
    "syntax-definition"?: string;
    "include-in-header"?: string[];
    "include-before-body"?: string[];
    "include-after-body"?: string[];
    "resource-path"?: string[];
    "request-headers"?: string[];
    "no-check-certificate"?: boolean;

    // Options affecting specific writers
    "self-contained"?: boolean;
    "link-images"?: boolean;
    "html-q-tags"?: boolean;
    ascii?: boolean;
    "reference-links"?: boolean;
    "reference-location"?: "block" | "section" | "document";
    "figure-caption-position"?: "above" | "below";
    "table-caption-position"?: "above" | "below";
    "markdown-headings"?: "setext" | "atx";
    "list-tables"?: boolean;
    "top-level-division"?: "default" | "section" | "chapter" | "part";
    "number-sections"?: boolean;
    "number-offset"?: number[];
    listings?: boolean;
    "list-of-figures"?: boolean;
    lof?: boolean;
    "list-of-tables"?: boolean;
    lot?: boolean;
    incremental?: boolean;
    "slide-level"?: number;
    "section-divs"?: boolean;
    "email-obfuscation"?: "none" | "javascript" | "references";
    "identifier-prefix"?: string;
    "title-prefix"?: string;
    css?: string[];
    "reference-doc"?: string;
    "epub-cover-image"?: string;
    "epub-title-page"?: boolean;
    "epub-metadata"?: string;
    "epub-fonts"?: string[];
    "split-level"?: number;
    "chunk-template"?: string;
    "epub-subdirectory"?: string;
    "ipynb-output"?: "all" | "none" | "best";
    "pdf-engine"?:
      | "pdflatex"
      | "lualatex"
      | "xelatex"
      | "latexmk"
      | "tectonic"
      | "wkhtmltopdf"
      | "weasyprint"
      | "pagedjs-cli"
      | "prince"
      | "context"
      | "groff"
      | "pdfroff"
      | "typst"
      // Full path
      | string;
    "pdf-engine-opts"?: string[];
    "pdf-engine-opt"?: string;

    // Citation rendering
    citeproc?: boolean;
    bibliography?: string;
    csl?: string;
    "citation-abbreviations"?: string;
    "cite-method"?: "citeproc" | "natbib" | "biblatex";

    // Math rendering in HTML
    "html-math-method"?: {
      method: "mathjax" | "mathml" | "webtex" | "katex" | "gladtex" | "plain";
      url?: string;
    };
    "dump-args"?: boolean;
    "ignore-args"?: boolean;
  }

  interface ConvertReturn {
    stdout: string;
    stderr: string;
    warnings: unknown[];
    files: Record<string, string | Blob>;
    mediaFiles: Blob[];
  }

  interface LegacyReturn {
    out: string;
    mediaFiles: Map<string, string>;
  }

  async function convert(
    options: Options,
    stdin: string,
    files: Record<string, string | Blob>,
  ): Promise<ConvertReturn>;
  function query(options: Options): unknown;
  async function pandoc(
    args_str: string,
    inData: string | Blob,
    resources: Resource[] = [],
  );
}
