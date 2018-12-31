/**
 * Returns a promise that resolves after n milliseconds.
 * @param {Number} ms
 * @returns {Promise}
 */
export function sleep(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Generates a URL-friendly slug from a string.
 * @see https://github.com/simov/slugify/blob/master/index.js
 * @param {String} s
 * @returns {String}
 */
export function slugify(s) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^\w\s$*_+~.()'"!\-:@]/g, '')
    .replace(/[-\s]+/g, '-');
}
