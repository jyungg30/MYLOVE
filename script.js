let fill = document.getElementById('fill');
let percentage = document.getElementById('percentage');
let count = 0;

let interval = setInterval(() => {
    count++;
    fill.style.width = count + "%";
    percentage.innerText = count + "%";
    if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('warning-screen').classList.remove('hidden');
        }, 500);
    }
}, 30);

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';  
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
function goToPassword() {
    document.getElementById('warning-screen').classList.add('hidden');
    document.getElementById('password-screen').classList.remove('hidden');
}

let passwordInput = document.getElementById('password-input');

function press(num) {
    if (passwordInput.value.length < 6) { 
        passwordInput.value += num;
    }
}
function clearInput() {
    passwordInput.value = passwordInput.value.slice(0, -1);
}

function checkPassword() {
    const correctPassword = "123023"; 
    
    if (passwordInput.value === correctPassword) {
        window.location.href = "dashboard.html"; 
    } else {
        document.getElementById('error-overlay').classList.remove('hidden');
    }
}

function closeError() {
    let errorOverlay = document.getElementById('error-overlay');
    errorOverlay.classList.add('hidden');
    passwordInput.value = ""; 
}   