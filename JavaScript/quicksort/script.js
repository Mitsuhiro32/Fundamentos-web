let numRandom = [3, 8, 7, 5, 2, 1, 9, 6, 4, 10, 0, 15, 11, 20, 18];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let i = 0;
    let j = arr.length - 1;
    let pivot = arr[Math.floor(arr.length / 2)];

    let left = [];
    let right = [];

    while (i < j) {
        while (arr[i] < pivot) {
            left.push(arr[i]);
            i++;
        }

        while (arr[j] > pivot) {
            right.push(arr[j]);
            j--;
        }

        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(numRandom));