import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){

  let calc;

  beforeEach(function(){
    calc = new Calculator("1994-09-20", 79);
  });

  it('takes a the users birthday and life expectancy', function(){
    expect(calc.birthday.getUTCDate()).toEqual(20);
    expect(calc.birthday.getUTCMonth()).toEqual(8);
    expect(calc.birthday.getUTCFullYear()).toEqual(1994);
    expect(calc.lifeExpectancy).toEqual(79);
  });

  it('takes the users birthday and life expectancy and sets now as the current time', function(){
    expect(calc.now.getUTCFullYear()).toEqual(2019);
    expect(calc.now.getUTCDate()).toEqual(11);
    expect(calc.now.getUTCMonth()).toEqual(0);
  });

  it('calculates the users age based off of their inputted birthday', function(){
    calc.findAge();
    expect(calc.age).toEqual(24);
    let calc2 = new Calculator("1994-01-03", 79);
    calc2.findAge();
    expect(calc2.age).toEqual(25);
  });

  it('calculates the users age for planet Mercury', function(){
    expect(calc.mercuryAge()).toEqual(100);
  });

  it('calculates the users age for planet Venus', function(){
    expect(calc.venusAge()).toEqual(38);
  });

  it('calculates the users age for planet Mars', function(){
    expect(calc.marsAge()).toEqual(12);
  });

  it('calculates the users age for planet Jupiter', function(){
    expect(calc.jupiterAge()).toEqual(2);
  });

  it('calculates the users life expectancy on planet Mercury', function(){
    expect(calc.mercuryExpectancy()).toEqual('You have lived 21 years longer than expected on planet Mercury')
  })

  it('calculates the users life expectancy on planet Venus', function(){
    expect(calc.venusExpectancy()).toEqual('You have 41 years left on planet Venus')
  })

});
