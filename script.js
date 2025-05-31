let score = 0;

function dropBall() {
    const ball = document.getElementById('ball');
    const bounceSound = document.getElementById('bounceSound');
    const scoreDisplay = document.getElementById('scoreDisplay');
    let left = 140;
    let top = 0;
    let steps = 6;
    let stepCount = 0;

    function moveBall() {
        if (stepCount < steps) {
            top += 50;
            const direction = Math.random() < 0.5 ? -20 : 20;
            left += direction;
            ball.style.top = top + 'px';
            ball.style.left = left + 'px';
            bounceSound.play();
            stepCount++;
            setTimeout(moveBall, 500);
        } else {
            // Score calculation based on final left position
            const boardLeft = document.querySelector('.plinko-board').getBoundingClientRect().left;
            const finalLeft = ball.getBoundingClientRect().left - boardLeft;

            const slotIndex = Math.floor(finalLeft / 75); // Approximate slot width
            const slots = document.querySelectorAll('.slot');
            const finalSlot = slots[Math.max(0, Math.min(slots.length - 1, slotIndex))];
            const points = parseInt(finalSlot.getAttribute('data-points')) || 0;
            score += points;
            scoreDisplay.textContent =
            Score;'${score}';
        }
    }

    moveBall();
}
