function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1. Traverse Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Move the top boundary down

        // 2. Traverse Down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move the right boundary left

        // 3. Traverse Left (Only if a row remains)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Move the bottom boundary up
        }

        // 4. Traverse Up (Only if a column remains)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move the left boundary right
        }
    }

    return result;
}
