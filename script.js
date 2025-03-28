// Function to show only one section at a time
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Fetch and display GitHub projects
fetch("https://api.github.com/users/Varshini042/repos")
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById("project-list");
    data.slice(0, 6).forEach(repo => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("box");
      projectItem.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || "No description available."}</p>`;
      projectList.appendChild(projectItem);
    });
  });

// Simulate sending message
function sendMessage() {
  alert("Message sent successfully!");
}
