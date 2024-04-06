//Event Listeners

RandomChoice()

winlose()

function EventListener(){
   
document.getElementById("hand").addEventListener("click", function(){
const image = document.getElementById('question-mark1');

 image.src =  document.getElementById('hand').src
 return 1;
  })
  
  



document.getElementById("rock").addEventListener("click", function(){
    const image = document.getElementById('question-mark1')
    
      image.src =  document.getElementById('rock').src
      return 2;
      })
      
     
document.getElementById("scissor").addEventListener("click",  function(){
    const image = document.getElementById('question-mark1');
    
     image.src =  document.getElementById('scissor').src
     return 3
      })
      
      
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
             return 2;
        }
        else  (random==3)
        {
            document.getElementById("question-mark2").src=document.getElementById("scissor").src;
        return 3;
        }
      }
    




    

function winlose(){
    
if((EventListener()==1)===(RandomChoice()==1))
{
   
 document.getElementById("win-lose").innerHTML="Draw"

    

}
}

  

  

