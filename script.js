// script.js
// Hanterar knapptryckningar och ändrar innehåll

document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const question = document.getElementById('question');
    const imageContainer = document.getElementById('image-container');
    const bearImg = document.getElementById('bear-img');

    yesBtn.addEventListener('click', function() {
        // Skapa "ny sida"-effekt med pingvin-gif och hjärtan i cirkel
        document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(135deg,#ffe4ec 0%,#fff0f6 100%);">
            <div style="position:relative;width:340px;height:340px;display:flex;align-items:center;justify-content:center;">
                <img src="bear-kiss-bear-kisses.gif" alt="Bear kiss" style="width:180px;height:180px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;">
                <!-- Hjärtan i cirkel -->
                ${[...Array(12)].map((_,i)=>{
                    const angle = (i/12)*2*Math.PI;
                    const x = 140 + 120*Math.cos(angle);
                    const y = 140 + 120*Math.sin(angle);
                    return `<span style='position:absolute;left:${x}px;top:${y}px;font-size:2.2rem;color:#d72660;z-index:1;'>❤️</span>`;
                }).join('')}
            </div>
            <h1 style="color:#d72660;font-size:2.3rem;text-align:center;margin-top:32px;">Ooooo, älskar dig <3 </h1>
        </div>
        `;
    });

    // Variabel för att hålla koll på Yes-knappens storlek
    let yesScale = 1;

    noBtn.addEventListener('click', function() {
        question.textContent = 'Oj du måste råkat klicka fel försök igen älsk!';
        yesScale *= 1.25;
        yesBtn.style.transform = `scale(${yesScale})`;
        yesBtn.style.zIndex = 10;
        // Om knappen blir jättestor, ta över sidan
        if (yesScale > 8) {
            yesBtn.style.position = 'fixed';
            yesBtn.style.left = '50%';
            yesBtn.style.top = '50%';
            yesBtn.style.transform = 'translate(-50%, -50%) scale(20)';
            yesBtn.textContent = 'YES!';
            document.body.style.overflow = 'hidden';
        }
    });
});
