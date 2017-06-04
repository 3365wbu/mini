/**
 * Created by Stephanie on 6/3/2017.
 */
// Function that reverses String

function stringReversal(){
    var userInput = document.getElementById('r').value;
    document.getElementById('r').value= alert(userInput.split('').reverse('').join(''));
}