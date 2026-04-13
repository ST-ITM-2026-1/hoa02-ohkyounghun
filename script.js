let btn;
let filter;
document.addEventListener("DOMContentLoaded", init);

function init() {
    btn = document.querySelector("#theme-btn");
    btn.addEventListener("click", toggleTheme);
    filter = document.querySelectorAll(".filter-btn");
    filter.forEach(btn => {
        btn.addEventListener("click", handleFilter);
    });
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");
    if (isDark) {
        btn.textContent = "☀";
    }
    else {
        btn.textContent = "☽"
    }

}

function handleFilter(e) {
    const filter = e.target.dataset.filter;
    const projects = document.querySelectorAll(".projects-container section");
    projects.forEach(project => {
        if (filter === "all" || project.dataset.category === filter) {
            project.style.display = "block";  // appear
        }
        else {
            project.style.display = "none";
        }
    });
}
