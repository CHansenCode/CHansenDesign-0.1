export function ifItsDark() {
  let date = new Date();
  let hours = date.getHours();

  if (18 > hours > 9) {
    return false;
  } else {
    return true;
  }
}
