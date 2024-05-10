export function getObjectValues(obj) {
  const result = [];
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      result.push(value);
    } else if (value === null) {
      continue;
    } else {
      result.push(...getObjectValues(value));
    }
  }
  return result;
}
