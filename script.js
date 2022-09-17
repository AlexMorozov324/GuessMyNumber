'use strict';

let num = Math.trunc((Math.random()*100) + 1);
let bestScore = 20;
console.log(num);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    let trysLeft = document.querySelector('.trysLeft').textContent

    if(!guess)
    {
        document.querySelector('.message').textContent = 'No number!';
    }
    else if(guess > num)
    {
        if(trysLeft > 1)
        {
            document.querySelector('.message').textContent = 'Too high..!';
        trysLeft--;
        document.querySelector('.trysLeft').textContent = trysLeft;
        }
        else
        {
            document.querySelector('.message').textContent = 'You lost the game..';
            document.querySelector('.trysLeft').textContent = 0;
        }

    }
    else if(guess < num)
    {
        if(trysLeft > 1)
        {
            document.querySelector('.message').textContent = 'Too low..!';
            trysLeft--;
            document.querySelector('.trysLeft').textContent = trysLeft;
        }
        else
        {
            document.querySelector('.message').textContent = 'You lost the game..';
            document.querySelector('.trysLeft').textContent = 0;
        }

    }
    else
    {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = num;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(20 - Number(trysLeft) < bestScore)
        {
            bestScore = 20 - Number(trysLeft);
            document.querySelector('.highscore').textContent = bestScore;
            if(bestScore == 1)
            document.querySelector('.trys').textContent = ' try';
        }
    }


});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.trysLeft').textContent = 20;
    num = Math.trunc((Math.random()*100) + 1);
    console.log(num);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = bestScore;



});