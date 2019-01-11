import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){
  it('takes a the users birthday and life expectancy', function(){
    calc = new Calculator("1994-09-20", 79);
    expect(calc.birthday.getDate()).toEqual(20);
    expect(calc.birthday.getMonth()).toEqual(9);
    expect(calc.birthday.getFullYear()).toEqual(1994);
    expect(calc.lifeExpectancy).toEqual(79);
  });


});
