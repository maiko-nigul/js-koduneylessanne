let city = "Tallinn";
city = "Tartu";

const country = "Estonia";

var legacyVar = "Vana viis";

{
  let blockScopedLet = "Nähtav vaid plokis";
  var functionScopedVar = "Nähtav ka väljaspool plokki";
}

console.log(functionScopedVar);