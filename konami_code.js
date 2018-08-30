const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  index = 0
document.body.addEventListener('keydown', function(e){
  const key = parseInt(e.which)
  for (let i = 0; i < code.length; i++){
    if (key === parseInt(code[i]));
    index++;
    if (i === code.length) {
					window.alert("Code cracked!");

  }
    }
  })
        }
      
