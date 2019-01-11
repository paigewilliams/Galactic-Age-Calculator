import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){

  it('takes a the users birthday and life expectancy', function(){
    let calc = new Calculator("1994-09-20", 79);
    expect(calc.birthday.getUTCDate()).toEqual(20);
    expect(calc.birthday.getUTCMonth()).toEqual(8);
    expect(calc.birthday.getUTCFullYear()).toEqual(1994);
    expect(calc.lifeExpectancy).toEqual(79);
  });


});
