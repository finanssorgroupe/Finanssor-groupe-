// JavaScript pour le slider ou d'autres interactions
// Exemple : Code simple pour un slider qui change de texte toutes les 5 secondes
document.addEventListener('DOMContentLoaded', function() {
    const titles = ["Groupe", "FINANSSOR", ];
    const subtitles = ["Des ", "Sous-titre détaillé 2", "Sous-titre détaillé 3"];
    let index = 0;

    setInterval(() => {
        const sliderTitle = document.querySelector('.slider h1');
        const sliderSubtitle = document.querySelector('.slider h2');
        sliderTitle.textContent = titles[index];
        sliderSubtitle.textContent = subtitles[index];
        index = (index + 1) % titles.length;
    }, 5000);
});
