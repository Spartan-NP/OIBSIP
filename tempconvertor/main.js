const submitOutpur = () => {
  const temp = document.getElementById("temp").value;
  const tempDiff = document.getElementById("temp_diff");

  const tempOpt = tempDiff.options[tempDiff.selectedIndex].value;

  const celToFeh = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fehToCel = (feh) => {
    let celsius = Math.round(((feh - 32) * 5) / 9);
    return celsius;
  };

  let result;

  if (tempOpt == "cel") {
    result = celToFeh(temp);
    document.getElementById("para").innerHTML = `${result}°Fahrenheit`;
  } else {
    result = fehToCel(temp);
    document.getElementById("para").innerHTML = `${result}°Celsius`;
  }
};
