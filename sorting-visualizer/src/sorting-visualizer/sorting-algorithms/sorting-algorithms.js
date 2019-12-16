export function getMergeSortAnimations(array) {
    const animations = [];

    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;

    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations) {
   
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

//   export function getQuickSortAnimations(array) {
      
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const [pivot, ...rest] = arr;
//     const left = [], right = [];

//     rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );

//     return qsort(left).concat(pivot).concat(qsort(right));

//   }

  export function getBubbleSortAnimations(array) {

        let states = [];
        async function quickSort(arr, start, end) {
            if (start >= end) {
            return;
            }
            let index = await partition(arr, start, end);
            states[index] = -1;
        
            await Promise.all([
            quickSort(arr, start, index - 1),
            quickSort(arr, index + 1, end)
            ]);
        }
        
        async function partition(arr, start, end) {
            for (let i = start; i < end; i++) {
            states[i] = 1;
            }
        
            let pivotValue = arr[end];
            let pivotIndex = start;
            states[pivotIndex] = 0;
            for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                await swap(arr, i, pivotIndex);
                states[pivotIndex] = -1;
                pivotIndex++;
                states[pivotIndex] = 0;
            }
            }
            await swap(arr, pivotIndex, end);
        
            for (let i = start; i < end; i++) {
            if (i != pivotIndex) {
                states[i] = -1;
            }
            }
        
            return pivotIndex;
        }

        async function swap(arr, a, b) {
            await sleep(50);
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
  }

