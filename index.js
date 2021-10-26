function apply(num, f) {
  return f(num);
}

function double(num) {
  return 2 * num;
}

console.log(apply(5, double));

// Função anônimas
console.log(
  apply(5, function (num) {
    return 2 * num;
  })
);

// Arrow Function Anônima
console.log(
  apply(5, (num) => {
    return 2 * num;
  })
);

// Arrow Function Anônima encurtada

console.log(apply(5, (num) => 2 * num));
