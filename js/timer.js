document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to (July 15, 2025 09:00:00)
    const countDownDate = new Date(2026, 6, 9, 9, 0, 0).getTime();
    
    // Animation variables
    let lastValues = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    
    // Update the countdown every 1 second
    const countdownFunction = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate distance between now and countdown date
        const distance = countDownDate - now;
        
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Get DOM elements
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        
        // Animate changes
        function animateChange(element, newValue, lastValue) {
            if (element && newValue !== lastValue) {
                element.classList.add('changing');
                setTimeout(() => {
                    element.textContent = newValue.toString().padStart(2, '0');
                    element.classList.remove('changing');
                }, 150);
            }
        }
        
        // Update display with animation
        if (daysElement && hoursElement && minutesElement && secondsElement) {
            animateChange(daysElement, days, lastValues.days);
            animateChange(hoursElement, hours, lastValues.hours);
            animateChange(minutesElement, minutes, lastValues.minutes);
            animateChange(secondsElement, seconds, lastValues.seconds);
            
            // Store current values for next comparison
            lastValues = { days, hours, minutes, seconds };
        }
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownFunction);
            const countdownContainer = document.querySelector(".countdown-timer");
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <div class="exam-completed" style="animation: fadeInUp 0.8s ease-out;">
                        <h3 style="color: #2c3e50; margin-bottom: 1rem;">The GIKI Entrance Test has begun!</h3>
                        <p style="color: #7f8c8d;">Best of luck to all applicants!</p>
                    </div>
                `;
            }
        }
    }, 1000);
});