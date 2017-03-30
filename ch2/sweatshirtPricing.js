function sweatshirtPricing(num) {
  var cost = 20*num;
  if(num===2) {
    cost = cost - cost*(9/100);
  }
  if(num===3) {
    cost = cost - cost*(19/100);
  }
  if(num>=4) {
    cost = cost - cost*(35/100);
  }
  console.log(cost);
  return cost;
}


sweatshirtPricing(1);
sweatshirtPricing(2);
sweatshirtPricing(3);
sweatshirtPricing(4);
sweatshirtPricing(5);
