

//exercice 1

var adressNumber = 3;
var adressStreet = " gad mahness ";
var country = "Israel" ;
var global_adress = "i live in " +adressStreet + adressNumber +", "+ country;


//exercice2-3

var pets = ['cat','dog','fish','rabbit','cow'];

var waw = pets.length;



var newDog = "Chhuahua";

var nbrlettre = 0;

for (var i = newDog.length - 1; i >= 0; i--) {


	nbrlettre++;
	
}

if(newDog == "Chhuahua") alert("i LOVE BOUNTY");
else alert("who are u ?")


//exercice 4

var myBirth = 1994;

var futureBirth = 2038;

var resultat = futureBirth - myBirth;

 alert ("en " + futureBirth + " j'aurais " + resultat)



//exercice 5



var string = "swimming";

if ( string.length < 3 )  alert( string );

 else if (string.length >=3 ) {

    if ( string.endsWith("ing") ) 
 	alert(string +'ly')

    else (alert(string +'ly'))


 }



 	

 	//exercice 6

 var string2 = "im not very bad  ";

var not = 'not';
var bad = 'bad';
var indexOfFirst = string2.indexOf('not');
var indexOfSecond = string2.indexOf('bad');


if (  indexOfFirst && indexOfSecond  ) {
	 var rep = string2.replace("bad", "good");
	 var rep = rep.replace("not" , "well");

	 alert(rep);	
}
else alert(string2);



//exercice 7


var Nb =  prompt( "please enter a number");

if (Nb % 2 == 0) alert("x is an even number");
else alert("x is NOT an even number");


//ecercice 8

var x = 34;
var y = 23;

if(x>y) alert(  x+ " is bigger than " + y) ;
else alert( y + " is bigger than " + x) ;


//exercie 9

var language = prompt("which language you speak?");

if (language == "frensh") {console.log("Bonjour")};
if (language == "english") {console.log("Hello")};
if (language == "Hebrew") {console.log("Shalom")};


//exercice 10 a revoir !!



var usergrade = [];


for (var i = 0; i <= 2; i++) 
{


var grade = parseInt(prompt("give me a grade"));

var gradevar = grade;

var coeff = parseInt(prompt("give me a coefficient"));

var coeffvar = coeff;

	usergrade.push(gradevar , coeffvar);

	console.log(usergrade);

}

console.log(calcul(usergrade));

function calcul(usergrade) {

	console.log("My array is " + usergrade);
	var total = 1;

    for ( i = 0 ; i < usergrade.length; i++) {

        if (i % 2 == 0 ) {

     	var addition =  usergrade[i] + total;
     	total = addition;
         }
         
        var multip = usergrade[i] * total;

       
	} 
	
	return multip;
}

//exercice 12


var colors = ['blue','orange','green'];
var classement = ['1st','2sd','3rd']
var y = 0;
for ( var i = colors.length-1; i >= 0; i--) {

    
	alert('My ' +classement[y]+ " is a " +colors[y]) 
	y++;
}



//exercice 13


var numberten  =   prompt("give me a number");
var newnumber = prompt("give me a new number");


while (numberten <= 10) {


	 numberten;


}


//exercice 14

var people = ["Greg","Mary","Devon","James"];


var counter = 0;

while ( counter < people.length  )
{
	console.log( people[counter]);
	counter++;
}

people.shift();
console.log( people);


people.splice(2,1,"Jason");
console.log(people);

people.push("Ilan");
console.log(people);

var Mary = 0;

while(people[Mary] != "Mary" )
{
	
	console.log( people[Mary]);

	Mary++;
}


var splice = people.splice(3,4);
var splice2 = people.splice(0,1);
console.log(splice,splice2);
console.log(people);

var n = people.indexOf("Mary");

console.log(n);

var last = people.length-1;

console.log(people[last]);


//exercice 15

var age = [20,5,12,43,98,55];
console.log(age);
var add = 0;
for (var i = 0; i <= age.length-1; i++) {

	var addition = age[i]+ add;
	add  = addition ;
}
console.log(add);

//exercice 16


var Nbbottles =  prompt("input a starting number");

console.log(Nbbottles + " bottles of beer on the wall \n" + Nbbottles + " bottles of beer");

var i = 1;

while ( Nbbottles >= 0 ){

	console.log(Nbbottles + " bottles of beer on the wall \n" + Nbbottles + " bottles of beer \n" + Nbbottles + " bottles of beer");
	console.log("Take " +[i]+ " down, pass it around");

	var Nbbottles =  Nbbottles - i;
	i++;

	if ( Nbbottles < i  ) {console.log(" For 1 bottle, you pass it around. \n For more than one bottle, you pass them around.")}

}

//ecercice 17 


String.prototype.toJadenCase = function () { 

	return this.split(" ").map(function(word){
		return word.charAt(0).toUpperCase() + word.slice(1);
	}).join(" ");
}
var newStr = "you know nothing john";
 console.log(newStr.toJadenCase()) ;

//exercice 18

var etoile = "      *\n";
var espace = "";
var counter1 = 5;
var counter2 = 1;
for (var i = 6; i > 0; i--) {
	
	if(i!=3){
		for(var j = 0; j<counter1;j++){
			etoile+=" ";
		}
		etoile+="*";
		for(var j = 0; j<counter2;j++){
			etoile+=" "
		}
		etoile+="*\n"
	}else{
		etoile+="  *********\n"
	}


	counter1--;
	counter2+=2;
}
console.log(etoile);


//exercice 19 


var phrase = prompt();  
var res = phrase.split(" ");
var maxlength = 0;
var returntext = "";
for(var i = 0; i < res.length ; i++ ){
	if(res[i].length > maxlength){
		maxlength = res[i].length;
	}
}

for(var i = 0; i<maxlength+2; i++){
	returntext+="*";
}
returntext+="\n"


for (var i = 0; i < res.length; i++) {
	returntext+="*"+res[i];
	for(var j = 0; j<maxlength-res[i].length;j++){
		returntext+= " ";
	}
	returntext+="*\n"

for(var i = 0; i<maxlength+2; i++){
	returntext+="*";
}

console.log(returntext);





//exercice 20 

var findword = "abcde";
var arr_findword = findword.split('');
var etoile = "";
var arr_etoile = etoile.split('');
var lifes = 7;






	arr_etoile.length = arr_findword.length;

	for (var y = 0; y < arr_findword.length; y++) {

		arr_etoile[y] = "*";

     }

      console.log(arr_etoile);

      var wesh = 0  

      while(lifes > 0){

      	

      	var lastcount = 0 ; 

     for (var i = 0; i < arr_findword.length;  i++) {

    	if ( arr_etoile[i] == arr_findword[i]){ lastcount++; } 
    	if (lastcount == arr_findword.length){ console.log("you win!!") ; break;}
        }

	var lettre = prompt("give a letter");


    
     
     var count = 0;
     
     while (lettre != arr_findword[count])

     {   

         if (lettre == arr_findword[count]){
        
            arr_etoile[count] = lettre;
     	    
     	    console.log( "U have still " + lifes); 
     	    console.log(arr_etoile);
     	    break;
     	    }

         if (count >= arr_findword.length) {

         	count = 0;

         	break;
         }

        count++;

     }
      
   

   if (lettre == arr_findword[wesh] && arr_findword[wesh] != arr_etoile[wesh] ){
        
            arr_etoile[wesh] = lettre;
     	    console.log(arr_etoile);
     	    
     	    }


    if (lettre == arr_findword[count] && arr_findword[count] != arr_etoile[count] ) {
        
            arr_etoile[count] = lettre;
     	    console.log(arr_etoile);
     	    
     	    }



      if(lettre != arr_findword[wesh] || lettre != arr_findword[count])
     {


     	 lifes = lifes - 1;
         console.log( "U have still " + lifes); 
         
         
        }
       
    
      
       wesh++;

       }



   if (lifes == 0)console.log("u loose");
  
      }

	















