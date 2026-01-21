
//Q 04 
/*
let uName;
do{
uName=prompt("enter your name .");
}while(uName ==="" || !isNaN(uName));

let uBirthYear;
do{
uBirthYear=Number(prompt("enter your Birth year ."));
}while( isNaN(uBirthYear) || uBirthYear >=2010);

userAge=2026-uBirthYear;

document.writeln("<ul style='list-style-type:none;'> <li><b><u> Name:  </u></b> "+uName+" </li> <li><b><u> BirthYear:   </u></b>"+uBirthYear+"</li> <li><b><u> Age: </u></b>"+ userAge+"  </li> </ul>"  );
*/

//Q 05
/*
let fullName;
let nameFormat;
let emailFormat;


nameFormat=/^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})+$/;
emailFormat =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;


do{
fullName=prompt("enter your name ");
}while(!fullName.match(nameFormat));

let em;
do{
 em=prompt("Please enter your email !");

}while( !em.match(emailFormat) );

document.writeln("<h3>full name: "+fullName +"<br/>email: "+em +" <h3>")
*/

//Q 01 on String 
//1.1
/*
let st=prompt("enter the string ");
let letter=prompt("enter a letter need to check");

var res=confirm("Are you consider the Case Sensative ? ");

if(!res){
    st=st.toLowerCase();//ignore case sensative 
    letter=letter.toLowerCase();
}
var count=0;


for(let i=0;i<st.length ; i++){
    if(st[i]===letter)
    count++; }

alert(letter+" is repeated "+count+" times");
*/

//1.2
let word = prompt("enter a word ");

var checkCS = confirm("Are you consider the Case Sensative ? ");

if (!checkCS) {
    word = word.toLowerCase();//ignore case sensative 
}

var flag = 0;
for (let j = 0; j < word.length / 2; j++) {
    if (word[j] != word[word.length - 1 - j]) {
        flag = 1;
        break;
    }

}
if (flag === 1)
    alert(word + " is not palindrom");
else if (flag === 0) {
    alert(word + " is a palindrom");
}