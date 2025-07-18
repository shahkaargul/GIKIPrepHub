document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleIcon = item.querySelector('.toggle-icon');
        
        question.addEventListener('click', () => {
            // Close all other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                toggleIcon.textContent = '×';
            } else {
                answer.style.maxHeight = '0';
                toggleIcon.textContent = '+';
            }
        });
    });
    
    // Open first FAQ item by default (optional)
    // faqItems[0].classList.add('active');
    // faqItems[0].querySelector('.faq-answer').style.maxHeight = faqItems[0].querySelector('.faq-answer').scrollHeight + 'px';
    // faqItems[0].querySelector('.toggle-icon').textContent = '×';
});