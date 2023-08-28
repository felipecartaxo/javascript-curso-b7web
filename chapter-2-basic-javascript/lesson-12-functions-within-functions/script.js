const calcSquare = (x) => x * x;

console.log(calcSquare(2));

const addSquares = (a, b) => {
    let squareA = calcSquare(a);
    let squareB = calcSquare(b);

    return squareA + squareB;
}

console.log(addSquares(2, 3));

// * Apenas se você quiser colocar uma função dentro de outra função

/*  const addSquares = (a, b) => {
    const calcSquare = (x) => x * x;

    let squareA = calcSquare(a);
    let squareB = calcSquare(b);

    return squareA + squareB;
}

console.log(addSquares(2, 3)); */