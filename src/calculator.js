export class Calculator {
  constructor(birthday, lifeExpectancy){
    this.birthday = new Date(birthday);
    this.now = new Date();
    this.lifeExpectancy = lifeExpectancy;
    this.age = 0;
    this.galacticAges = [];
    this.galacticExpectancy = [];
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

  galacticExpCalc(){
    this.galacticAgeCalc();
    const planets = ["Mercury", "Venus", "Mars", "Jupiter"];
    for(var i = 0; i< planets.length; i++){
      let expectancy = this.galacticAges[i] - this.lifeExpectancy;
      if (expectancy > 0 ){
        this.galacticExpectancy.push(`You have lived ${expectancy} years longer than expected on planet ${planets[i]}`);
      }
      else {
        expectancy *= -1;
        this.galacticExpectancy.push(`You have ${expectancy} years left on planet ${planets[i]}`);
      }
    }
    return this.galacticExpectancy;
  };

}
