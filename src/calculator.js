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
    const planets = [0.24, 0.62, 1.88, 11.86];

    for (var i = 0; i < planets.length; i++){
      this.galacticAges.push(parseInt((1/planets[i])* this.age));
    }
    return this.galacticAges;
  }

  // mercuryAge(){
  //   this.findAge();
  //   let mercuryAge = parseInt((1/.24)* this.age);
  //   return mercuryAge;
  // };
  //
  // venusAge(){
  //   this.findAge();
  //   let venusAge = parseInt((1/.62)* this.age);
  //   return venusAge;
  // };
  //
  // marsAge(){
  //   this.findAge();
  //   let marsAge = parseInt((1/1.88)* this.age);
  //   return marsAge;
  // };
  //
  // jupiterAge(){
  //   this.findAge();
  //   let marsAge = parseInt((1/11.86)* this.age);
  //   return marsAge;
  // };

  mercuryExpectancy(){
    let mercuryAge = this.mercuryAge();
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
    let venusAge = this.venusAge();
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
    let marsAge = this.marsAge();
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
    let jupiterAge = this.jupiterAge();
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
