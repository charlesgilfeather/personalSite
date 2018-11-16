/*
 File: js/javascript.js
 91.61 GUI Programming I Assignment 6:
   Purpose: Partner javascript file
 Charles K Gilfeather, UMass Lowell Computer Science
 Charles_Gilfeather@student.uml.edu
 Copyright (c) 2018 by Charles K Gilfeather. All Rights Reserved. May be freely copied or excerpted for educational purposes with credit to the author.
 updated by CKG on 11/15/2018 at 8:17 PM
*/

function myFunction() {
    // variable creation
    var valX1, valX2, valY1, valY2;
    var text_x = "", text_y = "";
    var boolx = false, booly = false;
    var temp;
    var c1, c2;

    // get values from user input areas
    valX1 = document.getElementById("x1").value;
    valX2 = document.getElementById("x2").value;
    valY1 = document.getElementById("y1").value;
    valY2 = document.getElementById("y2").value;

    // trim any whitespace
    valX1 = valX1.trim();
    valX2 = valX2.trim();
    valY1 = valY1.trim();
    valY2 = valY2.trim();

    // check for validity for x values
    // if x1 throws error, set bool value to make sure we know it failed x1 so we print the correct error message
    // if x2 fails, check for x1 failure and print respective error message
    // if pass then we're all good
    if (isNaN(valX1) || valX1 % 1 != 0 || valX1.length == 0) {
        text_x = "Error: First x value invalid";
        document.getElementById("x_errors").innerHTML = text_x;
        boolx = true;
    }
    else{
      boolx = false;
      text_x = "";
      document.getElementById("x_errors").innerHTML = text_x;
    }
    if (isNaN(valX2) || valX2 % 1 != 0 || valX2.length == 0) {
      if(boolx){
        text_x += " & second x value invalid"
        document.getElementById("x_errors").innerHTML = text_x;
      }
      else{
        text_x = "Error: Second x value invalid";
        document.getElementById("x_errors").innerHTML = text_x;
        boolx = true;
      }
    }
    else{
      if(boolx){
        text_x = "Error: First x value invalid";
        document.getElementById("x_errors").innerHTML = text_x;
        boolx = true;
      }
      else{
        text_x = "";
        document.getElementById("x_errors").innerHTML = text_x;
      }
    }

    // do the same thing but for the y values
    if (isNaN(valY1) || valY1 % 1 != 0 || valY1.length == 0) {
        text_y = "Error: First y value invalid";
        document.getElementById("y_errors").innerHTML = text_y;
        booly = true;
    }
    else{
      booly = false;
      text_y = "";
      document.getElementById("y_errors").innerHTML = text_y;
    }
    if (isNaN(valY2) || valY2 % 1 != 0 || valY2.length == 0) {
      if(booly){
        text_y += " & second y value invalid"
        document.getElementById("y_errors").innerHTML = text_y;
      }
      else{
        text_y = "Error: Second y value invalid";
        document.getElementById("y_errors").innerHTML = text_y;
        boolx = true;
      }
    }
    else{
      if(booly){
        text_y = "Error: First y value invalid";
        document.getElementById("y_errors").innerHTML = text_y;
        booly = true;
      }
      else{
        text_y = "";
        document.getElementById("y_errors").innerHTML = text_y;
      }
    }

    // begin making the table
    // check if we have valid input to make the graph
    if(!boolx && !booly){
      // make valX1 and valY1 always the highest
      if(+valX1 < +valX2){
        temp = valX2;
        valX2 = valX1;
        valX1 = temp;
      }
      if(+valY1 < +valY2){
        temp = valY2;
        valY2 = valY1;
        valY1 = temp;
      }

      // create the table myTable and remove any existing table
      var tbl = document.getElementById("myTable");
      if(tbl) {
        tbl.parentNode.removeChild(tbl);
      }
      document.createElement("TABLE");
      var tab = document.createElement("TABLE");
      tab.setAttribute("id", "myTable");
      document.body.appendChild(tab);

      // set column and row lengths
      cn = (valX1 - valX2) + 2;
      rn = (valY1 - valY2) + 2;

      // two counters for the multiplicands
      c1 = valX2;
      c2 = valY2;

      // insert the first row, which is all of the x values within the range
      var x = document.getElementById('myTable').insertRow(0);
      x.style.backgroundColor = "black";
      x.style.color = "white";
      for(var c = 0; c < parseInt(cn, 10); c++){
        var y = x.insertCell(c);
        if(c != 0){
          y.innerHTML = c1;
          y.style.backgroundColor = "black";
          y.style.color = "white";
          c1++;
        }
      }

      // parse through the rest of the rows, making the first cell the y value then the rest multiply results
      // with the corresponding x value
      for(var r = 1; r < parseInt(rn, 10); r++){
        var x = document.getElementById('myTable').insertRow(r);
        for(var c = 0; c < parseInt(cn, 10); c++){
          var y = x.insertCell(c);
          if(c == 0){
            y.innerHTML = c2;
            y.style.backgroundColor = "black";
            y.style.color = "white";
            c2++;
          }
          else{
            y.innerHTML = ((c2 - 1) * (parseInt(valX2) + c - 1));
          }
        }
      }
    }
}
