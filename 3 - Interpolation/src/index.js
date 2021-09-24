/**
 * @typedef {Record<string, string | {Values}>} Values
 */

/**
 * Performs interpolation on the input replacing occurances of 
 * `{{ KEY }}` with the key found in `values`.
 * 
 * The key will be split on `.` to deep access properties of the values
 * 
 * @example 
 *      interpolate(
 *          'Hello {{ name }}! Welcome to {{ location.name }}', 
 *          { name: 'Tom', location: { name: 'Earth' } }
 *      );
 *      // Returns -> 'Hello Tom! Welcome to Earth'
 * 
 * @param {string} input 
 * @param {Values} values 
 */
export function interpolate(input, values) {

}
