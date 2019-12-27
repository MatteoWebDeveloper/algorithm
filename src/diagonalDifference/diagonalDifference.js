class MatrixController {
    constructor(array2D) {
        this.matrix = array2D;
        this.pointerPosition = {
            x: 0,
            y: 0
        };
    }

    startFromTopLeft() {
        this.pointerPosition = {
            x: 0,
            y: 0
        };
    }

    startFromTopRight() {
        this.pointerPosition = {
            x: this.matrix.length - 1,
            y: 0
        };
    }

    traverseDiagonallyToBottomRight() {
        this.pointerPosition.x++;
        this.pointerPosition.y++;
    }

    traverseDiagonallyToBottomLeft() {
        this.pointerPosition.x--;
        this.pointerPosition.y++;
    }

    getPointerValue() {
        let { x, y } = this.pointerPosition;

        return this.matrix[y][x];
    }
}

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

function diagonalDifference(Array2D) {
    let squareSizeLength = Array2D.length;
    let left = new MatrixController(Array2D);
    let leftDiagonalValues = [];
    let right = new MatrixController(Array2D);
    let rightDiagonalValues = [];

    left.startFromTopLeft();
    right.startFromTopRight();

    for (let i = 0; i < squareSizeLength; i++) {
        if (i > 0) {
            left.traverseDiagonallyToBottomRight();
            right.traverseDiagonallyToBottomLeft();
        }

        leftDiagonalValues[i] = left.getPointerValue();
        rightDiagonalValues[i] = right.getPointerValue();
    }

    let difference =
        leftDiagonalValues.reduce(sum, 0) - rightDiagonalValues.reduce(sum, 0);

    return Math.abs(difference);
}

export { diagonalDifference };
