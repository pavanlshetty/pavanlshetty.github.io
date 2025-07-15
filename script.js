// SPA-like navigation for DevOps Portfolio
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
            setActiveNav(page);
        });
}
function setActiveNav(page) {
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
    // Initial load
    loadPage('home.html');
});
