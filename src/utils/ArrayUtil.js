export const sumArray = (arr = []) => arr.reduce((sum, val) => sum + val, 0);
export const avgArray = (arr = []) => sumArray(arr) / arr.length;
