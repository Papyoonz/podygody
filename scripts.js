<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>DOGaLYPSE - Game</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap">
</head>
<body class="game">
    <div class="header">
        <div class="bottom-section">
            <div class="level-experience">
                <div class="player-level" id="level-name">PUPPY</div>
                <div class="exp-bar">
                    <div class="exp-fill" id="exp-fill" style="width: 0%;"></div>
                    <div class="exp-percentage" id="exp-percentage">0%</div>
                </div>
            </div>
            <div class="wallet-button">WALLET</div>
        </div>
    </div>

    <div class="gold-section">
        <div class="currency-display" id="doggar-display">100.00 Doggar</div>
    </div>

    <div class="main" id="main-screen">
        <div class="button-container">
            <button class="custom-button">
                <img src="sh.png" alt="Shelter Icon">
                <span>SHELTER</span>
            </button>
            <button class="custom-button">
                <img src="man.png" alt="Team Icon">
                <span>TEAM</span>
            </button>
            <button class="custom-button" id="cydogs-button" onclick="toggleAutoBot()">
                <img src="box.png" alt="CYDOGS Icon">
                <span>CYDOGS</span>
            </button>
        </div>

        <div class="click-dog">
            <img src="dog.png" alt="Dog" class="dog" id="dog">
        </div>

        <div class="bars-section">
            <div class="energy-bar">
                <img src="energy.png" class="bar-icon">
                <div class="bar">
                    <div class="fill" id="energy-fill" style="width: 100%;"></div>
                </div>
                <div class="percentage" id="energy-percentage">100.00%</div>
            </div>
            <div class="happiness-bar">
                <img src="kalp.png" class="bar-icon">
                <div class="bar">
                    <div class="fill" id="happiness-fill" style="width: 50%;"></div>
                </div>
                <div class="percentage" id="happiness-percentage">50.00%</div>
            </div>
        </div>

        <div class="inventory">
            <div class="inventory-items">
                <button class="inventory-item" onclick="giveMama()">
                    <img src="mama.png" alt="Mama Icon">
                    <span>Mama</span>
                    <div class="item-count" id="mama-count">30</div>
                </button>
                <button class="inventory-item" onclick="giveWater()">
                    <img src="su.png" alt="Su Icon">
                    <span>Su</span>
                    <div class="item-count" id="water-count">10</div>
                </button>
                <button class="inventory-item" onclick="giveTop()">
                    <img src="top.png" alt="Top Icon">
                    <span>Top</span>
                    <div class="item-timer" id="top-timer">0:00</div>
                </button>
                <button class="inventory-item" onclick="giveBone()">
                    <img src="oy.png" alt="Oyuncak Kemik Icon">
                    <span>Oyuncak Kemik</span>
                    <div class="item-timer" id="bone-timer">0:00</div>
                </button>
            </div>
        </div>
        <div id="auto-bot-timer" class="auto-bot-timer">30:00</div>
    </div>

    <div class="market hidden" id="market">
        <div class="market-header">
            <h2>Market</h2>
            <button class="close-button" onclick="toggleMarket()">X</button>
        </div>
        <div class="market-items">
            <div class="market-item" onclick="buyItem('mama', 50, 10)">
                <img src="mama.png" alt="Mama">
                <div class="item-details">
                    <span>10 Mama</span>
                    <span>50 Doggar</span>
                </div>
            </div>
            <div class="market-item" onclick="buyItem('mama', 250, 100)">
                <img src="mama.png" alt="Mama">
                <div class="item-details">
                    <span>100 Mama</span>
                    <span>250 Doggar</span>
                </div>
            </div>
            <div class="market-item" onclick="buyItem('su', 100, 10)">
                <img src="su.png" alt="Su">
                <div class="item-details">
                    <span>10 Su</span>
                    <span>100 Doggar</span>
                </div>
            </div>
            <div class="market-item" onclick="buyItem('su', 250, 50)">
                <img src="su.png" alt="Su">
                <div class="item-details">
                    <span>50 Su</span>
                    <span>250 Doggar</span>
                </div>
            </div>
            <div class="market-item" onclick="buyItem('top', 10000, 1)">
                <img src="top.png" alt="Top">
                <div class="item-details">
                    <span>1 Top</span>
                    <span>10000 Doggar</span>
                </div>
            </div>
            <div class="market-item" onclick="buyItem('oyuncak', 50000, 1)">
                <img src="oy.png" alt="Oyuncak Kemik">
                <div class="item-details">
                    <span>1 Oyuncak Kemik</span>
                    <span>50000 Doggar</span>
                </div>
            </div>
        </div>
    </div>

    <div class="navbar">
        <div class="nav-button"><i class="fa fa-arrow-up"></i><br>UPGRADES</div>
        <div class="nav-button" onclick="toggleMarket()"><i class="fa fa-shopping-cart"></i><br>MARKET</div>
        <div class="nav-button"><i class="fa fa-home"></i><br>MAIN</div>
        <div class="nav-button"><i class="fa fa-tasks"></i><br>TASKS</div>
        <div class="nav-button"><i class="fa fa-users"></i><br>FRENS</div>
    </div>

    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
