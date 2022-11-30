const isBelowThreshold = (checkadult) => checkadult >= 18; // Arrow Function with a condition.
// These function checking is any adult person exist in these array or not.
const val = [19,21,18,20]; // condition values.
console.log(val.every(isBelowThreshold))