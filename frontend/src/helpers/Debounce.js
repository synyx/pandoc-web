/**
 *
 * @param {Function} fn the function to be debounced.
 * @param {number} [delay] the debounce delay in ms.
 * @returns {Function} a new debounced function that decorates the given {fn} function.
 */
export function debounceFunc(fn, delay = 0) {
  let fnHandle;

  return function debouncedFunction(...args) {
    window.clearTimeout(fnHandle);
    fnHandle = window.setTimeout(() => fn(...args), delay);
  };
}
