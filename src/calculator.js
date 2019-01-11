export class Calculator {
  constructor(birthday, lifeExpectancy){
    this.birthday = new Date(birthday);
    this.now = new Date();
    this.lifeExpectancy = lifeExpectancy;
    this.age = 0;
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

  mercuryAge(){
    this.findAge();
    let mercuryAge = parseInt((1/.24)* this.age);
    return mercuryAge;
  };

  venusAge(){
    this.findAge();
    let venusAge = parseInt((1/.62)* this.age);
    return venusAge;
  };

  marsAge(){
    this.findAge();
    let marsAge = parseInt((1/1.88)* this.age);
    return marsAge;
  };

  jupiterAge(){
    this.findAge();
    let marsAge = parseInt((1/11.86)* this.age);
    return marsAge;
  };

  mercuryExpectancy(){
    let mercuryAge = this.mercuryAge();
    let expectancy = mercuryAge - this.lifeExpectancy;
    if (expectancy > 0) {
      return `You have lived ${expectancy} years longer than expected on planet Mercury`;
    }
    else {
       return `You have ${expectancy} years left on planet Mercury`;
    }
  };

  // venusExpectancy(){
  //   let venusAge = this.venusAge();
  //   let expectancy = venusAge - this.lifeExpectancy;
  //   if (expectancy > 0) {
  //     return `You have lived ${expectancy} years longer than expected on planet Venus`;
  //   }
  //   else {
  //      return `You have ${expectancy} years left on planet Venus`;
  //   }
  // };

}
