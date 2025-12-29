let prankClickCount = 0;

function updateDays() {
    const startDate = new Date("2023-12-29"); 
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const daysElement = document.getElementById('days-together');
    if (daysElement) daysElement.innerText = diffDays;
}
updateDays();

function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    let navlinks = document.getElementsByClassName("nav-item");
    for (let i = 0; i < navlinks.length; i++) navlinks[i].classList.remove("active");
    
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.classList.add("active");

    if (tabName === 'memories') {
        document.getElementById('flashback-alert').style.display = 'flex';
        document.getElementById('actual-gallery').style.display = 'none';
    }
}

function showMemories() {
    document.getElementById('flashback-alert').style.display = 'none';
    document.getElementById('actual-gallery').style.display = 'flex';
}

function openLetter() {
    const btn = document.querySelector('.open-btn');
    const prankBox = document.getElementById('prank-dialog');
    const prankImg = document.getElementById('prank-img');
    const prankText = document.getElementById('prank-text');
    prankClickCount++;

    if (prankClickCount === 1) {
        prankBox.style.display = "flex";
        prankText.innerText = "ILOVEYOUUUUUUU MAHALL😍";
        prankImg.src = "images/mukha1.jpg"; 
        btn.style.transform = "translateY(50px) translateX(-80px)"; 
    } 
    else if (prankClickCount === 2) {
        prankText.innerText = "BOOMBASTIC SIDE-EYE🤪";
        prankImg.src = "images/mukha2.jpg";
        btn.style.transform = "translateY(50px) translateX(80px)"; 
    } 
    else if (prankClickCount === 3) {
        prankText.innerText = "Always you, my favorite person❤️";
        prankImg.src = "images/mukha3.jpg";
        btn.style.transform = "translateY(10px) translateX(0)"; 
        btn.innerText = "OPEN MESSAGE ❤️"; 
    } 
    else {
        document.getElementById('letter-modal').style.display = 'flex';
        prankBox.style.display = "none";
        prankClickCount = 0;
        btn.innerText = "PRESS THIS";
        btn.style.transform = "none";
    }
}

function closeLetter() { document.getElementById('letter-modal').style.display = 'none'; }

function zoomMedia(element) {
    const modal = document.getElementById('zoom-modal');
    const zoomImg = document.getElementById('zoom-img');
    const zoomVid = document.getElementById('zoom-vid');
    const media = element.querySelector('img, video');
    zoomImg.style.display = 'none'; zoomVid.style.display = 'none';
    if (media.tagName === 'IMG') { zoomImg.src = media.src; zoomImg.style.display = 'block'; }
    else { zoomVid.src = media.src; zoomVid.style.display = 'block'; zoomVid.play(); }
    modal.style.display = 'flex';
    for(let i=0; i<8; i++) createHeartBurst();
}

function closeZoom() { document.getElementById('zoom-modal').style.display = 'none'; document.getElementById('zoom-vid').pause(); }

function createHeartBurst() {
    const burst = document.createElement('div');
    burst.innerHTML = '❤️'; burst.style.position = 'fixed'; burst.style.left = '50%'; burst.style.top = '50%';
    burst.style.fontSize = '20px'; burst.style.zIndex = '4000'; burst.style.transition = '0.8s ease-out';
    document.body.appendChild(burst);
    const x = (Math.random() - 0.5) * 300; const y = (Math.random() - 0.5) * 300;
    setTimeout(() => { burst.style.transform = `translate(${x}px, ${y}px) scale(2)`; burst.style.opacity = '0'; }, 10);
    setTimeout(() => burst.remove(), 800);
}

function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw'; heart.style.bottom = '-5vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px'; heart.style.color = '#ff8585';
    container.appendChild(heart);
    setTimeout(() => { heart.style.transform = `translateY(-110vh)`; heart.style.opacity = '0'; }, 100);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);