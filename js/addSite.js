function extractDomain(url) {
    var domain = '';
    try {
        domain = new URL(url).hostname;
    } catch (error) {
        console.error('Ошибка при извлечении домена:', error);
    }
    return domain;
}

function addSite() {
    var siteUrl = document.getElementById('siteUrlInput').value;
    var allSitesBlocks = document.querySelector('.all-sites-blocks');
    var siteBlocksCount = allSitesBlocks.querySelectorAll('.site-block').length;

    if (siteBlocksCount < 4) {
        var newSiteBlock = document.createElement('div');
        newSiteBlock.classList.add('site-block');

        var domain = extractDomain(siteUrl);

        newSiteBlock.innerHTML = `
            <div class="site-block-text">
                <p class="site-block-text-title">${domain}</p>
                <h2 class="site-block-text-price">
                    $<span>${getRandomNumber()}</span>
                </h2>
                <p class="site-block-text-subtitle">
                    Текущий баланс
                </p>
                <button class="withdraw">
                    Вывести средства <br> <span>${getRandomNumber()} доступно</span>
                </button>
            </div>
            <img class="more" src="../icons/Больше.svg" alt="">
        `;

        allSitesBlocks.appendChild(newSiteBlock);
        saveSites();
    }
}

function saveSites() {
    var allSitesBlocks = document.querySelectorAll('.site-block');
    var siteData = [];

    allSitesBlocks.forEach(function(siteBlock) {
        siteData.push(siteBlock.outerHTML);
    });

    localStorage.setItem('savedSites', JSON.stringify(siteData));
}

function loadSites() {
    var savedSites = localStorage.getItem('savedSites');

    if (savedSites) {
        var allSitesBlocks = document.querySelector('.all-sites-blocks');
        allSitesBlocks.innerHTML = JSON.parse(savedSites).join('');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadSites();
    
    const allSitesBlocks = document.querySelector('.all-sites-blocks');

    allSitesBlocks.addEventListener('click', function(event) {
        if (event.target.classList.contains('more')) {
            const siteBlock = event.target.closest('.site-block');
            if (siteBlock) {
                siteBlock.remove();
                saveSites();
            }
        }
    });
});

function getRandomNumber() {
    return Math.floor(Math.random() * 1000);
}

document.getElementById('addButton').addEventListener('click', function() {
    addSite();
});
