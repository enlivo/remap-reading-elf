/**
 * The Reading Elf – Personality Quiz Wizard
 * Logic for navigation, scoring, and data submission.
 */



const scriptURL = 'https://script.google.com/macros/s/AKfycbyKlESniCI1dWYa7HleKGXRF7svU4Ie8P8N5_8rQ2n550nxEwJiXYcuEuODlrUtnBU/exec'; // User needs to update this

let currentStep = 0;
const totalSteps = 7; // Intro, User Info, 5 Questions, Result
const answers = [];
const userData = {
    name: '',
    email: '',
    phone: ''
};

const personalityMap = {
    'A': {
        title: 'The Mushroom Wanderer',
        desc: 'Loves magic, myths and hidden worlds.',
        book: 'The Chronicles of Narnia',
        emoji: '🍄'
    },
    'B': {
        title: "The Elf's Apprentice",
        desc: 'Asks why and never stops. Books are puzzles waiting to be solved.',
        book: 'The Way Things Work',
        emoji: '🧝'
    },
    'C': {
        title: 'The Forest Keeper',
        desc: 'Knows every creature by name. Feels at home in the wild.',
        book: 'The Jungle Book',
        emoji: '🌳'
    },
    'D': {
        title: 'The Story Trickster',
        desc: 'Turns every story into a performance. Laughter guaranteed.',
        book: 'The BFG',
        emoji: '🤡'
    },
    'E': {
        title: 'The Shadow Detective',
        desc: 'Notices everything. Trusts no one. Solves everything.',
        book: 'Sherlock Holmes for Kids',
        emoji: '🔍'
    }
};

function showStep(stepIndex) {
    const sections = document.querySelectorAll('.step-section');
    sections.forEach((section, index) => {
        if (index === stepIndex) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Update Progress Bar (Steps 2-6 are questions)
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        if (stepIndex >= 2 && stepIndex <= 6) {
            const progress = ((stepIndex - 1) / 5) * 100;
            progressFill.style.width = `${progress}%`;
            document.getElementById('progress-container').classList.remove('hidden');
        } else {
            document.getElementById('progress-container').classList.add('hidden');
        }
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function startQuiz() {
    currentStep = 1;
    showStep(currentStep);
}

function submitUserInfo(event) {
    event.preventDefault();
    userData.name = document.getElementById('user-name').value;
    userData.email = document.getElementById('user-email').value;
    userData.phone = document.getElementById('user-phone').value;

    if (userData.name && userData.email && userData.phone) {
        nextStep();
    } else {
        alert('Please fill in all fields.');
    }
}

function selectOption(option) {
    answers[currentStep - 2] = option; // currentStep 2 is Q1
    if (currentStep < 6) {
        nextStep();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    // Find the mode (most frequent answer)
    const counts = {};
    answers.forEach(a => counts[a] = (counts[a] || 0) + 1);

    let maxCount = 0;
    let mode = 'A';
    for (const option in counts) {
        if (counts[option] > maxCount) {
            maxCount = counts[option];
            mode = option;
        }
    }

    const result = personalityMap[mode];
    displayResult(result);
    sendDataToGoogleSheets(mode, result.title);
}

function displayResult(result) {
    document.getElementById('result-title').innerText = result.title;
    document.getElementById('result-desc').innerText = result.desc;

    currentStep = 7;
    showStep(currentStep);
}

function sendDataToGoogleSheets() {
    const payload = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone
    };

    console.log('Sending:', payload);

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then(response => response.text())
        .then(data => {
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showStep(0);
});
