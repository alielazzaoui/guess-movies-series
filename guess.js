// Series data
const series = [
{
    name: "The Shawshank Redemption",
    image: "https://wallpapercave.com/wp/wp2014276.jpg"
},
{
    name: "The Godfather",
    image: "https://wallpapercave.com/wp/wp12906934.jpg"
},
{
    name: "The Dark Knight",
    image: "https://wallpapercave.com/wp/wp15251431.jpg"
},
{
    name: "The Godfather: Part II",
    image: "https://wallpapercave.com/wp/wp9342461.jpg"
},
{
    name: "12 Angry Men",
    image: "https://wallpapercave.com/wp/wp2347431.jpg"
},
{
    name: "Pulp Fiction",
    image: "https://wallpapercave.com/wp/wp15480325.jpg"
},
{
    name: "Fight Club",
    image: "https://wallpapercave.com/wp/wp12720795.jpg"
},
{
    name: "Breaking Bad",
    image: "https://wallpapercave.com/uwp/uwp3550993.jpeg"
},
{
    name: "The Sopranos",
    image: "https://wallpapercave.com/wp/IFw1ZH1.jpg"
},
{
    name: "Severance",
    image: "https://wallpapercave.com/wp/wp14753741.jpg"
},
{
    name: "Squid Game",
    image: "https://wallpapercave.com/wp/wp14965332.webp"
},
{
    name: "Black Mirror",
    image: "https://wallpapercave.com/wp/wp12486529.png"
},
{
    name: "Wednesday",
    image: "https://wallpapercave.com/wp/wp13560639.jpg"
},
{
    name: "Inception",
    image: "https://wallpapercave.com/wp/wp15480623.jpg"
},
{
    name: "Interstellar",
    image: "https://wallpapercave.com/wp/wp13388712.jpg"
},
{
    name: "The Matrix",
    image: "https://wallpapercave.com/wp/wp13137359.jpg"
},
{
    name: "Se7en",
    image: "https://wallpapercave.com/wp/wp2180128.jpg"
},
{
    name: "The Silence of the Lambs",
    image: "https://wallpapercave.com/wp/MeaAKvn.jpg"
},
{
    name: "Goodfellas",
    image: "https://wallpapercave.com/wp/wp8419976.jpg"
},
{
    name: "The Lord of the Rings: The Return of the King",
    image: "https://wallpapercave.com/wp/wp4119586.jpg"
},
{
    name: "YOU",
    image: "https://wallpapercave.com/wp/wp11344727.jpg"
},
{
    name: "Dexter",
    image: "https://wallpapercave.com/wp/wp15680706.jpg"
},
{
    name: "Rick And Morty",
    image: "https://wallpapercave.com/wp/wp14364072.jpg"
},
{
    name: "Vikings",
    image: "https://wallpapercave.com/wp/wp2365274.jpg"
},
{
    name: "Game Of Thrones",
    image: "https://wallpapercave.com/wp/wp12401609.jpg"
},
{
    name: "Peaky Blinders",
    image: "https://wallpapercave.com/wp/wp1890589.jpg"
},
{
    name: "The 100",
    image: "https://wallpapercave.com/wp/wp1825208.jpg"
},
{
    name: "Better Call Saul",
    image: "https://wallpapercave.com/wp/wp12027788.png"
},
{
    name: "The Wire",
    image: "https://wallpapercave.com/wp/wp1941989.jpg"
},
{
    name: "Chernobyl",
    image: "https://wallpapercave.com/wp/wp11814765.jpg"
},
{
    name: "Sherlock",
    image: "https://wallpapercave.com/wp/wp12410151.jpg"
},
{
    name: "Succession",
    image: "https://wallpapercave.com/wp/wp13333985.jpg"
},
{
    name: "House of the Dragon",
    image: "https://wallpapercave.com/wp/wp14125407.jpg"
},
{
    name: "The Last of Us",
    image: "https://wallpapercave.com/wp/wp15297658.jpg"
},
{
    name: "The Pitt",
    image: "https://wallpapercave.com/wp/wp15736809.jpg"
},
{
    name: "Daredevil: Born Again",
    image: "https://wallpapercave.com/wp/wp15189863.webp"
},
{
    name: "Dune: Part Two",
    image: "https://wallpapercave.com/wp/wp15269018.jpg"
},
{
    name: "Spider-Man: Across the Spider-Verse",
    image: "https://wallpapercave.com/wp/wp13219060.jpg"
},  
{
    name: "Top Gun: Maverick",
    image: "https://wallpapercave.com/wp/wp11284522.jpg"
},
{
    name: "Oppenheimer",
    image: "https://wallpapercave.com/wp/wp12639251.jpg"
},
{
    name: "Parasite",
    image: "https://wallpapercave.com/wp/wp5510273.jpg"
}
];

// Game state
let currentSeriesIndex = 0;
let currentPixelLevel = 0;
let currentSeries = null;
let score = 0;
let imagesRevealed = 1;
let gameState = 'playing';
let timerInterval = null;
let timeLeft = 10;
let timerDuration = 10;
let difficulty = 'medium';
let playerName = '';
let allScores = [];
let shuffledSeries = [];
let totalRounds = 10; // Default number of rounds
let numberOfRounds = 10; // Selected number of rounds

const pixelLevels = [
    'pixelated-medium-high',
    'pixelated-medium',
    'pixelated-medium-low',
    'pixelated-low',
    'pixelated-very-low',
    'clear'
];

// DOM elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const playerNameInput = document.getElementById('player-name');
const startGameBtn = document.getElementById('start-game-btn');
const playerDisplay = document.getElementById('player-display');
const finalScreen = document.getElementById('final-screen');
const finalPlayerName = document.getElementById('final-player-name');
const finalScoreDisplay = document.getElementById('final-score');
const scoreTableBody = document.getElementById('score-table-body');
const playAgainBtn = document.getElementById('play-again-btn');
const currentRoundDisplay = document.getElementById('current-round');
const totalRoundsDisplay = document.getElementById('total-rounds');

const imageBox = document.getElementById('image-box');
const seriesImage = document.getElementById('series-image');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const playingSection = document.getElementById('playing-section');
const resultSection = document.getElementById('result-section');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const seriesNameDisplay = document.getElementById('series-name');
const resultPoints = document.getElementById('result-points');
const footerText = document.getElementById('footer-text');
const suggestions = document.getElementById('suggestions');

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing game...');
    
    // Get difficulty buttons
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    
    // Select medium difficulty by default
    const mediumBtn = document.querySelector('[data-difficulty="medium"]');
    if (mediumBtn) {
        mediumBtn.classList.add('selected');
    }
    
    // Get rounds buttons
    const roundsBtns = document.querySelectorAll('.rounds-btn');
    
    // Select 10 rounds by default
    const tenRoundsBtn = document.querySelector('[data-rounds="10"]');
    if (tenRoundsBtn) {
        tenRoundsBtn.classList.add('selected');
    }
    
    // Difficulty selection
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Difficulty button clicked');
            difficultyBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            difficulty = this.getAttribute('data-difficulty');
            
            // Set timer duration based on difficulty
            if (difficulty === 'easy') {
                timerDuration = 15;
            } else if (difficulty === 'medium') {
                timerDuration = 10;
            } else if (difficulty === 'hard') {
                timerDuration = 5;
            }
            
            console.log('Difficulty set to:', difficulty, 'Timer:', timerDuration);
        });
    });
    
    // Rounds selection
    roundsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Rounds button clicked');
            roundsBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            const roundsValue = this.getAttribute('data-rounds');
            
            if (roundsValue === 'all') {
                numberOfRounds = series.length;
            } else {
                numberOfRounds = parseInt(roundsValue);
            }
            
            console.log('Rounds set to:', numberOfRounds);
        });
    });
    
    // Start game button
    if (startGameBtn) {
        startGameBtn.addEventListener('click', function() {
            console.log('Start button clicked');
            startGameFromWelcome();
        });
    }
    
    // Allow Enter key on name input
    if (playerNameInput) {
        playerNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Enter pressed in name input');
                startGameFromWelcome();
            }
        });
    }
    
    // Event listeners for game controls
    if (submitBtn) {
        submitBtn.addEventListener('click', checkGuess);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', startNewSeries);
    }
    if (guessInput) {
        guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });
        guessInput.addEventListener('input', updateSuggestions);
    }
    
    // Play again button
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', function() {
            finalScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
            
            // Reset for new game
            currentSeriesIndex = 0;
            score = 0;
        });
    }
});

// Start game from welcome screen
function startGameFromWelcome() {
    console.log('startGameFromWelcome function called');
    playerName = playerNameInput.value.trim();
    
    if (playerName === '') {
        alert('Please enter your name!');
        return;
    }
    
    console.log('Player name:', playerName);
    console.log('Difficulty:', difficulty);
    console.log('Timer duration:', timerDuration);
    console.log('Number of rounds:', numberOfRounds);
    
    // Shuffle the series array and take only the selected number of rounds
    shuffledSeries = [...series].sort(() => Math.random() - 0.5).slice(0, numberOfRounds);
    totalRounds = shuffledSeries.length;
    console.log('Series shuffled for random order, total rounds:', totalRounds);
    
    // Update total rounds display
    if (totalRoundsDisplay) {
        totalRoundsDisplay.textContent = totalRounds;
    }
    
    // Update footer text
    if (footerText) {
        footerText.textContent = `Image becomes clearer every ${timerDuration} seconds. Guess faster for higher score!`;
    }
    
    // Hide welcome screen, show game screen
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
    }
    if (gameScreen) {
        gameScreen.classList.remove('hidden');
    }
    
    // Display player name
    if (playerDisplay) {
        playerDisplay.textContent = playerName;
    }
    
    // Reset game state
    currentSeriesIndex = 0;
    score = 0;
    if (scoreDisplay) {
        scoreDisplay.textContent = score;
    }
    
    // Start first series
    startNewSeries();
}

// Start a new series
function startNewSeries() {
    console.log('Starting new series, index:', currentSeriesIndex);
    console.log('Total series:', shuffledSeries.length);
    
    // Check if all series are completed
    if (currentSeriesIndex >= shuffledSeries.length) {
        console.log('All series completed! Ending game...');
        endGame();
        return;
    }
    
    // Update round counter
    if (currentRoundDisplay) {
        currentRoundDisplay.textContent = currentSeriesIndex + 1;
    }
    
    // Clear any existing timer
    stopTimer();
    
    // Get current series from shuffled array
    currentSeries = shuffledSeries[currentSeriesIndex];
    console.log('Current series:', currentSeries.name);
    
    // Start with highest pixelation
    currentPixelLevel = 0;
    
    // Reset state
    imagesRevealed = 1;
    gameState = 'playing';
    if (guessInput) {
        guessInput.value = '';
    }
    hideSuggestions();
    timeLeft = timerDuration;
    
    // Update UI - show image with high pixelation
    if (seriesImage) {
        seriesImage.src = currentSeries.image;
        applyPixelation();
    }
    if (imageBox) {
        imageBox.classList.remove('disabled');
    }
    updateTimerDisplay();
    
    // Show/hide sections
    if (playingSection) {
        playingSection.classList.remove('hidden');
    }
    if (resultSection) {
        resultSection.classList.add('hidden');
    }
    
    if (guessInput) {
        guessInput.focus();
    }
    
    // Start countdown timer
    startTimer();
}

// End game and show final screen
function endGame() {
    console.log('Game ended! Final score:', score);
    
    // Save score to leaderboard
    allScores.push({
        name: playerName,
        score: score
    });
    
    // Sort scores (highest first)
    allScores.sort((a, b) => b.score - a.score);
    
    console.log('Hiding game screen...');
    // Hide game screen, show final screen
    if (gameScreen) {
        gameScreen.classList.add('hidden');
        console.log('Game screen hidden');
    }
    if (finalScreen) {
        finalScreen.classList.remove('hidden');
        console.log('Final screen shown');
    }
    
    // Display final score
    if (finalPlayerName) {
        finalPlayerName.textContent = playerName;
    }
    if (finalScoreDisplay) {
        finalScoreDisplay.textContent = score;
    }
    
    // Build leaderboard table
    if (scoreTableBody) {
        scoreTableBody.innerHTML = '';
        allScores.forEach((player, index) => {
            const row = document.createElement('tr');
            
            // Highlight current player
            if (player.name === playerName && player.score === score) {
                row.style.background = 'rgba(251, 191, 36, 0.2)';
            }
            
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.score}</td>
            `;
            scoreTableBody.appendChild(row);
        });
    }
    
    console.log('End game complete!');
}

// Apply pixelation effect to image
function applyPixelation() {
    if (!seriesImage) return;

    // Remove all old pixelation classes
    seriesImage.classList.remove(...pixelLevels);

    // Add current pixelation level
    const levelClass = pixelLevels[currentPixelLevel];
    seriesImage.classList.add(levelClass);
    
    // Remove the scaling effect - keep image at full size
    seriesImage.style.transform = 'scale(1)';
}

// Update timer display
function updateTimerDisplay() {
    if (timerDisplay) {
        timerDisplay.textContent = timeLeft;
        timerDisplay.style.display = 'block';
        
        // Add warning class when time is low
        if (timeLeft <= 3) {
            timerDisplay.classList.add('warning');
        } else {
            timerDisplay.classList.remove('warning');
        }
    }
}

// Start the countdown timer
function startTimer() {
    console.log('Starting timer with duration:', timerDuration);
    
    timerInterval = setInterval(() => {
        if (gameState !== 'playing') {
            stopTimer();
            return;
        }
        
        timeLeft--;
        updateTimerDisplay();
        
        console.log('Time left:', timeLeft);
        
        // When timer reaches 0, reduce pixelation
        if (timeLeft <= 0) {
            if (currentPixelLevel < pixelLevels.length - 1) {
                console.log('Timer reached 0, reducing pixelation');
                reducePixelation();
                timeLeft = timerDuration;
                updateTimerDisplay();
            } else {
                console.log('Already at clearest level');
                stopTimer();
                if (timerDisplay) {
                    timerDisplay.style.display = 'none';
                }
            }
        }
    }, 1000);
}

// Stop the timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        console.log('Timer stopped');
    }
}

// Reduce pixelation level (make image clearer)
function reducePixelation() {
    if (gameState !== 'playing') return;
    
    if (currentPixelLevel >= pixelLevels.length - 1) {
        return;
    }
    
    currentPixelLevel++;
    imagesRevealed++;
    
    console.log('Reduced pixelation to level:', currentPixelLevel);
    
    applyPixelation();
}

// Check the guess
function checkGuess() {
    hideSuggestions();
    if (gameState !== 'playing') return;
    
    const guess = guessInput.value.trim().toLowerCase();
    const correctAnswer = currentSeries.name.toLowerCase();
    
    console.log('Checking guess:', guess, 'vs', correctAnswer);
    
    if (guess === '') {
        alert('Please enter a series name!');
        return;
    }
    
    // Stop the timer
    stopTimer();
    
    if (guess === correctAnswer) {
        // Correct!
        console.log('Correct answer!');
        gameState = 'won';
        const points = Math.max(10 - imagesRevealed, 2);
        score += points;
        
        // Show full clear image
        currentPixelLevel = pixelLevels.length - 1;
        applyPixelation();
        
        showResult(true, points);
        if (scoreDisplay) {
            scoreDisplay.textContent = score;
        }
        if (imageBox) {
            imageBox.classList.add('disabled');
        }
        if (timerDisplay) {
            timerDisplay.style.display = 'none';
        }
        
        // Move to next series
        currentSeriesIndex++;
    } else {
        // Wrong!
        console.log('Wrong answer');
        if (currentPixelLevel >= pixelLevels.length - 1) {
            // Already at clearest level, game over
            console.log('Game over - no more clarity levels');
            gameState = 'lost';
            
            // Show full clear image
            currentPixelLevel = pixelLevels.length - 1;
            applyPixelation();
            
            showResult(false, 0);
            if (scoreDisplay) {
                scoreDisplay.textContent = score;
            }
            if (imageBox) {
                imageBox.classList.add('disabled');
            }
            if (timerDisplay) {
                timerDisplay.style.display = 'none';
            }
            
            // Move to next series
            currentSeriesIndex++;
        } else {
            // Reduce pixelation and let them try again
            console.log('Wrong - reducing pixelation and continuing');
            currentPixelLevel++;
            imagesRevealed++;
            
            applyPixelation();
            if (guessInput) {
                guessInput.value = '';
                guessInput.focus();
            }
            
            // Reset and restart timer
            timeLeft = timerDuration;
            updateTimerDisplay();
            startTimer();
            
            // Show brief message
            if (guessInput) {
                guessInput.placeholder = 'Wrong! Try again...';
                setTimeout(() => {
                    guessInput.placeholder = 'Enter series name...';
                }, 2000);
            }
        }
    }
}

// Show result
function showResult(won, points) {
    console.log('Showing result, won:', won, 'points:', points);
    
    if (playingSection) {
        playingSection.classList.add('hidden');
    }
    if (resultSection) {
        resultSection.classList.remove('hidden');
    }
    
    if (won) {
        if (resultSection) {
            resultSection.className = 'result won';
        }
        if (resultEmoji) {
            resultEmoji.textContent = '🎉';
        }
        if (resultTitle) {
            resultTitle.textContent = 'Correct!';
        }
        if (resultPoints) {
            resultPoints.textContent = `You earned ${points} points!`;
        }
    } else {
        if (resultSection) {
            resultSection.className = 'result lost';
        }
        if (resultEmoji) {
            resultEmoji.textContent = '😢';
        }
        if (resultTitle) {
            resultTitle.textContent = 'Wrong!';
        }
        if (resultPoints && guessInput) {
            resultPoints.textContent = `Your guess: ${guessInput.value}`;
        }
    }
    
    if (seriesNameDisplay) {
        seriesNameDisplay.textContent = currentSeries.name;
    }
    
    // Update next button text based on whether there are more series
    if (nextBtn) {
        if (currentSeriesIndex >= shuffledSeries.length) {
            nextBtn.innerHTML = '<span>🏁</span> Finish Game';
        } else {
            nextBtn.innerHTML = '<span>➡</span> Next Series';
        }
    }
}

// Update suggestions based on input
function updateSuggestions() {
    const query = guessInput.value.trim().toLowerCase();
    suggestions.innerHTML = '';
    
    if (query === '') {
        suggestions.classList.add('hidden');
        return;
    }
    
    const matches = series.filter(s => s.name.toLowerCase().startsWith(query)).sort((a, b) => a.name.localeCompare(b.name)).slice(0, 10);
    
    if (matches.length === 0) {
        suggestions.classList.add('hidden');
        return;
    }
    
    matches.forEach(match => {
        const div = document.createElement('div');
        const name = match.name;
        const lowerName = name.toLowerCase();
        const index = lowerName.indexOf(query);
        if (index !== -1) {
            const before = name.substring(0, index);
            const matchPart = name.substring(index, index + query.length);
            const after = name.substring(index + query.length);
            div.innerHTML = `${before}<strong>${matchPart}</strong>${after}`;
        } else {
            div.textContent = name;
        }
        div.addEventListener('click', () => {
            guessInput.value = match.name;
            suggestions.classList.add('hidden');
            guessInput.focus();
        });
        suggestions.appendChild(div);
    });
    
    suggestions.classList.remove('hidden');
}

// Hide suggestions
function hideSuggestions() {
    suggestions.classList.add('hidden');
}