// Blog Filters - Flowria
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            blogCards.forEach(card => {
                const cardCity = card.dataset.city;
                
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else if (filter === 'marseille') {
                    if (cardCity === 'marseille') {
                        card.classList.remove('hidden');
                        card.style.display = '';
                    } else {
                        card.classList.add('hidden');
                        card.style.display = 'none';
                    }
                }
            });
            
            // Add animation
            blogCards.forEach((card, index) => {
                if (!card.classList.contains('hidden')) {
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
                    }, 10);
                }
            });
        });
    });
});
