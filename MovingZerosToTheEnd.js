// # Instructions
/*
    Write an algorithm that takes an array and moves all of the zeros to the end,
    preserving the order of the other elements.
    
    i.g.
        moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

/**
 * @function
 * @param {Array} arr The provided array
 * @returns {Array} array where the "0"s are rekegated to the end
 * The supplied array is filtered, excluding values ​​strictly equal to 0 (integer).
 * A variable takes into account the number of "0"s encountered. In the end this will be the length
 * of an array containing only the value 0, concatenated to the tail of the previously filtered
 * array.
 */
var moveZeros = function (arr) {
    let zerosCount = 0; // +1
    return arr.reduce(function(accumulator, current) { // +n
      current !== 0 ? accumulator.push(current) : zerosCount++;
      return accumulator
    }, []).concat(Array.apply(null, Array(zerosCount)).map(function(value) {
      return 0;
    }))
  }

/*
  Others solutions:
  Instead of Array.apply(null, Array(count)).map(value => 0) is the same as Array(count).fill(0)
*/