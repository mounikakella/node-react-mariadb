async function sortBy(arr, key) {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

export default sortBy;
