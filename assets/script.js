function carPositive() {
    const actions = ["Меняю часто масло", "Я НЕ хлопаю дверьми", "У меня есть друг, у которого есть компрессор"];
    document.getElementById('response1').innerText = actions[Math.floor(Math.random() * actions.length)];
}
function carNegative() {
    const actions = ["Вы действительно хотите хлопнуть дверью?", "Я хлопаю дверьми", "Хлопну дверью, чтоб отвалилась другая"];
    document.getElementById('response1').innerText = actions[Math.floor(Math.random() * actions.length)];
}
function carIndifferent() {
    const actions = ["Ну и ладно"];
    document.getElementById('response1').innerText = actions[Math.floor(Math.random() * actions.length)];
}
function bmwCar() {
    const actions = ["Я фоткаю свою машину 50 раз на день", "Я люблю, когда орут машины", "Хватит шутить про BMW, нормальная машина"];
    document.getElementById('response2').innerText = actions[Math.floor(Math.random() * actions.length)];
}
function porscheCar() {
    const actions = ["Комфорт - главное преимущество", "Ну и что, что детали стоят одну мою почку, это не главное", "Хлопнешь дверью - прихлопну тебя"];
    document.getElementById('response2').innerText = actions[Math.floor(Math.random() * actions.length)];
}
function notBmwCar() {
    const actions = ["Не заглядываю часто в СТО, и уже хорошо"];
    document.getElementById('response2').innerText = actions[Math.floor(Math.random() * actions.length)];
}

function showRating(grade) {
    let message;
    if (grade === 3) {
        message = "Вы думали, что тут спрятана 2? А нееет)) Вы выбрали оценку 3";
    } else {
        message = `Вы выбрали оценку: ${grade}`;
    }
    document.getElementById('response3').innerText = message;
}

function submitForm(event) {
    event.preventDefault();
    alert("Ваша форма успешно отправлена в космос!");
}

setTimeout(() => {
    document.getElementById('welcome-modal').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 1000);

document.querySelectorAll('.unpredictable-form input').forEach(input => {
    input.addEventListener('focus', () => {
        const randomX = Math.floor(Math.random() * 100) - 50; 
        const randomY = Math.floor(Math.random() * 50) - 25; 
        input.style.transform = `translate(${randomX}px, ${randomY}px)`;

        if (Math.random() > 0.5) {
            input.classList.add('hidden');
            setTimeout(() => input.classList.remove('hidden'), 1000); 
        }
    });
});