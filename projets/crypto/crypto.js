var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",",",".",";"," "];
var chiffre = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
var textchiffre="";
var textclair="";
var tableautextclair=[];
var tableautextchiffre=[];
var temp=[];

//la fonction pour chiffrer


function Chiffre() {

temp=[];

textclair = document.getElementById("textclairachiffrer").value.toLowerCase(); // méthode toLowerCase() retourne la chaîne de caractères en minuscules

tableautextclair=textclair.split(""); // transforme une chaine de carcatère en tableau

for (i=0;i<tableautextclair.length;i++) { // sert à identifier les lettres de l'alphabet (étape2)

for (j=0;j<alphabet.length;j++) { // étape 2 

if (tableautextclair[i]==alphabet[j]) { // étape 2 

temp[i]=(chiffre[j]*17+3)%30; // étape 3

}

}

}

for (i=0;i<temp.length;i++) { // convertir le chiffrage en texte

for (j=0;j<chiffre.length;j++) {

if (temp[i]==chiffre[j]) {

tableautextchiffre[i]=alphabet[j]; //

}

}

}


document.getElementById("resultattextchiffre").innerHTML = tableautextchiffre.join("");

}

// la fonction pour déchiffrer

function Dechiffre() {

temp=[];

textchiffre=document.getElementById("textadechiffrer").value.toLowerCase();

tableautextchiffre =  textchiffre.split("");

for (i=0;i<tableautextchiffre.length;i++) {

for (j=0;j<alphabet.length;j++) {

if (tableautextchiffre[i]==alphabet[j]) {

temp[i]=23*(30+chiffre[j]-3)%30; // "30+" permet de ne pas avoir de négatifs, solved problem ovh

}

}

}


for (i=0;i<temp.length;i++) {

for (j=0;j<chiffre.length;j++) {

if (temp[i]==chiffre[j]) {

tableautextclair[i] = alphabet[j];

}

}

}


document.getElementById("resultattextdechiffre").innerHTML = tableautextclair.join("");

}

