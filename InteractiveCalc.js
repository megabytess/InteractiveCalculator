function addition(){
    var Firstnum = Number (document.getElementById("Firstnum").value);
    var Secnum = Number (document.getElementById("Secnum").value);
    var ans = Firstnum+Secnum; 
    
    document.getElementById("answer").innerHTML=ans;
    
    }
    
    function subtraction(){
        var Firstnum = Number (document.getElementById("Firstnum").value);
        var Secnum = Number (document.getElementById("Secnum").value);
        var ans = Firstnum-Secnum; 
        
        document.getElementById("answer").innerHTML=ans;
        
        }
    
    function multiplication(){
         var Firstnum = Number (document.getElementById("Firstnum").value);
         var Secnum = Number (document.getElementById("Secnum").value);
         var ans = Firstnum*Secnum; 
            
        document.getElementById("answer").innerHTML=ans;
            
          }
    
    function division(){
            var Firstnum = Number (document.getElementById("Firstnum").value);
            var Secnum = Number (document.getElementById("Secnum").value);
            var ans = Firstnum/Secnum; 
            
         document.getElementById("answer").innerHTML=ans;
            
            }
            function darkMode() {
                var element = document.body;
                element.classList.toggle("dark-mode");
            }