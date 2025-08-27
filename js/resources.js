document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const resourceContent = document.querySelector('.resource-content');
    
    // Updated resource data with all sections
    const resourceData = {
        'tpp': {
            title: 'Topical Practice Questions',
            resources: [
                { title: 'Physics TPP (For Engineering Only)', desc: 'Complete FSC (11th and 12th) Topical Practice Papers', link: 'https://drive.google.com/drive/folders/1Oooxi-AjyeTsUvBB7zDAULa2WeTiEryL?usp=drive_link' },
                { title: 'Mathematics TPP (For Engineering Only)', desc: 'Complete Book Topical Practice Questions', link: '#' },
                { title: 'English TPP (For Management Sciences + Engineering)', desc: 'Topical Practice Questions', link: 'https://drive.google.com/drive/folders/1VW_XPeG0sspeR-CQ07hp6EbDHck49GjF?usp=drive_link' },
                { title: 'General Math (For Management Sciences Only)', desc: 'General Math important Topics TPPs', link: 'https://drive.google.com/drive/folders/12RSCB2W0701S-ASmgHk4bwBn1hcXaoi3?usp=drive_link' }
            ]
        },
        'lectures': {
            title: 'lectures',
            resources: [
                { title: 'Physics', desc: 'Complete ECAT Playlist by Sir Bilal Zia', link: 'https://www.youtube.com/watch?v=8t82rUkNMOg&list=PLG6V3xWznon93t0CIAhcGPcOaVhiF64td' },
                { title: 'Mathematics', desc: 'Complete ECAT Playlist by Sir Hashim Zia', link: 'https://www.youtube.com/watch?v=gSv2dlRBNj8&list=PL5b9mn6-ELrGIsc3LVnFEzlN1fs75Ay--' },
                { title: 'English', desc: 'Complete English Prep by Sir Omair Siddique', link: 'https://www.youtube.com/watch?v=KjdmNG5Z5Bs&list=PL5b9mn6-ELrGlwBbXTimKqVwKsthZsRVP' },
                { title: 'General Mathematics', desc: 'Complete BCAT Playlist by Sir Hashim Zia', link: 'https://www.youtube.com/watch?v=7o7YTzAttN4&list=PL5b9mn6-ELrGE-jKjrOdygGVaucoXRcDC' },
            ]
        },
        
        'websites': {
            title: 'Top Helpful Websites',
            resources: [
                { title: 'Khan Academy', desc: 'Free online courses for math and science', link: 'https://www.khanacademy.org/', external: true },
                { title: 'IndiaBix (For Management Sciences)', desc: 'Get all the topic-wise material you need for Management Sciences Preperation (General Math)', link: 'https://www.indiabix.com/aptitude/questions-and-answers/', external: true },
                { title: 'CareerRide (For Management Sciences)', desc: 'Get all the topic-wise material you need for Management Sciences Preperation (General Math)', link: 'https://www.careerride.com/', external: true },
                { title: 'Aggregate Calculator', desc: 'Calculate your GIKI Aggregate using this website', link: 'https://shahkaargul.github.io/GIKIAggregateCalc/', external: true }
            ]
        }
    };

    // Load initial tab content
    loadTabContent('tpp');

    // Tab click handlers
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load content
            const tabId = this.getAttribute('data-tab');
            loadTabContent(tabId);
        });
    });

    function loadTabContent(tabId) {
        const tabData = resourceData[tabId] || {};
        const resources = tabData.resources || [];
        
        let html = `<h2>${tabData.title || 'Resources'}</h2><div class="resource-grid">`;
        
        if (resources.length === 0) {
            html = '<p class="no-resources">No resources available yet. Check back soon!</p>';
        } else {
            resources.forEach(resource => {
                const linkTarget = resource.external ? ' target="_blank"' : '';
                const linkText = resource.external ? 'Visit' : (resource.title.includes('Mock') ? 'Start Test' : 

                                resource.title.includes('Notes') || resource.title.includes('Topics') ? 'Study' : 'Download');
                
                html += `
                    <div class="resource-card">
                        <h3>${resource.title}</h3>
                        <p>${resource.desc}</p>
                        <a href="${resource.link}"${linkTarget} class="resource-link">${linkText}</a>
                    </div>
                `;
            });
            html += '</div>';
        }
        
        resourceContent.innerHTML = html;
    }
});