export function getRandomItem(arr) {
  //get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const randomItem = arr[randomIndex];
  return randomItem;
}
