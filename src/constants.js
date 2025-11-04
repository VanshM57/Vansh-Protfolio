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
import moneymaplogo from './assets/work_logo/moneymaplogo.png';
import schedulerlogo from './assets/work_logo/schedulerlogo.png';
import sixmonthslogo from './assets/6monthslogo.png';
import weatherlogo from './assets/work_logo/weatherlogo.png';
import qrcodelogo from './assets/work_logo/qrcodelogo.png';
import passwordgeneratorlogo from './assets/work_logo/passwordgeneratorlogo.png';
import currencyconverterlogo from './assets/work_logo/currencyconverterlogo.png';
import basiccrudlogo from './assets/work_logo/basiccrudlogo.png';
import aicontentgenerator from './assets/work_logo/aicontentgenerator.png'
import postgre from './assets/tech_logo/postgre.png'
import nextjs from './assets/tech_logo/nextjs.png'
import typescript from './assets/tech_logo/typescript.png'
import churn_prediction from './assets/work_logo/churn_prediction.png'
import black_marlin from './assets/black_marlin.jpg'
// Experience Section Logo'


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
      { name: 'React JS', logo: reactjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Next JS', logo: nextjs},
      { name: 'TypeScript', logo: typescript},
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
      { name: 'Postgres', logo: postgre}
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
      img: sixmonthslogo,
      role: "Shopify Product Developer Intern",
      company: "6months Media & Growth Solutions",
      date: "June 2024 - July 2024",
      desc: "Developed customized e-commerce websites using the Shopify platform, focusing on responsive UI, product integration, and user experience optimization. Collaborated with design and marketing teams to build and maintain client stores. Gained hands-on experience in theme customization, Shopify Liquid, and third-party app integration in a fast-paced, client-focused environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Shopify"
      ],
    },
    {
      id: 1,
      img: black_marlin,
      role: "Data and Development Intern",
      company: "The Black Marlin Digital Solutions",
      date: "June 2025 - July 2025",
      desc: " at The Black Marlin Digital Solutions where I worked in the data and development field. Analyzed datasets and created analytical visuals like graphs and bar charts to derive insights. Also contributed to web development using the MERN stack and Shopify.",
      skills: [
        "Data Cleaning",
        "Data Analysis",
        "MERN Stack",
        "Shopify"
      ],

    }
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
      degree: "RBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI-Content-Generator",
      descriptions: "Developed a full-stack AI content generator web application using Next.js, TypeScript, PostgreSQL, Drizzle ORM, and Clerk for authentication. Integrated Gemini AI API to power 15+ tools like blog generators, YouTube SEO tools, Instagram post creators, and code analysis utilities. Designed a responsive and accessible UI using shadcn/ui, delivering a smooth user experience for content creation and optimization.",
      image: aicontentgenerator,
      tags: ["HTML","CSS","JavaScript","React JS","Next JS","TypeScript","Tailwind CSS","ShadCn","PostgreSQL","Clerk"],
      github: "https://github.com/VanshM57/ai-content-generator"
    },
    {
      id: 1,
      title: "MoneyMap",
      descriptions: "A powerful and user-friendly React.js and Firebase application designed to manage and visualize personal finances effortlessly. Simply add your income and expenses, and the app tracks your financial activity in real-time. It fetches, stores, and displays categorized transactions, insightful charts, and balance updates. The clean interface ensures a seamless experience, making it a must-have tool for individuals seeking better financial control.",
      image: moneymaplogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Firebase",'Tailwind CSS','Ant Design'],
      github: "https://github.com/VanshM57/MoneyMap"
    },
    {
      id: 2,
      title: "Scheduler",
      descriptions: "A powerful and user-friendly MERN stack application designed to organize and manage daily class schedules with ease. Simply log in to view, add, or update periods for the day, and the app fetches real-time data for seamless scheduling. With features like class tracking, teacher-room mapping, and admin-level statistics, it ensures smooth academic planning. The intuitive interface makes it an essential tool for students, teachers, and administrators alike.",
      image: schedulerlogo,
      tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: "https://github.com/VanshM57/Scheduler"
    },
    {
      id:3,
      title: "Employee Churn Prediction",
      description: "Developed an ANN-based customer churn prediction pipeline using TensorFlow (Keras) on the “Churn_Modelling” dataset; implemented label & one‑hot encoding, StandardScaler preprocessing, and trained a binary classifier (sigmoid output) achieving strong validation performance.",
      image: churn_prediction,
      tags: ["Python","TensorFlow","Keras","NumPy","pandas","scikit-learn","Streamlit","TensorBoard","Jupyter","ANN","Binary Classification","Data Preprocessing","OneHotEncoder","LabelEncoder","StandardScaler"],
      github: "https://github.com/VanshM57/Churn_Prediction_Using_ANN"
    },
    {
      id: 4,
      title: "Weather App",
      descriptions: "A clean and user-friendly weather application built using HTML, CSS, JavaScript, and external APIs to deliver real-time weather updates with ease. Simply enter any city name to instantly view live data including temperature, weather conditions, humidity, and wind speed. With features like smart city suggestions powered by the GeoDB Cities API and error handling using custom visuals, the app ensures a smooth and intuitive experience. Its responsive design and accurate results make it a handy tool for anyone wanting quick access to weather insights from around the world.",
      image: weatherlogo,
      tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'GeoDB Cities API'],
      github: "https://github.com/VanshM57/Weather__App"
    },
    {
      id: 5,
      title: "QR Code Generator",
      descriptions: "A fast and intuitive QR Code Generator built using HTML, CSS, and JavaScript, designed to create QR codes instantly with just a few keystrokes. Users can simply enter any text, URL, or custom input, and the app generates a scannable QR code in real time. With a clean and responsive design, it ensures a smooth user experience across all devices.",
      image: qrcodelogo,
      tags: ['HTML', 'CSS', 'JavaScript', 'QR Code API'],
      github: "https://github.com/VanshM57/QrCodeGenerator"
    },
    {
      id: 6,
      title: "Password Generator",
      descriptions: "A secure and customizable Password Generator application built using React to help users create strong, random passwords effortlessly. Users can define password length and choose to include uppercase letters, lowercase letters, numbers, and special characters. With real-time password generation and a one-click copy feature, the app ensures both convenience and security. Its responsive interface offers a seamless experience across devices, making it a practical tool for enhancing account protection and promoting safe password practices.",
      image: passwordgeneratorlogo,
      tags: ['HTML', 'Tailwind CSS', 'React JS'],
      github: "https://github.com/VanshM57/Password-Generator"
    },
    {
      id: 7,
      title: "Currency Converter",
      descriptions: "A sleek and efficient Currency Converter application built using React, designed to provide real-time currency exchange rates and conversions. Users can easily select their desired currencies and input amounts to instantly view converted values. The app fetches live data from a reliable API, ensuring accurate and up-to-date information. With its user-friendly interface and responsive design, it offers a seamless experience for travelers, businesses, and anyone needing quick currency conversions.",
      image: currencyconverterlogo,
      tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
      github: "https://github.com/VanshM57/currency-converter"
    },

  ]
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