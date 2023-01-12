function checkCashRegister(price, cash, cid) {
    /*
    Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
    cid is a 2D array listing available currency.
    The checkCashRegister() function should always return an object with a status key and a change key.
    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
    */
    let tempOutput = cash - price;
    let denominations = {
          "penny": 0.01,
          "nickel": 0.05,
          "dime": 0.1,
          "quarter": 0.25,
          "one": 1,
          "five": 5,
          "ten": 10,
          "twenty": 20,
          "one hundred": 100
      }
  
    let total = cid.filter( value => (denominations[value[0].toLowerCase()] <= tempOutput && value[1] > 0 )).reduce((sum, a) => sum + a[1], 0);
    
    
    if (total < tempOutput) {
      return {status:"INSUFFICIENT_FUNDS", change:[]};
    }
    else if (total === tempOutput) {
      return {status: "CLOSED", change : cid}
    }
    else {
      let outputChange = [];
      let i = cid.length - 1;
      while (i >= 0) {
        let currentCurrency = denominations[cid[i][0].toLowerCase()]
        let currentBalanceCurrency = cid[i][1];
        if (currentBalanceCurrency > 0 &&  currentCurrency <= tempOutput) {
          let tempCurrencyArray = [cid[i][0], 0]
          while ( tempOutput > 0 &&  currentBalanceCurrency > 0 && tempOutput >= currentCurrency) {
            tempOutput -= currentCurrency;
            tempOutput = Math.round(tempOutput * 100) / 100
            currentBalanceCurrency -= currentCurrency;
            tempCurrencyArray[1] += currentCurrency;
          }
          
          tempCurrencyArray[1] = Math.round(tempCurrencyArray[1] * 100) / 100
  
          if (tempCurrencyArray[1] > 0) {
            outputChange = outputChange.concat([tempCurrencyArray])
          }
        }
        i--;
      }
      return {status: "OPEN", change: outputChange}
    }
  }