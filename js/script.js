    // Choose the second hand (can be done from inside the function)
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
      // Fetch the date
      const now = new Date();
      // Set the seconds
      const seconds = now.getSeconds();
      // Set the tick to every second by dividing the seconds with 60, then x that by 360 (degs on clockface)
      // add 90deg to offset the rotate from above (otherwise it will start counting from left to right) 
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      // Add some specific style to the second hand
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      // Now the minutes
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
      
      // And the hours
      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      hourHand.style.width = "35%";
      hourHand.style.right = "50%";
    }

      setInterval(setDate, 1000);