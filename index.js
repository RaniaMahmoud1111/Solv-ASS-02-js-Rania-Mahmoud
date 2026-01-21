
//Q 01
let stdGrades=new Array(60,100,10,15,85);

//1.a: 
let srt= stdGrades.sort((a,b)=>b-a);//sorting descending
console.log(srt);
//1.b:
let HighDegr=srt.find((a)=> a>=100 );
console.log(HighDegr);
//1.c
let LesThn60= srt.filter((a)=>a<60);
console.log(LesThn60);

//Q 02

//2.a 
alert("Welcome to my site")
//2.b
let userName=prompt("Enter your name !");
//here the document.write replace the content of page with Welcome with person name 
document.writeln("<h3> Welcome " +userName + "</h3>");


