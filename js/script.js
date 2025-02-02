//FOR DIORAMA CODE line 3-89

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("diorama-canvas");
    if (!canvas) return;
   
    const layout = JSON.parse(localStorage.getItem("dioramaLayout")) || [];
    layout.forEach(item => {
      const img = document.createElement("img");
      img.src = item.src;
      img.style.position = "absolute";
      img.style.left = item.x;
      img.style.top = item.y;
      img.width = 50;
      img.height = 50;
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
 
  const saveDiorama = () => {
    const canvas = document.getElementById("diorama-canvas");
    const items = [...canvas.querySelectorAll(".placed")].map(img => ({
      src: img.src,
      x: img.style.left,
      y: img.style.top
    }));
    localStorage.setItem("dioramaLayout", JSON.stringify(items));
    window.location.href = "index.html";
  };
 

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
  setupAudio();
  setupMuteButton();
});