export class Calculator {
  constructor(birthday, lifeExpectancy){
    this.birthday = new Date(birthday);
    this.now = new Date();
    this.lifeExpectancy = lifeExpectancy;
    this.age = 0;
    this.galacticAges = [];
  };

  findAge(){
    const birthYear = this.birthday.getUTCFullYear();
    const birthMonth = this.birthday.getUTCMonth();
    const birthDate = this.birthday.getUTCDate();
    const currentYear = this.now.getUTCFullYear();
    const currentMonth = this.now.getUTCMonth();
    const currentDate = this.now.getUTCDate();

    this.age = currentYear - birthYear;

    if (currentMonth - birthMonth <= 0){
      if (currentDate - birthDate <= 0){
        this.age --;
      }
    }
    return this.age;
  };

  galacticAgeCalc(){
    this.findAge();
    const planetsAge = [0.24, 0.62, 1.88, 11.86];
    for (var i = 0; i < planetsAge.length; i++){
      this.galacticAges.push(parseInt((1/planetsAge[i])* this.age));
    }
    return this.galacticAges;
  };

  mercuryExpectancy(){
    this.galacticAgeCalc();
    let mercuryAge = this.galacticAges[0];
    let expectancy = mercuryAge - this.lifeExpectancy;
    if (expectancy > 0) {
      return `You have lived ${expectancy} years longer than expected on planet Mercury`;
    }
    else {
      expectancy *= -1;
      return `You have ${expectancy} years left on planet Mercury`;
    }
  };

  venusExpectancy(){
    this.galacticAgeCalc();
    let venusAge = this.galacticAges[1];
    let expectancy = venusAge - this.lifeExpectancy;
    if (expectancy > 0) {
      return `You have lived ${expectancy} years longer than expected on planet Venus`;
    }
    else {
      expectancy *= -1;
      return `You have ${expectancy} years left on planet Venus`;
    }
  };

  marsExpectancy(){
    this.galacticAgeCalc();
    let marsAge = this.galacticAges[2];
    let expectancy = marsAge - this.lifeExpectancy;
    if (expectancy > 0) {
      return `You have lived ${expectancy} years longer than expected on planet Mars`;
    }
    else {
      expectancy *= -1;
      return `You have ${expectancy} years left on planet Mars`;
    }
  };

  jupiterExpectancy(){
    this.galacticAgeCalc();
    let jupiterAge = this.galacticAges[3];
    let expectancy = jupiterAge - this.lifeExpectancy;
    if (expectancy > 0) {
      return `You have lived ${expectancy} years longer than expected on planet Jupiter`;
    }
    else {
      expectancy *= -1;
      return `You have ${expectancy} years left on planet Jupiter`;
    }
  };

}
