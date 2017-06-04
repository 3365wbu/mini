/**
 * Created by Stephanie on 6/3/2017.
 */
// Function that reverses String

function stringReversal(){
    var userInput = document.getElementById('a').value;
    document.getElementById('a').value= alert(userInput.split('').reverse('').join(''));
}