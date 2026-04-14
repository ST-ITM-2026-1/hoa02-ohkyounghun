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
    fetchGitHubProfile();
    fetchGitHubRepos();
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

async function fetchGitHubProfile() {
    try {
        const response = await fetch("https://api.github.com/users/ohkyounghun");
        const data = await response.json();

        //console.log(data);

        const name = data.login;
        const profilePhoto = data.avatar_url;
        const bio = data.bio;
        const publicRepos = data.public_repos;
        const followers = data.followers;
        const followings = data.following;

        const profileDiv = document.querySelector("#profile");

        profileDiv.innerHTML = `
        <img src="${profilePhoto}" alt="${name}">
        <h2>${name}</h2>
        <p>${bio}</p>
        <p>Public Repos: ${publicRepos}</p>
        <p>Followers: ${followers}</p>
        <p>Followings: ${followings}</p>
    `
    }

    catch (error) {
        console.log(error);
    }
}

async function fetchGitHubRepos() {
    try {
        const response = await fetch("https://api.github.com/users/ohkyounghun/repos");
        const data = await response.json();

    }
    catch (error) {
        console.log(error);
    }

}