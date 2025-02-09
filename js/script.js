//diorama edit//

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("diorama-canvas");
  
  const layout = JSON.parse(localStorage.getItem("dioramaLayout")) || [];
  layout.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.style.position = "absolute";
    img.style.left = item.x;
    img.style.top = item.y;
    img.classList.add("placed");
    makeMovable(img);
    canvas.appendChild(img);
  });

  setupDragAndDrop();
});

const setupDragAndDrop = () => {
  document.querySelectorAll(".draggable").forEach(img => {
    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", img.dataset.id);
    });
  });

  const canvas = document.getElementById("diorama-canvas");
  canvas.addEventListener("dragover", (e) => e.preventDefault());
  canvas.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const sourceImg = document.querySelector(`.draggable[data-id="${id}"]`);
    const clone = sourceImg.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.left = `${e.offsetX}px`;
    clone.style.top = `${e.offsetY}px`;
    clone.draggable = false;
    clone.classList.add("placed");
    makeMovable(clone);
    canvas.appendChild(clone);
  });
};

const makeMovable = (element) => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  element.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    element.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    element.style.cursor = "grab";
  });

  element.addEventListener("mouseleave", () => {
    if (parseInt(element.style.left) < 0 || parseInt(element.style.top) < 0 ||
        parseInt(element.style.left) > window.innerWidth || parseInt(element.style.top) > window.innerHeight) {
      element.remove();
    }
  });
};

//diorama edit fin//
 

//FOR MUSIC
// Function to set up the audio on each page
function setupAudio() {
  const audio = document.getElementById("bg-music");
  if (!audio) return; // If no audio on this page, do nothing

  // Load mute state from localStorage
  let isMuted = localStorage.getItem("muted") === "true";
  audio.muted = isMuted;

  // Listen for changes in localStorage (when settings page updates)
  window.addEventListener("storage", () => {
      audio.muted = localStorage.getItem("muted") === "true";
  });
}

// Function to set up the mute button in the settings page
function setupMuteButton() {
  const muteBtn = document.getElementById("mute-toggle");
  if (!muteBtn) return; // If no mute button on this page, do nothing

  // Load mute state
  let isMuted = localStorage.getItem("muted") === "true";
  muteBtn.textContent = isMuted ? "Unmute" : "Mute";

  // Toggle mute state
  muteBtn.addEventListener("click", () => {
      isMuted = !isMuted;
      localStorage.setItem("muted", isMuted);
      muteBtn.textContent = isMuted ? "Unmute" : "Mute";

      // Trigger event so all pages update
      window.dispatchEvent(new Event("storage"));
  });
}


// Run setup functions when the page loads

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded. Running setup...");

  setupAudio();
  setupMuteButton();

    if (document.querySelector(".prologue-page")) {
      setupPrologue(); 
  } else if (document.querySelector(".intro-page")) {
      setupIntroAnimation(); 
  }
});
//prologue
function setupPrologue() {
  console.log("Prologue started...");

  const prologueTexts = [
      "After a mysterious attack devastates humanity, the world falls into an eerie silence. Cities stand empty, roads crumble, and nature slowly reclaims what was once hers. Only small creatures scurry through the ruins, the last remnants of life.",
      "Deep within the wreckage, a lone, damaged robot stirs to life. Somehow, against all logic, it has become sentient. Confused yet determined, it stumbles into a nearby warehouse, scavenging metal scraps to repair itself.",
      "With newfound purpose, the robot chooses a name—ScrapBot. And with its joints tightened and circuits humming, it sets off into the vast, empty world, searching for something it doesn’t yet understand: companionship."
  ];

  let currentTextIndex = 0;
  const prologueTextElement = document.getElementById("prologue-text");
  const nextButton = document.getElementById("next-button");

  nextButton.addEventListener("click", function(event) {
      event.preventDefault();

      currentTextIndex++;

      if (currentTextIndex < prologueTexts.length) {
          prologueTextElement.innerHTML = prologueTexts[currentTextIndex];
      } else {
          console.log("Prologue finished. Redirecting to intro...");
          window.location.href = "start.html"; //Go to intro animation after prologue
      }
  });
}
// code for intro animation
function setupIntroAnimation() {
    console.log("Playing intro animation...");
  
    const ssssLogo = document.getElementById("ssss-logo");
    const title = document.getElementById("intro-text");
    const scrapbotLogo = document.getElementById("scrapbot-page-logo");
    const nextButton = document.querySelector(".intro-next-link");
    
    setTimeout(() => {
      if (ssssLogo) {
          ssssLogo.style.visibility = "visible";
          ssssLogo.style.opacity = "1";
      }
    }, 500);

    setTimeout(() => {
      if (ssssLogo) {
        ssssLogo.style.opacity = "0";
      }
    }, 4000);

    setTimeout(() => {
        if (title) {
            title.style.visibility = "visible";
            title.style.opacity = "1";
        }
    }, 1000);
  
    setTimeout(() => {
        if (title) {
            title.style.opacity = "0";
        }
    }, 4000);
  
    setTimeout(() => {
        if (scrapbotLogo) {
            scrapbotLogo.style.visibility = "visible";
            scrapbotLogo.style.opacity = "1";
        }
    }, 5000);
  
    setTimeout(() => {
        if (nextButton) {
            nextButton.style.visibility = "visible";
            nextButton.style.opacity = "1";
        }
    }, 7000);
  }
  // workshop dio buying popup
  document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".fig-buying-block p, .decor-buying-block p"); 
    const popup = document.getElementById("buy-popup");
    const overlay = document.getElementById("popup-overlay");
    const confirmButton = document.getElementById("confirm-btn");


    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.textContent.trim() !== "Locked") {
                popup.style.display = "block";
                overlay.style.display = "block";
            }
        });
    });

    overlay.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    // successful alrt
    confirmButton.addEventListener("click", function () {
        alert("Purchase successful!");
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});