// Initialize map
let map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// DOM Elements
const mainPanel = document.getElementById('mainPanel');
const swipeIndicator = document.getElementById('swipeIndicator');
const authSection = document.getElementById('authSection');
const userTypeSection = document.getElementById('userTypeSection');
const donationSection = document.getElementById('donationSection');
const requestSection = document.getElementById('requestSection');
const biofuelSection = document.getElementById('biofuelSection');

// Swipe Detection
let touchStartY = 0;
document.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (diff > 50) {
        showMainPanel();
    }
});

// Click alternative for swipe
swipeIndicator.addEventListener('click', showMainPanel);

function showMainPanel() {
    mainPanel.classList.add('active');
    swipeIndicator.classList.add('hidden');
}

// Tab Navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (btn.dataset.tab === 'login') {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        } else {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
        }
    });
});

// Registration Type Toggle
const registrationType = document.getElementById('registrationType');
const individualFields = document.getElementById('individualFields');
const organizationFields = document.getElementById('organizationFields');

registrationType.addEventListener('change', () => {
    if (registrationType.value === 'individual') {
        individualFields.classList.remove('hidden');
        organizationFields.classList.add('hidden');
    } else if (registrationType.value === 'organization') {
        individualFields.classList.add('hidden');
        organizationFields.classList.remove('hidden');
    } else {
        individualFields.classList.add('hidden');
        organizationFields.classList.add('hidden');
    }
});

// Form Submissions
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    showUserTypeSelection();
});

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    requestLocation();
});

function requestLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                map.setView([position.coords.latitude, position.coords.longitude], 13);
                showUserTypeSelection();
            },
            () => {
                alert("Please enable location services to continue");
            }
        );
    }
}

// User Type Selection
function showUserTypeSelection() {
    authSection.classList.add('hidden');
    userTypeSection.classList.remove('hidden');
}

const roleButtons = document.queryS
