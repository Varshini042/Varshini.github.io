// Typing Effect for Roles
const roles = ["Data Engineer", "BI Developer", "Data Analyst"];
let roleIndex = 0;
let charIndex = 0;
const dynamicRole = document.getElementById("dynamic-role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    dynamicRole.innerHTML += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    dynamicRole.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);

// Fetch Projects from GitHub
fetch("https://api.github.com/users/Varshini042/repos")
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById("project-list");
    data.slice(0, 6).forEach(repo => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || "No description available."}</p>`;
      projectList.appendChild(projectItem);
    });
  });
