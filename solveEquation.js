"use strict";
function solveEquation(a, b, c){
  let x = [];
  let D = b*b - 4*a*c;
  if(D>0){ 
    x[0] = (-b + Math.sqrt(D)) / (2*a);
    x[1] = (-b - Math.sqrt(D)) / (2*a);
  }
  if(D == 0){
    x[0] = -b / (2*a);
  }
  return x;
}



