body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
}

.game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background: url('bg.png') no-repeat center center/cover;
}

.header {
    width: 100%;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
}

.bottom-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}

.level-experience {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.player-level {
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.exp-bar {
    height: 15px;
    background-color: #ccc;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 60%;
}

.exp-fill {
    background-color: #ffd700;
    height: 100%;
    border-radius: 10px;
    text-align: center;
}

.exp-percentage {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    color: black;
    font-size: 0.8em;
}

.wallet-button {
    background-color: orange;
    padding: 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
    font-size: 0.8em;
    cursor: pointer;
}

.gold-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 5px 0;
}

.currency-display {
    font-size: 1.2em;
    font-weight: bold;
    color: gold;
    background-color: rgba(255, 215, 0, 0.6);
    padding: 5px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    width: auto;
    transition: transform 0.5s;
}

.currency-display.animate {
    transform: scale(1.5);
}

.main {
    flex: 1;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
}

.button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
}

.custom-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 5px;
    border-radius: 5px;
    flex: 1;
    position: relative;
    transition: transform 0.2s, box-shadow 0.2s;
}

.custom-button img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}

.custom-button span {
    font-size: 0.8em;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.custom-button:not(:last-child) {
    margin-right: 5px;
}

.custom-button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.custom-button.active::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid lime;
    border-radius: 5px;
    pointer-events: none;
    animation: glow 1s infinite alternate;
}

@keyframes glow {
    from {
        box-shadow: 0 0 10px lime;
    }
    to {
        box-shadow: 0 0 20px lime;
    }
}

.custom-button.disabled {
    opacity: 0.5;
    pointer-events: none;
}

.click-dog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    position: relative;
    margin-bottom: 10px;
}

.dog {
    width: 30%;
    height: auto;
    cursor: pointer;
}

.dog.clicked {
    animation: clickEffect 0.5s;
}

@keyframes clickEffect {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

.bars-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

.energy-bar, .happiness-bar {
    display: flex;
    align-items: center;
    width: 80%;
    margin-bottom: 5px;
}

.bar-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.bar {
    flex: 1;
    height: 15px;
    border-radius: 10px;
    background-color: #ccc;
    position: relative;
    overflow: hidden;
    margin-right: 10px;
}

.energy-bar .bar .fill {
    background-color: #4caf50;
    height: 100%;
    border-radius: 10px;
}

.happiness-bar .bar .fill {
    background-color: #ff4c4c;
    height: 100%;
    border-radius: 10px;
}

.percentage {
    font-size: 0.8em;
    font-weight: bold;
    color: white;
}

.inventory {
    width: 100%;
    margin-top: 5px;
}

.inventory-items {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.inventory-item {
    background: linear-gradient(to right, #004d00, #001a33);
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    flex: 1;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.inventory-item img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}

.inventory-item span {
    margin-top: 5px;
}

.item-count, .item-timer {
    position: absolute;
    font-size: 0.8em;
    font-weight: bold;
    color: white;
}

.item-count {
    top: 5px;
    right: 5px;
}

.item-timer {
    bottom: 5px;
    background-color: rgba(255, 0, 0, 0.5);
    padding: 2px 5px;
    border-radius: 5px;
}

.market {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.market-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.market-header h2 {
    color: white;
    margin: 0;
}

.close-button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 1em;
}

.market-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 500px;
}

.market-item {
    background: rgba(0, 0, 0, 0.5); /* Saydam koyu gri */
    color: white;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Beyaz gölge */
}

.market-item img {
    width: 50px;
    height: 50px;
}

.market-item .item-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.market-item:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.market-item.purchased {
    opacity: 0.5;
    pointer-events: none;
}

.market-item.cooldown {
    opacity: 0.5;
    pointer-events: none;
}

.tasks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.tasks-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.tasks-header h2 {
    color: white;
    margin: 0;
}

.tasks-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.tab-button {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
}

.tab-button:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

.tasks-content {
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
}

.hidden {
    display: none;
}

.navbar {
    background: linear-gradient(to right, #333, #555); /* Siyah ve gri parlak geçiş */
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 60px; /* Navbar yüksekliği artırıldı */
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: fixed; /* Navbar'ı sabitler */
    bottom: 0; /* Navbar'ı sayfanın altına yerleştirir */
}

.navbar .nav-button {
    flex: 1;
    text-align: center;
    color: white;
    cursor: pointer;
    padding: 10px 0;
    transition: background-color 0.3s, transform 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Yazıları merkeze ortala */
    align-items: center;
}

.navbar .nav-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
}

.nav-button img {
    width: 40px; /* İkon boyutunu artır */
    height: 40px; /* İkon boyutunu artır */
    margin-bottom: 5px;
}

.nav-button span {
    font-size: 1em; /* Yazı boyutunu artır */
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.auto-bot-timer {
    color: white;
    font-weight: bold;
    font-size: 1em;
    margin-top: 5px;
}

.alert-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    z-index: 10000;
    animation: fadeInOut 5s forwards;
}

.soon-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    z-index: 10000;
    animation: fadeInOut 2s forwards;
}

@keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
}

@media (max-width: 768px) {
    .custom-button img {
        width: 35px;
        height: 35px;
    }

    .custom-button span {
        font-size: 10px;
    }

    .dog {
        width: 40%;
    }

    .currency-display {
        font-size: 20px;
    }

    .navbar {
        height: 45px;
    }

    .inventory-item {
        width: 70px;
        height: 70px;
    }

    .inventory-item img {
        width: 25px;
        height: 25px;
    }

    .inventory-item span {
        font-size: 10px;
    }

    .bars-section {
        margin-top: 5px;
    }

    .energy-bar, .happiness-bar {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .custom-button img {
        width: 30px;
        height: 30px;
    }

    .custom-button span {
        font-size: 8px;
    }

    .dog {
        width: 50%;
    }

    .currency-display {
        font-size: 15px;
    }

    .navbar {
        height: 40px;
    }

    .inventory-item {
        width: 60px;
        height: 60px;
    }

    .inventory-item img {
        width: 20px;
        height: 20px;
    }

    .inventory-item span {
        font-size: 8px;
    }

    .bars-section {
        margin-top: 5px;
    }

    .energy-bar, .happiness-bar {
        width: 100%;
    }
}
