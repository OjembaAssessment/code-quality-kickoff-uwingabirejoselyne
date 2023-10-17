export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];
/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // The password is exactly 10 digits or characters;
  if(password.length !==10){
    return false
  }
  
  
  if (forbiddenPasswords.includes(password)) {
    return false;
  }
  
// The password is composed by digits and numbers;
if(!/\d/.test(password) || !/[a-zA-Z]/.test(password)){
  return false
}

// he password does **not** contain special characters like `@`, `/`, `#`, etc;
if (/[^a-zA-Z0-9]/.test(password)) {
  return false;
}

// The password contain a mix of uppercase and lowercase characters;
if(!/\a-zA-Z/.test(password)){
return false
}


for (let i = 0; i <= password.length - 3; i++) {
  let substring = password.substring(i, i + 3);
  if (ascending.includes(substring) || descending.includes(substring)) return false
}

const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
