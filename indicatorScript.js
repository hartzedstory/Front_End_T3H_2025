

const tabs = document.querySelectorAll('.tab-item');
const indicator = document.getElementById('indicator');

function updateIndicator(activeTab) {
    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = activeTab.parentElement.getBoundingClientRect();
    const left = tabRect.left - containerRect.left;
    indicator.style.width = `${tabRect.width}px`;
    indicator.style.transform = `translateX(${left}px)`;
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        updateIndicator(tab);
    });
});

window.addEventListener('load', () => {
    const activeTab = document.querySelector('.tab-item.active');
    updateIndicator(activeTab);
});

window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.tab-item.active');
    updateIndicator(activeTab);
});