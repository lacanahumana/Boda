// CUENTA REGRESIVA
const weddingDate = new Date("2026-10-16T00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
        countdownEl.innerHTML = "<p>¡Hoy es el gran día!</p>";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
        <div class="countdown-item">
            <div class="countdown-number">${d}</div>
            <div class="countdown-label">Días</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-number">${h}</div>
            <div class="countdown-label">Hs</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-number">${m}</div>
            <div class="countdown-label">Min</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-number">${s}</div>
            <div class="countdown-label">Seg</div>
        </div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ANIMACIÓN AL HACER SCROLL (tipo Fixdate)
const fadeSections = document.querySelectorAll(".fade-section");

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            sec.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// MÚSICA DE FONDO (Home)
const audio = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");
const icon = document.getElementById("music-icon");
let isPlaying = false;

// Por políticas de los navegadores, el audio se inicia al primer click
function startMusic() {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            toggle.classList.add("playing");
            icon.textContent = "⏸";
        });
    }
}

// Primer toque en cualquier parte de la pantalla
document.addEventListener("click", startMusic, { once: true });

// Botón de música
toggle.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        toggle.classList.remove("playing");
        icon.textContent = "▶";
    } else {
        startMusic();
    }
});

// MODAL DRESS CODE
const modal = document.getElementById("dresscode-modal");
const openBtn = document.getElementById("open-dresscode");
const closeBtn = document.getElementById("close-dresscode");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// MODAL musica
const modal2 = document.getElementById("recomendacion-modal");
const openBtn2 = document.getElementById("open-recomendacion");
const closeBtn2 = document.getElementById("close-recomendacion");

openBtn2.addEventListener("click", () => {
    modal2.style.display = "flex";
});

closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal2.style.display = "none";
    }
});
