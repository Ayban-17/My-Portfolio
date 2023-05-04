document.addEventListener("DOMContentLoaded", () => {
  const projectData = [
    {
      id: 1,
      name: "YouTube Clone",
      description:
        "This is a YouTube clone website with responsive design, search, and featured videos using HTML, CSS, and JavaScript. Demonstrated web development proficiency and experience implementing complex features.",
      image: "/assets/projects/youtube.png",
      github_url: "https://github.com/Ayban-17/YouTube-Clone",
      live_demo: "https://ayban-17.github.io/YouTube-Clone/",
    },
    {
      id: 2,
      name: "Space Tourism ",
      description:
        "This is a space tourism website with a modern design using HTML, CSS, and JavaScript. Website features an animated hero section, informative sections with images, and a responsive layout.",
      image: "/assets/projects/space.png",
      github_url: "https://github.com/Ayban-17/space-tourism",
      live_demo: "https://ayban-17.github.io/space-tourism/ ",
    },
    {
      id: 3,
      name: "BulSU  Archive",
      description:
        "This is a functional frontend for BulSU Archive website using HTML, CSS, and JavaScript. Website features an intuitive and user-friendly interface, responsive design, and dynamic search functionality.",
      image: "/assets/projects/archive.png",
      github_url:
        "https://github.com/Ayban-17/BulSU-Archive-funtional-frontend-Javscript-html-css",
      live_demo:
        "https://ayban-17.github.io/BulSU-Archive-funtional-frontend-Javscript-html-css/",
    },
    {
      id: 4,
      name: "Moviefy",
      description:
        "This is a simple Movie App using an API with HTML, CSS, and JavaScript. The app features a search function for movies. ",
      image: "/assets/projects/Moviefy.png",
      github_url: "https://github.com/Ayban-17/Movie-App",
      live_demo: "https://ayban-17.github.io/Movie-App/",
    },
  ];
  generateProjects(projectData);
  wordHover();
});

const generateProjects = (projectData) => {
  const projects = document.querySelector(".project-main-container");
  const projectsContent = projectData
    .map((data) => {
      const { id, name, description, image, github_url, live_demo } = data;
      return `<div class="project-container ${
        id % 2 === 0 ? "project-even" : "project-odd"
      }" id= "project-${id}">
    <img src="${image}" alt="" />
    <div class="description">
      <h1>${name}</h1>
      <p>
    ${description}
      </p>
      <div class="icons-container">
        <button class="github-icon icons" onclick="goTo('${github_url}')">
          <i
            class="fa-brands fa-github fa-2xl"
            style="color: #ffffff"
            
          ></i>
          <p>Go to Repository</p>
        </button>
        <button class="website-icon icons" onclick="goTo('${live_demo}')">
          <i
            class="fa-solid fa-globe fa-2xl"
            style="color: #ffffff"
            
          ></i>
          <p>Live Demo</p>
        </button>
      </div>
    </div>
  </div>`;
    })
    .join("");
  projects.innerHTML = projectsContent;
};

const wordHover = () => {
  const sentences = document.querySelectorAll("p");
  sentences.forEach(
    (sentence) =>
      (sentence.innerHTML = sentence.innerText
        .split(" ")
        .map((word) => `<span>${word}</span>`)
        .join(" "))
  );
};
