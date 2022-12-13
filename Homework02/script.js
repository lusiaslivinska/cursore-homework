console.log("Homework02");
let n;
let m;
let result=0;
let answer;
do {
   n =parseInt(prompt("Enter N"),10);
}
while(!Number.isInteger(n));
do {
   m =parseInt(prompt("Enter M, M>N!"),10);
   
}
while(!Number.isInteger(m) || n>m);

answer =confirm("Use all numbers?");
if (answer==true){
   for(let i=n;i<=m;i++)
   {
      result=result+i;
      console.log(result);  
   }  
}
else  
{
   console.log("yes");
      for(i=n;i<=m;i++){
      if(i%2!==0){
         result=result+i;
      }

      console.log(result); 
   }
      
}