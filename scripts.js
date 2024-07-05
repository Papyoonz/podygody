let doggar = 100;
let energy = 100;
let happiness = 50;
let mamaCount = 30;
let waterCount = 10;
let topCount = 10;
let boneCount = 5;
let topCooldown = 0;
let boneCooldown = 0;
let mamaUsed = 0;
let experience = 0;
let level = 1;
let autoBotInterval = null;
let autoBotRunning = false;
let autoBotStartTime = null;
let autoBotElapsedTime = 0;
let autoBotTimerInterval = null;
let cyDogsPurchased = false;
let shelterPurchased = false;
let cyPupCooldown = 0;
let timePurchaseCount = 0;
let maxBotTime = 360; // 6 hours in minutes
let botTimeLeft = 30; // 30 minutes to start

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
            decreaseEnergy(0.5);
            decreaseHappiness(0.5);
            dogClickEffect();
        }
    });

    document.querySelectorAll('.soon-button').forEach(button => {
        button.addEventListener('click', () => showSoonMessage());
    });

    document.getElementById('tasks-button').addEventListener('click', () => toggleTasks());

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
    updateButtonStates();
    startCyPupCooldown();
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
    let interval;
    if (item === 'top') {
        document.getElementById('top-item').classList.add('cooldown');
        interval = setInterval(() => {
            if (topCooldown > 0) {
                topCooldown--;
                document.getElementById('top-timer').innerText = formatTime(topCooldown);
            } else {
                clearInterval(interval);
                document.getElementById('top-item').classList.remove('cooldown');
            }
        }, 1000);
    } else if (item === 'bone') {
        document.getElementById('bone-item').classList.add('cooldown');
        interval = setInterval(() => {
            if (boneCooldown > 0) {
                boneCooldown--;
                document.getElementById('bone-timer').innerText = formatTime(boneCooldown);
            } else {
                clearInterval(interval);
                document.getElementById('bone-item').classList.remove('cooldown');
            }
        }, 1000);
    } else if (item === 'cypup') {
        document.getElementById('cypup-item').classList.add('cooldown');
        interval = setInterval(() => {
            if (cyPupCooldown > 0) {
                cyPupCooldown--;
                document.getElementById('cypup-timer').innerText = formatTime(cyPupCooldown);
            } else {
                clearInterval(interval);
                document.getElementById('cypup-item').classList.remove('cooldown');
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
    animateDoggarDisplay();
}

function animateDoggarDisplay() {
    const doggarDisplay = document.getElementById('doggar-display');
    doggarDisplay.classList.add('animate');
    setTimeout(() => {
        doggarDisplay.classList.remove('animate');
    }, 500);
}

function updateInventory() {
    document.getElementById('mama-count').innerText = mamaCount;
    document.getElementById('water-count').innerText = waterCount;
    document.getElementById('top-count').innerText = topCount;
    document.getElementById('bone-count').innerText = boneCount;
}

function toggleMarket() {
    const market = document.getElementById('market');
    const mainScreen = document.getElementById('main-screen');
    market.classList.toggle('hidden');
    mainScreen.classList.toggle('hidden');
}

function toggleTasks() {
    const tasks = document.getElementById('tasks');
    const mainScreen = document.getElementById('main-screen');
    tasks.classList.toggle('hidden');
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
            topCount += amount;
            document.getElementById('top-count').innerText = topCount;
        } else if (item === 'oyuncak') {
            boneCount += amount;
            document.getElementById('bone-count').innerText = boneCount;
        } else if (item === 'shelter') {
            shelterPurchased = true;
            document.getElementById('shelter-button').classList.remove('disabled');
            updateButtonStates();
        } else if (item === 'cydogs') {
            cyDogsPurchased = true;
            document.getElementById('cydogs-button').classList.remove('disabled');
            updateButtonStates();
        } else if (item === 'time') {
            if (timePurchaseCount < 5) {
                timePurchaseCount++;
                let timeToAdd = 60; // 1 hour in minutes
                botTimeLeft += timeToAdd;
                if (botTimeLeft > maxBotTime) botTimeLeft = maxBotTime;
                document.getElementById('auto-bot-timer').innerText = formatTime(botTimeLeft * 60);

                // Update the cost for next time purchase
                let costMultiplier = [1000, 10000, 25000, 50000, 100000];
                let nextCost = costMultiplier[timePurchaseCount - 1];
                document.getElementById('time-item').innerText = `TIME - ${nextCost} Doggar`;

                if (timePurchaseCount == 5) {
                    botTimeLeft += 30; // 30 minutes bonus
                    document.getElementById('time-item').classList.add('disabled');
                }
            }
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
        clearInterval(autoBotTimerInterval);
        cydogsButton.classList.remove('active');
        autoBotRunning = false;
    } else {
        autoBotRunning = true;
        autoBotStartTime = new Date().getTime();
        cydogsButton.classList.add('active');
        autoBotTimerInterval = setInterval(() => {
            autoBotElapsedTime += 1000;
            const remainingTime = botTimeLeft * 60 * 1000 - autoBotElapsedTime;
            if (remainingTime <= 0) {
                toggleAutoBot();
                alert('Otobot süresi doldu ve durdu.');
                return;
            }
            autoBotTimer.innerText = formatTime(Math.floor(remainingTime / 1000));
        }, 1000);
        autoBotInterval = setInterval(() => {
            autoBotActions();
        }, 500); // Saniyede 2 kez
    }
}

function autoBotActions() {
    if (energy >= 1) {
        if (energy < 100) {
            if (energy <= 1.1 && mamaCount > 0 && mamaUsed < 3) {
                giveMama();
                setTimeout(autoBotActions, 2000); // 2 saniye bekle
                return;
            } else if (energy <= 1.1 && waterCount > 0) {
                giveWater();
                setTimeout(autoBotActions, 2000); // 2 saniye bekle
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
        decreaseEnergy(0.5); // Saniyede 2 kez tıklama için ayarlandı
        decreaseHappiness(0.5); // Saniyede 2 kez tıklama için ayarlandı
        dogClickEffect();
    } else {
        toggleAutoBot();
        showAlert('Enerji bitti, otobot durdu.');
    }
}

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}

function showSoonMessage() {
    const soonBox = document.createElement('div');
    soonBox.classList.add('soon-box');
    soonBox.innerText = "SOON";
    document.body.appendChild(soonBox);

    setTimeout(() => {
        soonBox.remove();
    }, 2000);
}

function dogClickEffect() {
    const dogImage = document.getElementById('dog');
    dogImage.classList.add('clicked');
    setTimeout(() => {
        dogImage.classList.remove('clicked');
    }, 500);
}

function updateButtonStates() {
    const shelterButton = document.getElementById('shelter-button');
    const cydogsButton = document.getElementById('cydogs-button');

    if (!shelterPurchased) {
        shelterButton.classList.add('disabled');
    } else {
        shelterButton.classList.remove('disabled');
    }

    if (!cyDogsPurchased) {
        cydogsButton.classList.add('disabled');
    } else {
        cydogsButton.classList.remove('disabled');
    }
}
