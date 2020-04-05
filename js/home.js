function ageindays() {
    var birthyear = prompt('what is your birthyear?');
    var result = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + result + ' days old');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove();
}






function love() {
    var name = prompt('Whome do you love?');
    var result = ('But ' + name + ' do not love you. You have been cheated');
    var h1 = document.createElement('h1');
    var answer = document.createTextNode(result);
    h1.setAttribute('id', 'love');
    h1.appendChild(answer);
    document.getElementById('flex-box-result2').appendChild(h1);
}

function reset1() {
    document.getElementById('love').remove();
}




function convert() {
    var number = prompt('Write the centigrade number that you want to convert in Fahrenheit?');
    var result = (+number * 9 / 5) + 32;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode(result);
    h1.setAttribute('id', 'convert');
    h1.appendChild(answer);
    document.getElementById('flex-box-result3').appendChild(h1);
}

function reset2() {
    document.getElementById('convert').remove();
}