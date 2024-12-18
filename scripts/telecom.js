
document.querySelectorAll('.feature').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#e8f0fe'; // Changement de fond lors du survol
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'white'; // Retour au fond initial après survol
    });
});

