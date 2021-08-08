function setProductCost(product) {
  let input;
  let cost;
  let outputs = document.getElementsByClassName("price")
  let priceInput = document.getElementById('priceInput')

  if ((product = "cp")) {
    input = document.getElementById("cpAmountSel");
    switch (input.value) {
      case "80cp":
        cost = 99;
        break;
      case "420cp":
        cost = 489;
        break;
      case "880cp":
        cost = 980;
        break;
      case "2400cp":
        cost = 2399;
        break;
      case "5000cp":
        cost = 4799;
        break;
      case "10800cp":
        cost = 9299;
        break;
    }
  }
  
  for (i = 0; i < outputs.length; i++) {
    outputs[i].innerHTML = cost;
  }

  priceInput.value = cost;
}
