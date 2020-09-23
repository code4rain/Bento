var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = '경돈님';
var lateTxt = '집에 갑시다! ';
var morningTxt = '안녕하세요! ';
var afterTxt = '바짝 일합시다! ';
var evenTxt = '슬슬 마무리하셔야죠! ';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = lateTxt + name;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + name;
}
