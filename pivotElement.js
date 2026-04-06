function findPivotsBruteForce(arr) {
    const pivots = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let isPivot = true;

        // Check everything to the left
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                isPivot = false;
                break;
            }
        }

        // Check everything to the right if left was OK
        if (isPivot) {
            for (let k = i + 1; k < n; k++) {
                if (arr[k] < arr[i]) {
                    isPivot = false;
                    break;
                }
            }
        }

        if (isPivot) pivots.push(arr[i]);
    }
    return pivots;
}



function findPivots(arr) {
    const n = arr.length;
    if (n === 0) return [];

    const maxLeft = new Array(n);
    const minRight = new Array(n);

    // Build max from left: [10, 5, 20] -> [10, 10, 20]
    maxLeft[0] = arr[0];
    for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], arr[i]);
    }

    // Build min from right: [10, 5, 20] -> [5, 5, 20]
    minRight[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        minRight[i] = Math.min(minRight[i + 1], arr[i]);
    }

    const pivots = [];
    for (let i = 0; i < n; i++) {
        // Check if current is >= all to left AND <= all to right
        const leftOk = i === 0 || maxLeft[i - 1] <= arr[i];
        const rightOk = i === n - 1 || minRight[i + 1] >= arr[i];

        if (leftOk && rightOk) pivots.push(arr[i]);
    }
    return pivots;
}

// Time: O(n) | Space: O(n)
