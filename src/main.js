import { Calculator } from './../src/calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $(".age-form").submit(function(event){
    event.preventDefault();

    let date = $("#date").val();
    let exp = parseInt($("#exp").val());
    let calc = new Calculator(date, exp);

    calc.galacticExpCalc();
    let expect = calc.galacticExpectancy;
    let ages = calc.galacticAges;


    $("#mercury").html(ages[0]);
    $("#venus").html(ages[1]);
    $("#mars").html(ages[2]);
    $("#jupiter").html(ages[3]);

    $("#mercury-exp").html(expect[0]);
    $("#venus-exp").html(expect[1]);
    $("#mars-exp").html(expect[2]);
    $("#jupiter-exp").html(expect[3]);



    $(".output").show();

  });
});
