/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countLetterR(list) {
  let count = 0;
  for (const item of list) {
    if (item === "R") {
      count++;
    }
  }
  return count;
}
