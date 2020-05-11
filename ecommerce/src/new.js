    function linearSearch(arr, a) {
      for (var i = 0; i <= arr.length; i++) {
        if (arr[i] === a) return i;
  }
          return -1;
}

console.log(linearSearch([1, 3, 45, 67, 78], 32));
//output: -1;

console.log(linearSearch([1, 3, 45, 67, 78], 78));
//output: 4

