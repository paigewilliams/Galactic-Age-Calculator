import { Calculator } from './../src/calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $(".age-form").submit(function(event){
    event.preventDefault();

    let date = $("#date").val();
    console.log(date)
    let exp = parseInt($("#exp").val());
    
    let calc = new Calculator(date, exp);
    let expectancies = calc.galacticExpCalc();

    let ages = calc.galacticAges;

    console.log(ages);

  });
});
