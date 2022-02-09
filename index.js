// Your code goes here
//1. make event listener for DOMContentLoaded and add the 2 arguments.
//2. make a variable to grab the element.
//3. set the text content for the new variable.
document.addEventListener('DOMContentLoaded', function(){
    const p = document.getElementById('text');
    p.textContent = 'This is really cool!';
});
