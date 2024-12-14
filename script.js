const username = "your-github-username"; // Replace with your GitHub username
const projectList = document.getElementById("project-list");

// Fetch GitHub repositories using GitHub API
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            // Create a list item for each repository
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || "No description provided."}`;
            projectList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("Error fetching repositories:", error);
        projectList.innerHTML = "<li>Failed to load projects.</li>";
    });
