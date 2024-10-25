var grid = document.querySelector('.mb-tem-grid'); 
var scrollLeft = document.getElementById('scrollLeft');
var scrollRight = document.getElementById('scrollRight');

function scrollToLeft() {
    grid.scrollLeft -= 470; 
}

function scrollToRight() {
    grid.scrollLeft += 470; 
}

scrollLeft.addEventListener('click', scrollToLeft);
scrollRight.addEventListener('click', scrollToRight);




window.onload = function() {
        var grid = document.querySelector('.mb-tem-grid');
        var secondItem = grid.children[1];

        grid.scrollLeft = secondItem.offsetLeft - (grid.offsetWidth / 2 - secondItem.offsetWidth / 2);
};

document.addEventListener('DOMContentLoaded', function () {
    var currentNumber = 0; 
    var targetNumber = 1466;
    var targetNumber1 = 5641;
    var targetNumber2 = 3097;
    var targetNumber3 = 10300;
    var numberElement = document.getElementById('number'); 
    var numberElement1 = document.getElementById('number1'); 
    var numberElement2 = document.getElementById('number2'); 
    var numberElement3 = document.getElementById('number3'); 
    function incrementNumber() {
        if (currentNumber < targetNumber) {
            currentNumber=currentNumber+10; 
            numberElement.textContent = currentNumber; 
            requestAnimationFrame(incrementNumber); 
        }
        
    }
    function incrementNumber1() {
        if (currentNumber < targetNumber1) {
            currentNumber=currentNumber+10; 
            numberElement1.textContent = currentNumber; 
            requestAnimationFrame(incrementNumber1); 
        }
        
    }
    function incrementNumber2() {
        if (currentNumber < targetNumber2) {
            currentNumber=currentNumber+10; 
            numberElement2.textContent = currentNumber; 
            requestAnimationFrame(incrementNumber2); 
        }
        
    }
    function incrementNumber3() {
        if (currentNumber < targetNumber3) {
            currentNumber=currentNumber+10; 
            numberElement3.textContent = currentNumber; 
            requestAnimationFrame(incrementNumber3); 
        }
        
    }

    incrementNumber(),incrementNumber1(),incrementNumber2(),incrementNumber3(); 
});

window.onload = function() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.w3schools.com/w3css/3/w3.css";
    document.querySelector('.use-w3').appendChild(link);
};
