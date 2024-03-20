function main() {
  const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5"
  ];
  function shuffle(arr) {
    return function () {
      //Write your code below
      let arr1 = [];
      for (let k = 0; k < arr.length; k++) {
        arr1.push(arr[k])
      }
      for (let i = arr1.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
      return arr1;
    };
  }
  return shuffle;
}
main();