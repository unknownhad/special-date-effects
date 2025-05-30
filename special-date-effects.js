(function() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0

  const specialDates = {
    "01-01": newYearEffect,
    "14-02": valentinesEffect,
    "25-12": christmasEffect,
    "31-10": halloweenEffect,
    //Add new date here
    "30-05": testEffect, // Replace with today's date
  };

  const key = `${day}-${month}`;
  console.log("Date Key:", key); // For debug
  if (specialDates[key]) {
    specialDates[key]();
  }

  // Effects
  function newYearEffect() {
    alert("🎆 Happy New Year!");
  }

  function valentinesEffect() {
    spawnHearts();
  }

  function christmasEffect() {
    spawnSnowflakes();
  }

  function halloweenEffect() {
    spawnBats();
  }

  function testEffect() {
    alert("✅ Test effect triggered!"); // Simple alert to verify
    spawnHearts();
  }

  // Helpers
  function createEffectElement(className, content) {
    const el = document.createElement("div");
    el.className = `date-effect ${className}`;
    el.innerHTML = content;
    el.style.position = "fixed";
    el.style.zIndex = 9999;
    el.style.pointerEvents = "none";
    document.body.appendChild(el);
    return el;
  }

  function spawnHearts() {
    setInterval(() => {
      const heart = createEffectElement("heart", "❤️");
      animateFalling(heart, 10);
    }, 300);
  }

  function spawnSnowflakes() {
    setInterval(() => {
      const snowflake = createEffectElement("snowflake", "❄️");
      animateFalling(snowflake, 5);
    }, 250);
  }

  function spawnBats() {
    setInterval(() => {
      const bat = createEffectElement("bat", "🦇");
      animateFalling(bat, 8);
    }, 400);
  }

  function animateFalling(el, speed) {
    const left = Math.random() * window.innerWidth;
    el.style.left = `${left}px`;
    el.style.top = `-50px`;
    let top = -50;

    const fall = setInterval(() => {
      if (top > window.innerHeight) {
        el.remove();
        clearInterval(fall);
      }
      top += speed;
      el.style.top = `${top}px`;
    }, 30);
  }

  // Optional styling
  const style = document.createElement('style');
  style.innerHTML = `
    .date-effect {
      font-size: 24px;
      transition: transform 0.2s;
    }
    .date-effect:hover {
      transform: scale(1.5);
    }
  `;
  document.head.appendChild(style);
})();
