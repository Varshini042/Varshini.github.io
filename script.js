document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Data Analyst", "BI Developer", "Data Engineer"];
  let index = 0;
  function typeRole() {
    const roleText = document.getElementById("role-text");
    roleText.textContent = roles[index];
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 3000);
  }
  typeRole();

  fetch("https://api.github.com/users/Varshini042/repos")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("projects-container");
      data.forEach(repo => {
        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");
        projectBox.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        container.appendChild(projectBox);
      });
    });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
      });
      document.querySelector(this.getAttribute("href")).style.display = "block";
    });
  });
});
