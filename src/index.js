module.exports = function towelSort(matrix) {
    if (!matrix) {
        return []
    }
    for (const [index, arr] of matrix.entries()) {
        if (index % 2) {
            arr.reverse()
        }
    }

    return matrix.flat();
}
