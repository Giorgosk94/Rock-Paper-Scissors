var i = 0; 
var g = 0; 
    round()

function round(){
function RandomChoice() {
    random=Math.floor(Math.random() * 3)+1;
    if (random===1)
    {
      
         document.getElementById("question-mark2").src=document.getElementById("hand").src
       return random
       
       
    }
    else if (random===2)
    {  
         document.getElementById("question-mark2").src=document.getElementById("rock").src
      return random
   
       
    }
    else if  (random===3)
    {  
        document.getElementById("question-mark2").src=document.getElementById("scissor").src
        return random
      
    }

 
  }




document.getElementById("hand").addEventListener("click",function() {


    const image = document.getElementById('question-mark1');

    image.src =  document.getElementById('hand').src
     Random=RandomChoice()
    if (Random===1)
    {
        document.getElementById("win-lose").innerHTML="draw"
        
      
    }
    else if (Random===2)
    { 
        i=i+1;
        document.getElementById("win-lose").innerHTML="win"
        
       document.getElementById("win").innerHTML=i
    }
    else if (Random===3)     { 
        g=g+1;
        document.getElementById("win-lose").innerHTML="lose"
        
        document.getElementById("lose").innerHTML=g;
    }
  
  
});

document.getElementById("rock").addEventListener("click",function() {


    const image = document.getElementById('question-mark1');

    image.src =  document.getElementById('rock').src
    Random=RandomChoice()
  
    if (Random===2)
    {  
        document.getElementById("win-lose").innerHTML="draw"
    }
    else if (Random===1)
    {   
        g=g+1;
        document.getElementById("win-lose").innerHTML="lose"
       
        document.getElementById("lose").innerHTML=g
    }
    else  if (Random===3)   {   
        i=i+1;
        document.getElementById("win-lose").innerHTML="win"
        document.getElementById("win").innerHTML =i;

        
    }
    
});


document.getElementById("scissor").addEventListener("click",function() {


    const image = document.getElementById('question-mark1');
    
    image.src =  document.getElementById('scissor').src
    var Random=RandomChoice()
    if (Random===3)
    {   
        document.getElementById("win-lose").innerHTML="draw"
    }
    else if (Random===2)
    {  
        g=g+1;
        document.getElementById("win-lose").innerHTML="lose"
       
        value=document.getElementById("lose").innerHTML=g;
    }
    else  if (Random===1){   
        i=i+1;
        document.getElementById("win-lose").innerHTML="win"
      
        document.getElementById("win").innerHTML=i;

    }
});


              
               
}

    







  
  