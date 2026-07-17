/**
 * @param fn the function to be debounced.
 * @param delay the debounce delay in ms.
 * @returns a new debounced function that decorates the given {fn} function.
 */
export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  delay = 0,
) {
  let fnHandle: ReturnType<typeof setTimeout>;

  return function debouncedFunction(...args: Parameters<F>) {
    clearTimeout(fnHandle);
    fnHandle = setTimeout(() => fn(...args), delay);
  };
}
