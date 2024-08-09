function convertInstagramNumber(str: string) {
  // Remove commas for thousands separators
  str = str.replace(/,/g, "");

  // Check for million (m) and thousand (k) suffixes
  if (str.endsWith("m")) {
    return parseFloat(str) * 1000000;
  } else if (str.endsWith("k")) {
    return parseFloat(str) * 1000;
  } else {
    return parseInt(str, 10);
  }
}
