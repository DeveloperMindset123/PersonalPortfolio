import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    UnrealEngine,
    tensorflow,
    LaGuardia,
    Cpp,
    ArrayOfLinkedList,
    SeaMonster,
    multithreading,
    blackBackground,
    blueBackground,
    greenBacground,
    logo,
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
      title: "React/TailwindCSS developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    /*{
      name: "MongoDB",
      icon: mongodb,
    },*/
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   /* {
      name: "figma",
      icon: figma,
    }, */
    /*{
      name: "docker",
      icon: docker,
    }, */
    {
      name: "python",
      icon: python,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },  
    {
      name: "C++",
      icon: Cpp,
    },
    {
      name: "Unreal Engine",
      icon: UnrealEngine,
    }, 
  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "LaGuardia Community College",
      icon: LaGuardia,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Developed predictive models using machine learning, natural language and statistical analysis methods based on the following algorithms: SVM, PCA, KNN.",
        "Created graphs and charts detailing data analysis results.",
        "Identified data anomalies and worked with mentor to perform root cause analysis and resolve issues.",
        "Interpreted and analyzed data using exploratory mathemtics and statistical techniques based on scientific methods.",
      ],
    },
    {
      title: "Curriculum Developer",
      company_name: "CodingPlusOne",
      icon: 'https://media.licdn.com/dms/image/C560BAQHQMPZTNIcTOg/company-logo_100_100/0/1620714724098?e=1689206400&v=beta&t=QnSF75N_g2VTnyZNPnRqpkp3g2MZT0wYMtjFKr08R3w',
      iconBg: "#E6DEDD",
      date: "May 2021 - Sep 2021",
      points: [
        "Collaborated with experienced programmers/teachers to develop engaging coding lessons that inspire and educate kids of various age groups.",
        "Facilitated learning for young students between the ages of 7-12 by using interactive, hands-on projects that teach the fundamentals of coding with Scratch.",
        "Designed and implemented a comprehensive teaching curriculum for 13-17 year old students, focusing on web development with HTML, CSS, and JavaScript, preparing them for future careers in the tech industry.",
        "Demonstrated excellent communication skills by effectively conveying complex coding concepts in an accessible and engaging manner, fostering a love of learning and technology in the next generation of coders.",
      ],
    },

    {
      title: "App Tester",
      company_name: "Comet",
      icon: 'https://media.licdn.com/dms/image/C560BAQFJOVDEEO-uHQ/company-logo_100_100/0/1625236784417?e=1689206400&v=beta&t=oDlnx0hnnPrasTBS_urBdzzDp9RZHJ0x_7bHFnicUUw',
      iconBg: "#383E56",
      date: "May 2021 - Aug 2021",
      points: [
        "Collaborated closely with Comet's team to provide comprehensive feedback on app development progress and user experience.",
        "Utilized analytical and critical thinking skills to evaluate the accuracy of personalized recommendations and suggest improvements to app features.",
        "Delivered detailed and informative weekly reports to effectively communicate my understanding of the app's progress and potential impact on the college selection process.",
        "Contributed valuable insights and feedback to help create a user-friendly, effective college selection tool for high school students.",
      ],
    },
   /* {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }, */
  ]; 
  
  const testimonials = [
    {
      testimonial:
        "Ayan Das's exceptional work, self-starting attitude, dedication to continuous improvement, and valuable leadership skills make him an ideal candidate for the LSAMP Summer Research Program.",
      name: "Professor Rose Wong",
      designation: "Probabillity and Statistics Professor",
      company: "City College of New York",
      image: blackBackground,
    }, 
    {
      testimonial:
        "Ayan led and communicated effectively, guiding the team to complete the word count capstone project on time and meeting all requirements.",
      name: "Teammate 1",
      designation: "Sophomore",
      company: "City College of New York",
      image: blueBackground,
    },
    {
      testimonial:
        "Ayan's dedication, technical skills, and positive attitude made him a valuable asset to our team, and I would highly recommend him for any future projects.",
      name: "Nur Mazumder",
      designation: "Senior",
      company: "City College of New York",
      image: greenBacground,
    },
  ];
  
  const projects = [
    {
      name: "Scalable Enrollment System",
      description:
        "For my data structure midterm project, I designed an enrollment system that could add, remove, and search students using linked lists and hash tables in C++. The system had an enrollment array that could hold up to 10 students and a waiting list array that could hold an additional 5 students if necessary, with a message being returned if the section was full.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "LinkedList",
          color: "green-text-gradient",
        },
        {
          name: "Arrays",
          color: "pink-text-gradient",
        },
      ],
      image: ArrayOfLinkedList,
      source_code_link: "https://github.com/DeveloperMindset123/DataStructureProject",
    },
    {
      name: "Sea Monster Crowdfunding",
      description:
        "As part of a prerequisite course for intermediate web development, I created a responsive website using HTML, CSS, and JavaScript. The site displayed information about games funded by the company and utilized a JSON dataset, filtered based on specific properties and displayed upon button click using DOM manipulation techniques.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: SeaMonster,
      source_code_link: "https://github.com/DeveloperMindset123/web102_prework",
    },
    {
      name: "Word Count",
      description:
        "This project involved analyzing a text file and outputting a dictionary of words and their frequency. The source data was obtained from an ebook on a website, and the project was split into two parts: calculating word frequency and the most frequent word, and implementing either multithreading or multiprocessing to observe runtime execution.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "green-text-gradient",
        },
        {
          name: "Regex/Multithreaders",
          color: "pink-text-gradient",
        },
      ],
      image: multithreading,
      source_code_link: "https://github.com/DeveloperMindset123/web102_prework",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

  //copy pasted all of the content we will have on our personal portfolio, where everything is on one file and it will be referenced to everywhere else, to match to my own developer experience