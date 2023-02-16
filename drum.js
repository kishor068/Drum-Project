for (var i=0;i<document.querySelectorAll(".d").length;i++)
{
document.querySelectorAll(".d")[i].addEventListener("click",fun);
}

document.addEventListener("keydown",funs);

function fun()
{
    // alert("hekko");
    // alert(this.innerText);
    // this.innerHTML="green";
    var x=this.innerText;
   makeSound(x);
}

function funs(e)
{
  var y=e.key;
    makeSound(y);
  
}


function makeSound(key)
{
  switch(key)
  {
    case "k": var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case "l":var audio=new Audio("sounds/tom-2.mp3");
             audio.play();
              break;  
     case "m": var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "n":var audio=new Audio("sounds/tom-4.mp3");
             audio.play();
              break;             
     case "o": var audio=new Audio("sounds/crash.mp3");
              audio.play();
              break;
    case "p":var audio=new Audio("sounds/kick-bass.mp3");
             audio.play();
              break; 
     case "q":var audio=new Audio("sounds/snare.mp3");
             audio.play();
              break;           
  }
}