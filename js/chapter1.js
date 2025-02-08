document.addEventListener("DOMContentLoaded", () => {
    const storyContainer = document.getElementById("story-container");
    const chapterContent = document.getElementById("chapter-content");
    const characterImg = document.getElementById("character-image");
    const dialogueBox = document.getElementById("dialogue-box");

    let currentChapter = 0;
    let isTransitioning = false;

    const chapters = [
        { 
            background: "../images/grassbg.jpg",
            character: "", 
            title: "Chapter 1",
            subtitle: "A New Companion?",
            text: ""
        },
        { 
            background: "../images/grassbg.jpg",
            character: "",
            text: "It doesn't know how long it has been awake. Minutes? Hours? Time feels irrelevant. But one thought overrides everything else."
        },
        { 
            background: "../images/grassbg.jpg",
            character: "",
            text: "A world without voices. A city stripped of its purpose. ScrapBot stumbles out of the warehouse, servos whirring softly in the eerie stillness."
        },
        { 
            background: "../images/grassbg.jpg",
            character: "../images/scrapbotFlat.png",
            position: "left",
            name: "Scrapbot",
            text: "I can't be the only one left. There has to be someone else."
        },
        { 
            background: "../images/cityruinsbg.jpg",
            character: "",
            text: "Its metal feet crunch over cracked pavement as it scans the horizon. Rusted streetlights loom like skeletal remains."
        },
        { 
            background: "../images/cityruinsbg.jpg",
            character: "../images/scrapbotFlat.png",
            position: "left",
            name: "Scrapbot",
            text: "'You're still operational?'"
        },
        {
            background: "../images/cityruinsbg.jpg",
            character: "../images/stubbyflat.png",
            position: "right",
            name: "???",
            text: "The machine doesn't respond. It slowly turns its head, staring at ScrapBot with faded optics."
        },
        {
            background: "../images/warehouse.jpg",
            character: "",
            text: "The warehouse hums as ScrapBot works, piecing together scraps—wires, plating, anything usable."
        },
        {
            background: "../images/warehouse.jpg",
            character: "../images/scrapbotFlat.png",
            position: "left",
            name: "Scrapbot",
            text: "'You're functional again... I think I'll call you... Short Stubby.'"
        },
        {
            background: "../images/warehouse.jpg",
            character: "../images/stubbyflat.png",
            position: "right",
            name: "Short Stubby",
            text: "The machine doesn't respond, but it moves. ScrapBot steps back, knowing it's no longer alone."
        },
        { 
            background: "../images/grassbg.jpg",
            character: "", 
            title: "End of Chapter 1",
            subtitle: "To be continued...",
            text: ""
        }
    ];


    function updateScene() {
        if (currentChapter < chapters.length) {
            const chapter = chapters[currentChapter];

            document.querySelector(".page-container").style.backgroundImage = `url('${chapter.background}')`;

            // Hhde content before upd
            chapterContent.style.opacity = 0;
            characterImg.style.opacity = 0;
            dialogueBox.style.opacity = 0;
            isTransitioning = true;

            setTimeout(() => {
                if (chapter.title) {
                    // show title screen
                    chapterContent.innerHTML = `<h1>${chapter.title}</h1><h2>${chapter.subtitle}</h2>`;
                    chapterContent.style.display = "block";
                    dialogueBox.style.display = "none"; // Hide dialogue box
                } else {
                    // show dialogue after first click
                    chapterContent.style.display = "none";
                    dialogueBox.style.display = "flex";
                    dialogueBox.innerHTML = `${chapter.name ? `<span class="dialogue-name">${chapter.name}:</span>` : ""}<p>${chapter.text}</p>`;
                }

                if (chapter.character) {
                    characterImg.src = chapter.character;
                    characterImg.style.display = "block";
                    characterImg.className = chapter.position === "left" ? "character-left" : "character-middle";
                } else {
                    characterImg.style.display = "none";
                }

                chapterContent.style.opacity = 1;
                characterImg.style.opacity = 1;
                dialogueBox.style.opacity = 1;
                isTransitioning = false;
            }, 500);
        } else {
            location.href = "episodeSelect.html";
        }
    }

    updateScene();

    storyContainer.addEventListener("click", () => {
        if (!isTransitioning) {
            currentChapter++;
            if (currentChapter === 1) {
                chapterContent.style.opacity = 0;
                setTimeout(() => chapterContent.style.display = "none", 500);
            }
            updateScene();
        }
    });
});