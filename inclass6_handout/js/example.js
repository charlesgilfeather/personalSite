// ADD NEW ITEM TO END OF LIST
var para = document.createElement("li");
var node = document.createTextNode("cream");
para.appendChild(node);
var element = document.getElementById("page");
element.appendChild(para);

// ADD NEW ITEM START OF LIST
var para2 = document.createElement("li");
var node2 = document.createTextNode("kale");
para2.appendChild(node2);
var element2 = document.getElementById("page");
var child = document.getElementById("one");
element2.insertBefore(para2, element2.childNodes[4]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
document.getElementById("page").childNodes[4].classList.add("cool");
document.getElementById("page").childNodes[8].classList.add("cool");
document.getElementById("one").classList.add("cool");
document.getElementById("two").classList.add("cool");
document.getElementById("three").classList.add("cool");
document.getElementById("four").classList.add("cool");

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var nodelist = document.getElementsByTagName("li").length;
nodelist = " (size = " + nodelist + ")";
document.getElementById("page").childNodes[3].innerHTML += nodelist;
