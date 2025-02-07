const messages = [
    "Are you sure ml?",
    "Really really sure??",
    "YOURE KIDDING RIGHT",
    "Bri please, i love you..",
    "BRIIII",
    "If you say no, I will be really sad 💔",
    "Im in pieces 😞",
    "BRI THINK ABOUT ART AND ARIELLE.",
    "BABYY YOURE EVIL",
    "kidding, i love you Bri ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
