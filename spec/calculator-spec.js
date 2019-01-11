import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){

  let calc;
  let calc2;
  let calc3;

  beforeEach(function(){
    calc = new Calculator("1994-09-20", 79);
    calc.galacticExpCalc();
    calc2 = new Calculator("1970-01-06", 97);
    calc2.galacticExpCalc();
    calc3 = new Calculator("1926-04-06", 74);
    calc3.galacticExpCalc();
  });

  it('takes a the users birthday and life expectancy', function(){
    expect(calc.birthday.getUTCDate()).toEqual(20);
    expect(calc.birthday.getUTCMonth()).toEqual(8);
    expect(calc.birthday.getUTCFullYear()).toEqual(1994);
    expect(calc.lifeExpectancy).toEqual(79);
    expect(calc2.birthday.getUTCDate()).toEqual(6);
    expect(calc2.birthday.getUTCMonth()).toEqual(0);
    expect(calc2.birthday.getUTCFullYear()).toEqual(1970);
    expect(calc2.lifeExpectancy).toEqual(97);
  });

  it('takes the users birthday and life expectancy and sets now as the current time', function(){
    expect(calc.now.getUTCFullYear()).toEqual(2019);
    expect(calc.now.getUTCDate()).toEqual(11);
    expect(calc.now.getUTCMonth()).toEqual(0);
  });

  it('calculates the users age based off of their inputted birthday', function(){
    expect(calc.age).toEqual(24);
    expect(calc2.age).toEqual(49);
  });

  it('calculates the users age for planet Mercury', function(){
    expect(calc.galacticAges[0]).toEqual(100);
    expect(calc2.galacticAges[0]).toEqual(204);
  });

  it('calculates the users age for planet Venus', function(){
    expect(calc.galacticAges[1]).toEqual(38);
    expect(calc2.galacticAges[1]).toEqual(79);
  });

  it('calculates the users age for planet Mars', function(){
    expect(calc.galacticAges[2]).toEqual(12);
    expect(calc2.galacticAges[2]).toEqual(26);
  });

  it('calculates the users age for planet Jupiter', function(){
    expect(calc.galacticAges[3]).toEqual(2);
    expect(calc2.galacticAges[3]).toEqual(4);
  });

  it('calculates the users life expectancy on planet Mercury', function(){
    expect(calc.galacticExpectancy[0]).toEqual('You have 229 years left on planet Mercury');
    expect(calc2.galacticExpectancy[0]).toEqual('You have 200 years left on planet Mercury');
  });

  it('calculates the users life expectancy on planet Venus', function(){
    expect(calc.galacticExpectancy[1]).toEqual('You have 89 years left on planet Venus');
    expect(calc2.galacticExpectancy[1]).toEqual('You have 77 years left on planet Venus');
  });

  it('calculates the users life expectancy on planet Mars', function(){
    expect(calc.galacticExpectancy[2]).toEqual('You have 30 years left on planet Mars');
    expect(calc2.galacticExpectancy[2]).toEqual('You have 25 years left on planet Mars');
  });

  it('calculates the users life expectancy on planet Jupiter', function(){
    expect(calc.galacticExpectancy[3]).toEqual('You have 4 years left on planet Jupiter');
    expect(calc2.galacticExpectancy[3]).toEqual('You have 4 years left on planet Jupiter');
  });

});
