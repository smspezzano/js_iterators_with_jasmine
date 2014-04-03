describe("Iterators", function() {
  var arr = [1,2,3,4], action = jasmine.createSpy('action');
  var multipleByTwo = function(ele) {
    return ele * 2; 
  };
  describe(".each", function() {
    describe("given a null", function() {
      it("returns null", function() {
        expect(Iterators.each(null)).toBeNull();
      });
    });
    describe("given an array and an action as input", function() {
      it("returns the array", function() {
        expect(Iterators.each(arr,action)).toBe(arr);
      });
      it("applies the action to each of the elements in array", function() {
        expect(action.calls.allArgs()).toEqual([[1],[2],[3],[4]]);
      });
    });
  });

  describe(".map", function() {
    describe("given a null", function() {
      it("returns null", function() {
        // first, get this example to pass
        expect(Iterators.map(null)).toBeNull();
      });
    });
    describe("given an array and an action as input", function() {
      it("returns a new array", function() {
        expect(Iterators.map(arr, action)).not.toBe(arr);
      });
      it("returned array has results of the action applied to each element of the input array", function() {
        // For this one, imagine that you have an input array like
        // [1,2,3]. Think about how you'd expect the result of applying
        // a function like function (el) { return el * 2; } to be used
        // to construct the esult array.
          expect(Iterators.map(arr, multipleByTwo)).toEqual([2,4,6,8]);
        // From that point, see if you could figure out how to abstract that out 
        // to the more general case, to check whether map applies *any* function
        // to each element to return the result array 
      });
      it("does not modify the original array at all", function() {
        expect(Iterators.map(arr, multipleByTwo)).not.toBe(arr);
      });
    });
  });

  describe(".reduce", function() {
    it(" ** does not have examples, so write them ** ", function() {
      pending();
    });
  });
});