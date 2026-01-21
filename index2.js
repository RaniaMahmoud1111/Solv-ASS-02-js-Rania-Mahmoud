
//Q 04 
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