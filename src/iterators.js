var Iterators = (function() {
  return {
    each: function (arr, action) {
      if (arr === null) return arr;
      for (var i=0;i<arr.length;i++) {
        action(arr[i]);
      }
      return arr;
    },
    map: function (arr, action) {
      if (arr === null) return arr;
      var new_arr = [];
      Iterators.each(arr, function(x){
      new_arr.push(action(x));
     });
      return new_arr;
    }
  };
})();
