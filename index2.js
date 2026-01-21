
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

