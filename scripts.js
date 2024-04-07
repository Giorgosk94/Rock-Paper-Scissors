/* 
function hand(){
   
const image = document.getElementById('question-mark1');

     image.src =  document.getElementById('hand').src
   return 1
 
      }

      function rock(){
      
          
    
        const image = document.getElementById('question-mark1')
          image.src =  document.getElementById('rock').src
        return 2
          
          }
    
    
function scissor(){
    
    
    const  image = document.getElementById('question-mark1')
    image.src= document.getElementById('scissor').src 
   return 3
      }


 
document.getElementById("hand").addEventListener("click",hand)


document.getElementById("rock").addEventListener("click",rock )

    
     
document.getElementById("scissor").addEventListener("click",scissor)
 */
      
    

    /* 
      function RandomChoice() {
        random=Math.floor(Math.random() * 3);
        if (random==1)
        {
             document.getElementById("question-mark2").src=document.getElementById("hand").src;
           
            return random
        }
        else if (random==2)
        {
             document.getElementById("question-mark2").src=document.getElementById("rock").src;
          
            return random
        }
        else if  (random==3)
        {
            document.getElementById("question-mark2").src=document.getElementById("scissor").src;
            
           return random
        }

     
      } */



   /*   function win(){
        
        if(((RandomChoice()==1)&&(hand()==1))||((RandomChoice()==2)&&(rock()==2))||((RandomChoice()==3)&&(scissor()==3))){
            document.getElementById("win-lose").innerHTML="draw"
        }
        else if(((RandomChoice()==1)&&(rock()==2))||((RandomChoice()==2)&&(scissor()==3))||((RandomChoice()==3)&&(hand()==1))){
            document.getElementById("win-lose").innerHTML="win"
        }
        else if(((RandomChoice()==1)&&(scissor()==3))||((RandomChoice()==3)&&(rock()==2))||((RandomChoice()==2)&&(hand()==1))){
            document.getElementById("win-lose").innerHTML="lose"
           
        }
        } */


     /*    function win(){
        
            if((RandomChoice()==1)&&(hand()==1)){
                document.getElementById("win-lose").innerHTML="draw"
            }
            else if((RandomChoice()==2)&&(rock()==2)){
                document.getElementById("win-lose").innerHTML="draw"
            }
            else if((RandomChoice()==3)&&(scissor()==3)){
                document.getElementById("win-lose").innerHTML="draw"
               
            }


            else if((RandomChoice()==1)&&(hand()==2)){
                document.getElementById("win-lose").innerHTML="lose"
            }
            else if((RandomChoice()==2)&&(rock()==3)){
                document.getElementById("win-lose").innerHTML="lose"
            }
            else if((RandomChoice()==3)&&(scissor()==1)){
                document.getElementById("win-lose").innerHTML="lose"
               
            }



            else if((RandomChoice()==1)&&(hand()==3)){
                document.getElementById("win-lose").innerHTML="win"
            }
            else if((RandomChoice()==3)&&(rock()==2)){
                document.getElementById("win-lose").innerHTML="win"
            }
            else if((RandomChoice()==2)&&(scissor()==1)){
                document.getElementById("win-lose").innerHTML="win"
               
            }
      

            } */
    
/* function win(){
if((RandomChoice()==1)&&(hand()==1))
{
    document.getElementById("win-lose").innerHTML="draw"
}
} */






      function RandomChoice() {
        random=Math.floor(Math.random() * 3);
        if (random==1)
        {
             document.getElementById("question-mark2").src=document.getElementById("hand").src;
           
            return random
        }
        else if (random==2)
        {
             document.getElementById("question-mark2").src=document.getElementById("rock").src;
          
            return random
        }
        else 
        {
            document.getElementById("question-mark2").src=document.getElementById("scissor").src;
            
           return random
        }

     
      }



document.getElementById("hand").onclick = function() {myFunction1()};

function myFunction1() {
    const image = document.getElementById('question-mark1');

    image.src =  document.getElementById('hand').src
    RandomChoice()
    if (RandomChoice()==1)
    {
        document.getElementById("win-lose").innerHTML="draw"
    }
    else if (RandomChoice()==2)
    {
        document.getElementById("win-lose").innerHTML="win"
    }
    else      {
        document.getElementById("win-lose").innerHTML="lose"
    }

}

document.getElementById("rock").onclick = function() {myFunction2()};

function myFunction2() {
    const image = document.getElementById('question-mark1');

    image.src =  document.getElementById('rock').src
    RandomChoice()
    RandomChoice()
    if (RandomChoice()==1)
    {
        document.getElementById("win-lose").innerHTML="lose"
    }
    else if (RandomChoice()==2)
    {
        document.getElementById("win-lose").innerHTML="draw"
    }
    else      {
        document.getElementById("win-lose").innerHTML="win"
    }
}


document.getElementById("scissor").onclick = function() {myFunction3()};

function myFunction3() {
    const image = document.getElementById('question-mark1');
    
    image.src =  document.getElementById('scissor').src
    RandomChoice()
    if (RandomChoice()==1)
    {
        document.getElementById("win-lose").innerHTML="win"
    }
    else if (RandomChoice()==2)
    {
        document.getElementById("win-lose").innerHTML="lose"
    }
    else      {
        document.getElementById("win-lose").innerHTML="draw"
    }

}
              
               








  
  