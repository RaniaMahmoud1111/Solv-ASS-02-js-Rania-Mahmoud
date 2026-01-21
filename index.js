
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
