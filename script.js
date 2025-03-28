// Typing Animation
const roles = ["Data Engineer", "BI Developer", "Data Analyst"];
let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typingText.innerHTML += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.innerHTML = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

// Fetch GitHub Projects
async function loadProjects() {
  const response = await fetch("https://api.github.com/users/Varshini042/repos");
  const projects = await response.json();
  const projectContainer = document.getElementById("projects-container");

  projects.slice(0, 6).forEach((repo) => {
    let projectDiv = document.createElement("div");
    projectDiv.className = "project-box";
    projectDiv.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || "No description available"}</p><a href="${repo.html_url}" target="_blank">View Project</a>`;
    projectContainer.appendChild(projectDiv);
  });
}

loadProjects();
