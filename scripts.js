

for (let i = 0; i < 2; i++) {
    document.getElementById('question-mark1');
  }

function EventListener(){
 var r;  
document.getElementById("hand").addEventListener("click", function(){
const image = document.getElementById('question-mark1');
var r
 image.src =  document.getElementById('hand').src
 r==1
 return r
  })
  
  



document.getElementById("rock").addEventListener("click", function(){
    const image = document.getElementById('question-mark1')
    var r
      image.src =  document.getElementById('rock').src
      r==2
      return r
      })
      
     
document.getElementById("scissor").addEventListener("click",  function(){
    const image = document.getElementById('question-mark1');
    var r
     image.src =  document.getElementById('scissor').src
     r==3
     return r;
      })
      
      return r
}
    
      function RandomChoice() {
        random=Math.floor(Math.random() * 3);
        if (random==1)
        {
             document.getElementById("question-mark2").src=document.getElementById("hand").src;
             return 1
        }
        else if (random==2)
        {
             document.getElementById("question-mark2").src=document.getElementById("rock").src;
             return 2
        }
        else  (random==3)
        {
            document.getElementById("question-mark2").src=document.getElementById("scissor").src;
        return 3
        }

     
      }
    




    

function winlose(){
    
if((EventListener()==1)==(RandomChoice()==1))
{
   
 document.getElementById("win-lose").innerHTML="Draw"

    

}
else if((EventListener()==1)==(RandomChoice()==2))
{
   
 document.getElementById("win-lose").innerHTML="win"

    

}
else if((EventListener()==1)==(RandomChoice()==3))
{
   
 document.getElementById("win-lose").innerHTML="lose"

    

}
else if((EventListener()==2)==(RandomChoice()==1))
{
   
 document.getElementById("win-lose").innerHTML="lose"

    

}
else if((EventListener()==2)==(RandomChoice()==2))
{
   
 document.getElementById("win-lose").innerHTML="draw"

    

}
else if((EventListener()==2)==(RandomChoice()==3))
{
   
 document.getElementById("win-lose").innerHTML="win"

    

}
else if((EventListener()==3)==(RandomChoice()==1))
{
   
 document.getElementById("win-lose").innerHTML="win"

    

}
else if((EventListener()==3)==(RandomChoice()==2))
{
   
 document.getElementById("win-lose").innerHTML="lose"

    

}
else if((EventListener()==3)==(RandomChoice()==3))
{
   
 document.getElementById("win-lose").innerHTML="draw"

    

}
}

  

  

