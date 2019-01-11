export class Calculator {
  constructor(birthday, lifeExpectancy){
    this.birthday = new Date(birthday);
    this.now = new Date();
    this.lifeExpectancy = lifeExpectancy;
    this.age = 0;
  }

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
  }
}
