/*
 File: js/javascript.js
 91.61 GUI Programming I Assignment 9:
   Purpose: Partner javascript file
 Charles K Gilfeather, UMass Lowell Computer Science
 Charles_Gilfeather@student.uml.edu
 Copyright (c) 2018 by Charles K Gilfeather. All Rights Reserved. May be freely copied or excerpted for educational purposes with credit to the author.
 updated by CKG on 12/19/2018 at 10:42 PM
*/

// ScrabbleTiles data structure
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

// myFunction -> will load the board into place
function myFunction() {
    // set obj and json values
    var myObj, myJSON;
    // pick a random board
    var rnd = Math.floor((Math.random() * 8) + 1);
    // create image elements to display the board
    var element1 = document.createElement("IMG");
    var element2 = document.createElement("IMG");
    var element3 = document.createElement("IMG");
    var element4 = document.createElement("IMG");
    var element5 = document.createElement("IMG");
    var element6 = document.createElement("IMG");
    var element7 = document.createElement("IMG");
    var element8 = document.createElement("IMG");
    var element9 = document.createElement("IMG");
    var element10 = document.createElement("IMG");
    var element11 = document.createElement("IMG");
    var element12 = document.createElement("IMG");
    var element13 = document.createElement("IMG");
    var element14 = document.createElement("IMG");
    var element15 = document.createElement("IMG");
    // adjust heights
    element1.height = 90;
    element2.height = 90;
    element3.height = 90;
    element4.height = 90;
    element5.height = 90;
    element6.height = 90;
    element7.height = 90;
    element8.height = 90;
    element9.height = 90;
    element10.height = 90;
    element11.height = 90;
    element12.height = 90;
    element13.height = 90;
    element14.height = 90;
    element15.height = 90;

    // the following 8 if statements will display a corresponding board based on the random number generated. It will set the image
    // to the attribute value and then append it to each element
    if(rnd == 1){
      element1.setAttribute("src", "img/Scrabble_Space_Triple_Word.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Triple_Word.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Triple_Word.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else if(rnd == 2){
      element1.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Triple_Letter.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Triple_Letter.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else if(rnd == 3){
      element1.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else if(rnd == 4){
      element1.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else if(rnd == 5){
      element1.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Double_Word.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else if(rnd == 6){
      element1.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Triple_Letter.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Triple_Letter.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Triple_Letter.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Triple_Letter.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else if(rnd == 7){
      element1.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element15').appendChild(element15);
    }
    else{
      element1.setAttribute("src", "img/Scrabble_Space_Triple_Word.jpg");
      document.getElementById('element1').appendChild(element1);
      element2.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element2').appendChild(element2);
      element3.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element3').appendChild(element3);
      element4.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element4').appendChild(element4);
      element5.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element5').appendChild(element5);
      element6.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element6').appendChild(element6);
      element7.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element7').appendChild(element7);
      element8.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element8').appendChild(element8);
      element9.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element9').appendChild(element9);
      element10.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element10').appendChild(element10);
      element11.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element11').appendChild(element11);
      element12.setAttribute("src", "img/Scrabble_Space_Double_Letter.jpg");
      document.getElementById('element12').appendChild(element12);
      element13.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element13').appendChild(element13);
      element14.setAttribute("src", "img/Scrabble_Space_Normal.jpg");
      document.getElementById('element14').appendChild(element14);
      element15.setAttribute("src", "img/Scrabble_Space_Triple_Word.jpg");
      document.getElementById('element15').appendChild(element15);
    }
}

// myFunction2 -> sets up the pieces
function myFunction2(){
  // variable declarations
  var myObj, myJSON;

  // create an image, set it's height, then send it to the createLetter function which chooses which letter it is
  var letter1 = document.createElement("IMG");
  letter1.height = 90;
  createLetter(letter1, "letval1", 'letter1');
  var letter2 = document.createElement("IMG");
  letter2.height = 90;
  createLetter(letter2, "letval2", 'letter2');
  var letter3 = document.createElement("IMG");
  letter3.height = 90;
  createLetter(letter3, "letval3", 'letter3');
  var letter4 = document.createElement("IMG");
  letter4.height = 90;
  createLetter(letter4, "letval4", 'letter4');
  var letter5 = document.createElement("IMG");
  letter5.height = 90;
  createLetter(letter5, "letval5", 'letter5');
  var letter6 = document.createElement("IMG");
  letter6.height = 90;
  createLetter(letter6, "letval6", 'letter6');
  var letter7 = document.createElement("IMG");
  letter7.height = 90;
  createLetter(letter7, "letval7", 'letter7');
}

// createLetter -> will take the letter given to it, randomize a number then select a piece based on the probability
// of that piece occuring, will then send that through to the ui, update the json value based on how much it's worth, then complete
function createLetter(thisLetter, str, sendTo){
  var rnd = Math.floor((Math.random() * 100) + 1);
  var myObj;
  if(rnd >= 1 && rnd <= 9){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_A.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 10 && rnd <= 11){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_B.jpg");
    myObj = {val: 3};
  }
  else if(rnd >= 12 && rnd <= 13){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_C.jpg");
    myObj = {val: 3};
  }
  else if(rnd >= 14 && rnd <= 17){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_D.jpg");
    myObj = {val: 2};
  }
  else if(rnd >= 18 && rnd <= 29){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_E.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 30 && rnd <= 31){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_F.jpg");
    myObj = {val: 4};
  }
  else if(rnd >= 32 && rnd <= 34){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_G.jpg");
    myObj = {val: 2};
  }
  else if(rnd >= 35 && rnd <= 36){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_H.jpg");
    myObj = {val: 4};
  }
  else if(rnd >= 37 && rnd <= 45){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_I.jpg");
    myObj = {val: 1};
  }
  else if(rnd == 46){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_J.jpg");
    myObj = {val: 8};
  }
  else if(rnd == 47){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_K.jpg");
    myObj = {val: 5};
  }
  else if(rnd >= 48 && rnd <= 51){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_L.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 52 && rnd <= 53){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_M.jpg");
    myObj = {val: 3};
  }
  else if(rnd >= 54 && rnd <= 59){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_N.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 60 && rnd <= 67){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_O.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 68 && rnd <= 69){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_P.jpg");
    myObj = {val: 3};
  }
  else if(rnd == 70){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_Q.jpg");
    myObj = {val: 10};
  }
  else if(rnd >= 71 && rnd <= 76){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_R.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 77 && rnd <= 80){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_S.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 81 && rnd <= 86){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_T.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 87 && rnd <= 90){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_U.jpg");
    myObj = {val: 1};
  }
  else if(rnd >= 91 && rnd <= 92){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_V.jpg");
    myObj = {val: 4};
  }
  else if(rnd >= 93 && rnd <= 94){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_W.jpg");
    myObj = {val: 4};
  }
  else if(rnd == 95){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_X.jpg");
    myObj = {val: 8};
  }
  else if(rnd >= 96 && rnd <= 97){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_Y.jpg");
    myObj = {val: 4};
  }
  else if(rnd == 98){
    thisLetter.setAttribute("src", "img/Scrabble_Tile_Z.jpg");
    myObj = {val: 10};
  }
  else{
    thisLetter.setAttribute("src", "img/Scrabble_Tile_Blank.jpg");
    myObj = {val: 0};
  }
  document.getElementById(sendTo).appendChild(thisLetter);
  var myJSON = JSON.stringify(myObj);
  localStorage.setItem(str, myJSON);
}

// removeBoard -> removes the children of each element then reloads myFunction()
function removeBoard(){
  // remove nodes
  document.getElementById('element1').removeChild(document.getElementById('element1').childNodes[0]);
  document.getElementById('element2').removeChild(document.getElementById('element2').childNodes[1]);
  document.getElementById('element3').removeChild(document.getElementById('element3').childNodes[1]);
  document.getElementById('element4').removeChild(document.getElementById('element4').childNodes[1]);
  document.getElementById('element5').removeChild(document.getElementById('element5').childNodes[1]);
  document.getElementById('element6').removeChild(document.getElementById('element6').childNodes[1]);
  document.getElementById('element7').removeChild(document.getElementById('element7').childNodes[1]);
  document.getElementById('element8').removeChild(document.getElementById('element8').childNodes[1]);
  document.getElementById('element9').removeChild(document.getElementById('element9').childNodes[1]);
  document.getElementById('element10').removeChild(document.getElementById('element10').childNodes[1]);
  document.getElementById('element11').removeChild(document.getElementById('element11').childNodes[1]);
  document.getElementById('element12').removeChild(document.getElementById('element12').childNodes[1]);
  document.getElementById('element13').removeChild(document.getElementById('element13').childNodes[1]);
  document.getElementById('element14').removeChild(document.getElementById('element14').childNodes[1]);
  document.getElementById('element15').removeChild(document.getElementById('element15').childNodes[1]);
  // call myFunction again to reload board
  myFunction();
}

// newLetters -> will do the same as removeBoard except do the letters and the board at the same time
function newLetters(){
  document.getElementById('letter1').removeChild(document.getElementById('letter1').childNodes[0]);
  document.getElementById('letter2').removeChild(document.getElementById('letter2').childNodes[0]);
  document.getElementById('letter3').removeChild(document.getElementById('letter3').childNodes[0]);
  document.getElementById('letter4').removeChild(document.getElementById('letter4').childNodes[0]);
  document.getElementById('letter5').removeChild(document.getElementById('letter5').childNodes[0]);
  document.getElementById('letter6').removeChild(document.getElementById('letter6').childNodes[0]);
  document.getElementById('letter7').removeChild(document.getElementById('letter7').childNodes[0]);
  removeBoard();
  myFunction2();
}
