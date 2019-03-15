function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_foo_bar_qix_zzz(number) {
  if (number != 0  && number != null  && number % 15 === 0) {
    return "qix"
  }
  else if (number != 0 && number != null  && number % 3 === 0) {
    return "foo"
  }
  else if (number != 0 && number != null  && number % 5 === 0) {
    return "bar"
  }
  else {
    return "zzz"
  }
}

