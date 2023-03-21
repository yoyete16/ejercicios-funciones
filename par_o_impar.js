function esPar(num) {
    if (num % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  let r = esPar(6);
  console.log("el numero es " + r );