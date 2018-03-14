class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.operators = [initialValue];
    this.result = initialValue;
  }

  add(number) {
    // your implementation
    this.operators = this.operators.concat(['+', number]);
    this.calculate();
    console.log(this.operators, this.result);
    
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.operators = this.operators.concat(['-', number]);
    this.calculate();
    console.log(this.operators, this.result);
    
    return this;
  }

  multiply(number) {
    // your implementation
    this.operators = this.operators.concat(['*', number]);
    this.calculate();
    console.log(this.operators, this.result);
    
    return this;
  }

  devide(number) {
    // your implementation
    this.operators = this.operators.concat(['/', number]);
    this.calculate();
    console.log(this.operators, this.result);
    
    return this;
  }

  pow(number) {
    // your implementation
    this.operators = this.operators.concat(['^', number]);
    this.calculate();
    console.log(this.operators, this.result);
    
    return this;
  }

  calculate() {
    let operators = this.operators.slice(0);
    while (operators.length !== 1) {
      // console.log(operators, this.result);
      let powIndex = operators.lastIndexOf('^');
      if (powIndex !== -1) {
        let powResult =  Math.pow(operators[powIndex - 1], operators[powIndex + 1]);
        operators.splice(powIndex - 1, 3, powResult);
      } else {
        let multDivIndex = operators.findIndex(el => (el === '*' || el === '/'));
        if (multDivIndex !== -1) {
          let multResult =  operators[multDivIndex - 1] * operators[multDivIndex + 1];
          let divResult =  operators[multDivIndex - 1] / operators[multDivIndex + 1];
          let multDivResult = operators[multDivIndex] === '*' ? multResult : divResult;
          operators.splice(multDivIndex - 1, 3, multDivResult);
        } else {
          let addSubIndex = operators.findIndex(el => (el === '+' || el === '-'));
          if (addSubIndex !== -1) {
            let addResult =  operators[addSubIndex - 1] + operators[addSubIndex + 1];
            let subResult =  operators[addSubIndex - 1] - operators[addSubIndex + 1];
            let addSubResult = operators[addSubIndex] === '+' ? addResult : subResult;
            operators.splice(addSubIndex - 1, 3, addSubResult);
          }
        }
      }
    }
    this.result = operators[0];
  }
}

SmartCalculator.prototype.toString = function() {
  return this.result;
}

module.exports = SmartCalculator;
