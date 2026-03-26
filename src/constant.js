// Skills Section Logo's
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/reactjs.png';
import reduxLogo from './assets/redux.png';
import tailwindcssLogo from './assets/tailwindcss.png';
import bootstrapLogo from './assets/bootstrap.png';
import springbootLogo from './assets/springboot.png';
import nodejsLogo from './assets/nodejs.png';
import expressjsLogo from './assets/express.png';
import mysqlLogo from './assets/mysql.png';
import mongodbLogo from './assets/mongodb.png';
import cLogo from './assets/c.png';
import HMSLogo from './assets/HMSLogo.png';
import AirBnB from './assets/AirBnBLogo.png';
import cppLogo from './assets/cpp.png';
import javaLogo from './assets/java.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import postmanLogo from './assets/postman.png';
import netlifyLogo from './assets/netlify.png';
import vercelLogo from './assets/vercel.png';
import AMSLogo from './assets/AMS.png';
import HNBGULogo from './assets/HNBGUlogo.jpg';
import ITGLogo from './assets/ITG.png';
import PolyLogo from './assets/poly.png';
import TODOLogo from './assets/todo-list.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: HNBGULogo,
      school: "Hamvati Nandan Bahuguna Garhwal University, Srinagar Garhwal, Uttarakhand.",
      date: "2024 - 2026",
      grade: "pursuing",
      desc: "I am pursuing my Master's degree (M.Tech) in Computer Science and Engineering from HNBGU (Central University) During my time at HNBGU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Advance Data Structures and Algorithms, Advance Database Management Systems, Web Development, and Object Oriented Software Engineering, which enhanced my skills and knowledge. My experience at HNBGU (Central University) has been instrumental in shaping my technical abilities, research capabilities and professional growth.",
      degree: "Master of Technology - M.Tech",
    },
    {
      id: 1,
      img: ITGLogo,
      school: "Institute of Technology, Gopeshwar, Uttarakhand.",
      date: "2021 - 2024",
      grade: "65%",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering(B.Tech) from Institute of Technology College, Gopeshwar. Throughout my studies, I was explored Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Institue of Technology College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 2,
      img: PolyLogo,
      school: "Goverment Polytechnic Ratura, Rudraprayag, Uttarakhand.",
      date: "2018 - 2021",
      grade: "71%",
      desc: "I completed my diploma from Goverment Polytechnic Ratura, Rudraprayag, under the UBTER board, where I studied different subjects basics in Computer Science and Engineering.",
      degree: "Diploma (Computer Science and Engineering)",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AirBnB Clone",
      description:
        "**AirBnB Clone** is a high-performance, monolithic web application, vacation rental platform which is developed in Spring Boot Framework. It replicates core functionalities of Original AirBnB platform like property listings, secure user authentication, and booking management though a robust RESTful API architechture. The project serves as a comprehensive solution for property management and guest reservations, integrating complex buiness logic such as dynamic seasonal pricing.",
      image: AirBnB,
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT"],
      github: "https://github.com/neeraj-bisht-8126/AirBnb_Clone/tree/main/src/main/java/com/neerajbisht/projects/AirBnB",
      webapp: "",
    },
    {
      id: 1,
      title: "Hospital Management System",
      description:
        "**Hospital Management System** is a backend focused hospital management system developed in Spring Boot framework, where i create a RESTful APIs for management of Patients, Appointments, Doctors, and Departments, And relationship between multiple tables like Patients And Appointments, Appointments And Doctors, etc. Also use complex JPQL queries to avoid N+1 problem of hibernate. Much more functionalities. Currently it is under development and in future i will add more functionalities on this project.",
      image: HMSLogo,
      tags: ["Java", "Spring Boot","Spring Security", "MySQL"],
      github: "https://github.com/neeraj-bisht-8126/Spring-Boot/tree/main/HospitalManagementSystem/hospitalmanagementsystem/src/main/java/com/hospitalmanagementsystem/hospitalmanagementsystem",
      webapp: "",
    },
    {
      id: 2,
      title: "Alumini Management System(A.M.S)",
      description:
        "**Alumni Management System** Developed a full stack Alumni Management System using the MERN stack (MongoDB, Express, React, Node.js). The platform allows college alumni to connect, share updates, and post their achievements. Each user can create posts, view others’ updates, and engage with community content. The application uses Cloudinary for image storage, ensuring efficient media management, and MongoDB Atlas for secure cloud-based data storage. The project focuses on maintaining alumni records, fostering networking, and building an interactive digital community for graduates.",
      image: AMSLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Priyanshu1502/AMS-NEW/tree/main/Backend/src",
      webapp: "",
    },
    {
      id: 3,
      title: "TO-DO List with Java",
      description:
        "**To-Do List Application** Developed a full stack To-Do List application using Java Spring Boot for the backend, React for the frontend, and MySQL as the database. The project implements complete CRUD operations—allowing users to create, view, update, and delete their tasks smoothly. Spring Boot manages the RESTful APIs and database connectivity, while React provides a dynamic and user-friendly interface. This project showcases efficient integration of frontend, backend, and database technologies for seamless task management.",
      image: TODOLogo,
      tags: ["React JS", "Spring Boot", "MySQL", "HTML", "CSS", "Java"],
      github: "",
      webapp: "",
    },
  ];  
