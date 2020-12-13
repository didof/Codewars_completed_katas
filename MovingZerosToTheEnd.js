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
 * @returns {Array}
 */
var moveZeros = function (arr) {
    let zerosCount = 0;
    return arr.reduce(function(accumulator, current) {
      current !== 0 ? accumulator.push(current) : zerosCount++;
      return accumulator
    }, []).concat(Array.apply(null, Array(zerosCount)).map(function(value) {
      return 0;
    }))
  }

// # Explaination
/*

*/