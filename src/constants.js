// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// Experience Section Logo's


// Education Section Logo's
import rtuLogo from './assets/education_logo/Rajasthan_Technical_University_logo.jpg';
import dsLogo from './assets/education_logo/D_S_Science.png';
import avmLogo from './assets/education_logo/AVM.jpg';

// Project Section Logo's



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
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
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
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: vercelLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: vercelLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rtuLogo,
      school: "Rajasthan Technical University, Kota",
      date: "2022-2026",
      grade: "9.60 CGPA",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science from Rajasthan Technical University, Kota. My coursework includes advanced topics such as Data Structures and Algorithms, Web Development, Database Management Systems, and Software Engineering. I am actively involved in various projects that apply theoretical concepts to practical applications, enhancing my skills in software development and problem-solving.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: dsLogo,
      school: "D.S. Science Academy, Gangapur City",
      date: "2020-2021",
      grade: "96.80%",
      desc: "I completed my class 12 education from D.S. Science Academy, Gangapur City, under the RBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "RBSE(XII) - PCM (Physics, Chemistry, Mathematics)",
    },
    {
      id: 2,
      img: avmLogo,
      school: "Adarsh Vidhya Mandir, Baharawanda Khurd",
      date: "2018-2019",
      grade: "87.17%",
      desc: "I completed my class 10 education from Adarsh Vidhya Mandir, Baharawanda Khurd, under the RBSE board.",
      degree: "RBSE(X), Science and Mathematics",
    },
  ];
  
//   export const projects = [
//     {
//       id: 0,
//       title: "GitHub Profile Detective",
//       description:
//         "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
//       image: githubdetLogo,
//       tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
//       github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
//       webapp: "https://githubprofiledetective.netlify.app/",
//     },
//     {
//       id: 1,
//       title: "CS Prep",
//       description:
//         "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
//       image: csprepLogo,
//       tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
//       github: "https://github.com/codingmastr/CSPrep",
//       webapp: "https://csprep.netlify.app/",
//     },
//     {
//       id: 2,
//       title: "Movie Recommendation App",
//       description:
//         "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
//       image: movierecLogo,
//       tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
//       github: "https://github.com/codingmastr/Movie-Recommendation-App",
//       webapp: "https://movie-recommendation-app-jet.vercel.app/",
//     },
//     {
//       id: 3,
//       title: "Email Validator NPM Package",
//       description:
//         "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
//       image: npmLogo,
//       tags: ["React JS", "Node.js", "NPM", "Validation"],
//       github: "https://github.com/codingmastr/cmtk-email-validator",
//       webapp: "https://www.npmjs.com/package/cmtk-email-validator",
//     },
//   ];  