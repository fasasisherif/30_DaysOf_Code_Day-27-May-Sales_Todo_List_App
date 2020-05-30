/* I FIRST DECLARE ALL MY VARIABLES WITH THIS FORMAT */

var put = document.getElementById("put");
var make = document.getElementById("make");
var items = document.getElementById("items");
var clear = document.getElementById("clear");
var what = document.getElementsByClassName("what");
var appear = document.getElementsByClassName("appear");
var edit = document.getElementsByClassName("edit");

/* I CREATED AN EMPTY ARRAY WHERE I'LL STORE THE VALUES INPUTTED INTO THE INPUT BOX */
var arr = [];

/* I THEN CREATE A CLICK ACTION ON THEM USING "addEventListener("click", function_name)" */

make.addEventListener("click",myfunc1)
clear.addEventListener("click",myfunc2)
edit[0].addEventListener("click",myfunc3)
what[0].addEventListener("click",myfunc4)

/* I CREATE AN ALERY FUNCTION THAT RUNS IF THE "make task" BUTTON IS PRESSED WHEN THE INPUT BOX IS EMPTY */

function myfunc1(){	
if (put.value == ""){
alert("Put a task in the designated input box.")		
	}		

/* ACTUALLY, THE TO DO APP IS SIMPLE, NOTHING SPECIAL. BUT I INITIALLY THOUGHT IT WAS A HARD THING. THANKS TO STACKOVERFLOW */
/* I USE "put.value" TO ACCESS THE VALUE INSIDE THE INPUT TAG */	
/* THE VARIABLE "added"	IS THE VALUE IN THE INPUT BOX */		

var added = put.value;	

/* THIS ADDS THE VALUE IN THE INPUT BOX INTO THE EMPTY ARRAY "arr" I DECLARED EARLIER */

arr.push(added)	;	

/* JAVASCRIPT "localStorage" IS USED TO STORE DATA IN THE BROWSER WITH NO EXPIRATION DATE, EVEN IF THE BROWSER IS CLOSED, THE DATA WILL PERSIST */
/* WE HAVE "localStorage.setItem()", 	"localStorage.getItem()" and  "localStorage.clear()" */
/* I USE "localStorage.setItem()" TO SET A "key", "value" PAIR DATA*/
/* THE DATA IS INITIALLY FORMED AS AN OBJECT. SO I USE "JSON.stringify()" TO CONVERT IT TO A STRING */

localStorage.setItem("list", JSON.stringify(arr[arr.length - 1]))		

/* HERE, I CREATE AN "<LI></LI>" TAG WHERE THE DATA INPUTTED GOES */

var li = document.createElement("LI")
var node = document.createTextNode(arr)
items.appendChild(li)

/* HERE "JSON.parse()" CONVERTS THE DATA IN THE LOCAL STORAGE INTO AN OBJECT BACK IN ORDER TO GET THE VALUE OF THE "key" */
/* THE NAME IF THE KEY IS "list" AND THE VALUES ARE THE INPUT DATA THAT IS PUSHED INTO THE ARRAY "arr" */
li.innerHTML = JSON.parse(localStorage.getItem("list"))
 }
 

/* THIS FUNCTION CLEARS THE PAGE AND THE LOCAL STORAGE */
 
function myfunc2(){
put.value =""
arr = []
localStorage.clear()		
items.innerHTML = ""	
	} 

/* THIS MAKES THE "contentEditable" TRUE OR FALSE ON CLICKING THE "edit task" BUTTON */

var b = 0;
function myfunc3(){		
items.contentEditable ="true";
b++;

if(b%2 === 0){
items.contentEditable ="false";		
		}			
	}

/* I USE THIS FOR THE HIDDEN INPUT TAG ANIMATION */ 

var a = 0;
function myfunc4(){
appear[0].style.width = "auto"		
appear[0].style.height = "75px"	
a++;

if(a%2 === 0){
appear[0].style.width = "auto"		
appear[0].style.height = "0px"		
		}
	} 
 
