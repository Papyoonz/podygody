let doggar = 0;
let energy = 5;
let happiness = 10;
let mamaCount = 3;
let waterCount = 1;
let topCooldown = 0;
let boneCooldown = 0;
let mamaUsed = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dog').addEventListener('click', () => {
        if (energy > 0) {
            increaseDoggar();
            decreaseEnergy(0.2);
            decreaseHappiness(0.2);
        }
    });

    updateEnergyBar();
    updateHappinessBar();
});

function increaseDoggar() {
    let earnedDoggar = (Math.random() * 1.9) + 0.1; // Rastgele 0.1 ila 2 arasında doggar kazan
    doggar += parseFloat(earnedDoggar.toFixed(2));
    document.getElementById('doggar-display').innerText = `${doggar.toFixed(2)} Doggar`;
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
