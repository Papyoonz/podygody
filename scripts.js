let doggar = 100;
let energy = 100;
let happiness = 50;
let mamaCount = 30;
let waterCount = 10;
let topCooldown = 0;
let boneCooldown = 0;
let mamaUsed = 0;
let experience = 0;
let level = 1;
let autoBotInterval = null;
let autoBotRunning = false;
let autoBotStartTime = null;
let autoBotElapsedTime = 0;

const levels = [
    { name: 'PUPPY', expRequired: 100 },
    { name: 'TEEDOGY', expRequired: 1000 },
    { name: 'DOGGEN', expRequired: 10000 },
    { name: 'DOGZY', expRequired: 100000 },
    { name: 'GENDOG', expRequired: 1000000 },
    { name: 'GENIDOG', expRequired: 10000000 },
    { name: 'GENIUDOG', expRequired: 100000000 },
    { name: 'GENIUSDOG', expRequired: 1000000000 }
];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dog').addEventListener('click', () => {
        if (energy > 0) {
            increaseDoggar();
            decreaseEnergy(0.2);
            decreaseHappiness(0.2);
        }
    });

    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable double-tap zoom on mobile devices
    let lastTouchEnd = 0;
    document.addEventListener('touchend', event => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    updateEnergyBar();
    updateHappinessBar();
    updateExperienceBar();
    updateLevelName();
    updateDoggarDisplay();
    updateInventory();
});

function increaseDoggar() {
    let earnedDoggar = (Math.random() * 1.9) + 0.1; // Rastgele 0.1 ila 2 arasında doggar kazan
    doggar += parseFloat(earnedDoggar.toFixed(2));
    document.getElementById('doggar-display').innerText = `${doggar.toFixed(2)} Doggar`;
    increaseExperience(earnedDoggar);
}

function increaseExperience(amount) {
    experience += amount;
    const currentLevel = levels[level - 1];
    if (experience >= currentLevel.expRequired) {
        levelUp();
    }
    updateExperienceBar();
}

function levelUp() {
    experience -= levels[level - 1].expRequired;
    level++;
    updateLevelName();
}

function updateLevelName() {
    const currentLevel = levels[level - 1];
    document.getElementById('level-name').innerText = currentLevel.name;
}

function updateExperienceBar() {
    const currentLevel = levels[level - 1];
    const expPercentage = (experience / currentLevel.expRequired) * 100;
    document.getElementById('exp-fill').style.width = `${expPercentage}%`;
    document.getElementById('exp-percentage').innerText = `${expPercentage.toFixed(2)}%`;
}

function increaseEnergy(amount) {
    if (energy < 100) {
        energy += amount;
        if (energy > 100) energy = 100;
        updateEnergyBar();
    }
}

function increaseHappiness(amount) {
    if (happiness < 100) {
        happiness += amount;
        if (happiness > 100) happiness = 100;
        updateHappinessBar();
    }
}

function decreaseEnergy(amount) {
    if (energy > 0) {
        energy -= amount;
        if (energy < 0) energy = 0;
        updateEnergyBar();
    }
}

function decreaseHappiness(amount) {
    if (happiness > 0) {
        happiness -= amount;
        if (happiness < 0) happiness = 0;
        updateHappinessBar();
    }
}

function giveMama() {
    if (mamaCount > 0 && mamaUsed < 3) {
        mamaCount--;
        mamaUsed++;
        increaseEnergy(10);
        document.getElementById('mama-count').innerText = mamaCount;
    } else if (mamaUsed >= 3) {
        alert('Çok susadım!');
    }
}

function giveWater() {
    if (waterCount > 0) {
        waterCount--;
        mamaUsed = 0; // Mama kullanım sayısını sıfırla
        increaseEnergy(5);
        document.getElementById('water-count').innerText = waterCount;
    }
}

function giveTop() {
    if (topCooldown === 0) {
        let happinessIncrease = Math.floor(Math.random() * 5) + 1;
        increaseHappiness(happinessIncrease);
        topCooldown = 600; // 10 dakika (600 saniye)
        startCooldown('top');
    }
}

function giveBone() {
    if (boneCooldown === 0) {
        increaseHappiness(15);
        boneCooldown = 3600; // 1 saat (3600 saniye)
        startCooldown('bone');
    }
}

function startCooldown(item) {
    if (item === 'top') {
        let topInterval = setInterval(() => {
            if (topCooldown > 0) {
                topCooldown--;
                document.getElementById('top-timer').innerText = formatTime(topCooldown);
            } else {
                clearInterval(topInterval);
            }
        }, 1000);
    } else if (item === 'bone') {
        let boneInterval = setInterval(() => {
            if (boneCooldown > 0) {
                boneCooldown--;
                document.getElementById('bone-timer').innerText = formatTime(boneCooldown);
            } else {
                clearInterval(boneInterval);
            }
        }, 1000);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateEnergyBar() {
    document.getElementById('energy-fill').style.width = `${energy}%`;
    document.getElementById('energy-percentage').innerText = `${energy.toFixed(2)}%`;
}

function updateHappinessBar() {
    document.getElementById('happiness-fill').style.width = `${happiness}%`;
    document.getElementById('happiness-percentage').innerText = `${happiness.toFixed(2)}%`;
}

function updateDoggarDisplay() {
    document.getElementById('doggar-display').innerText = `${doggar.toFixed(2)} Doggar`;
}

function updateInventory() {
    document.getElementById('mama-count').innerText = mamaCount;
    document.getElementById('water-count').innerText = waterCount;
}

function toggleMarket() {
    const market = document.getElementById('market');
    const mainScreen = document.getElementById('main-screen');
    market.classList.toggle('hidden');
    mainScreen.classList.toggle('hidden');
}

function buyItem(item, cost, amount) {
    if (doggar >= cost) {
        doggar -= cost;
        updateDoggarDisplay();

        if (item === 'mama') {
            mamaCount += amount;
            document.getElementById('mama-count').innerText = mamaCount;
        } else if (item === 'su') {
            waterCount += amount;
            document.getElementById('water-count').innerText = waterCount;
        } else if (item === 'top') {
            // Top için özel işlem
        } else if (item === 'oyuncak') {
            // Oyuncak kemik için özel işlem
        }
    } else {
        alert('Yeterli doggar yok!');
    }
}

function toggleAutoBot() {
    const cydogsButton = document.getElementById('cydogs-button');
    const autoBotTimer = document.getElementById('auto-bot-timer');
    if (autoBotRunning) {
        clearInterval(autoBotInterval);
        cydogsButton.classList.remove('active');
        autoBotRunning = false;
    } else {
        autoBotRunning = true;
        autoBotStartTime = new Date().getTime();
        cydogsButton.classList.add('active');
        autoBotInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            autoBotElapsedTime += currentTime - autoBotStartTime;
            autoBotStartTime = currentTime;
            const remainingTime = 30 * 60 * 1000 - autoBotElapsedTime;
            if (remainingTime <= 0) {
                toggleAutoBot();
                alert('Otobot 30 dakika çalıştı ve durdu.');
                return;
            }
            autoBotTimer.innerText = formatTime(Math.floor(remainingTime / 1000));
            autoBotActions();
        }, 200); // Saniyede 5 kez
    }
}

function autoBotActions() {
    if (energy < 100) {
        if (mamaCount > 0 && mamaUsed < 3) {
            giveMama();
        } else if (waterCount > 0) {
            giveWater();
        } else {
            while (energy > 0) {
                increaseDoggar();
                decreaseEnergy(0.04); // Saniyede 5 kez tıklama için ayarlandı
                decreaseHappiness(0.04); // Saniyede 5 kez tıklama için ayarlandı
            }
            toggleAutoBot();
            alert('Mama ve su bitti, otobot durdu.');
            return;
        }
    }

    if (topCooldown === 0) {
        giveTop();
    }

    if (boneCooldown === 0) {
        giveBone();
    }

    increaseDoggar();
    decreaseEnergy(0.04); // Saniyede 5 kez tıklama için ayarlandı
    decreaseHappiness(0.04); // Saniyede 5 kez tıklama için ayarlandı
}
