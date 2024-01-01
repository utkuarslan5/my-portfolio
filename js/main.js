document.addEventListener('DOMContentLoaded', () => {
  initializeProjects();
});

function initializeProjects() {
  // Placeholder data for projects
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      image: 'projects/project1/img/screenshot.png',
      url: 'projects/project1/index.html'
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
      image: 'projects/project2/img/screenshot.png',
      url: 'projects/project2/index.html'
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of Project Three.',
      image: 'projects/project3/img/screenshot.png',
      url: 'projects/project3/index.html'
    }
  ];

  const projectContainer = document.getElementById('project-container');
  if (projectContainer) {
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="${project.url}" class="project-link">View Project</a>
      `;
      projectContainer.appendChild(projectCard);
    });
  }
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}