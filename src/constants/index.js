import {
    backend,
    frontend,
    fullstack,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    bootstrap,
    expressjs,
    postman,
    sublimetext,
    vsc,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    metaverse,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer ",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: fullstack,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap CSS",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
        name: "Sublime Text",
        icon: sublimetext,
    },
    {
        name: "Visual Studio Code",
        icon: vsc,
    },
  ];
  
  
  
  
  
  const projects = [
    {
      name: "Front-end Capstone",
      description:
        "Designed and developed a static responsive website using HTML5, CSS3, Bootstrap, and Git for version control, hosted on GitHub. This capstone project priorities the mobile view ",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 3",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ronnelaldrinmariano/web-developer-portfolio",
      live_code_link: "https://ronnelaldrinmariano.github.io/personalportfolio/",
    },
    {
      name: "Back-end Capstone ",
      description:
        "Developed a comprehensive backend capstone project. The project involved creating efficient e-commerce platform with a focus on backend logic and robust database management. ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "ExpressJs",
          color: "blue-text-gradient",
        },
        {
          name: "Postman API",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://gitlab.com/b2952243923/mariano-ronnel/backend/s49-s53",
      live_code_link: "https://capstone-2-mariano.onrender.com/products/retrieveproducts",
    },
    {
      name: "Full-stack Capstone",
      description:
        "Developed a React-based Web application with API integration and responsive design, utilizing modern JavaScript techniques and DOM manipulation. Combination of my Back-end capstone to create a fully functional Ecommerce Website",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Expressjs",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://gitlab.com/b2952243923/mariano-ronnel/fullstack/s65-s71",
      live_code_link: "https://mariano-ronnel-fullstack-s65-s71.vercel.app/home",
    },
    {
      name: "New Meta Multiverse",
      description:
        "A modern marvel that seamlessly integrates Next.js, Tailwind CSS, and Framer Motion technologies. With blazing-fast loading times and server-side rendering, Next.js ensures optimal performance and smooth navigation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "blue-text-gradient",
        }
      ],
      image: metaverse,
      source_code_link: "https://github.com/ronnelaldrinmariano/metaversus",
      live_code_link: "https://metaversus-sooty.vercel.app/",
    },
  ];
  
  export { services, technologies, projects };