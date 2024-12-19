const increaseBtn = document.getElementById("increaseBtn")
 const decreaseBtn = document.getElementById("decreaseBtn")
 const resetBtn = document.getElementById("resetBtn")
 let count = 0;

 increaseBtn.onclick = function(){
    count++;
     theme1.textContent = count;
    theme.textContent = "INCREASING..."
 }
 decreaseBtn.onclick = function(){
     count--;
     theme1.textContent = count;
    theme.textContent = "DECREASING..."
 }
 resetBtn.onclick = function(){
     count = 0;
    theme1.textContent = count;
     theme.textContent = "CALCULATOR"
}