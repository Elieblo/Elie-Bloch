
//EFFET DE TIPEWRITER PAGE 1//

document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Défilez pour voir plus 🡺"];
  
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("h5").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1700);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });



  //EFFET SCROLL PAGE 1//

  var text = document.getElementById('about');
  var newDom = '';
  var animationDelay = 6;

  for(let i = 0; i < text.innerText.length; i++)
  {
      newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for(let i = 0; i < length; i++)
  {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }
