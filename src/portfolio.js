/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import naukriLogo from "./assets/images/naukri-logo-hd.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ganesh Ban ",
  title: "Hi all, I'm Ganesh",
  subTitle: emoji(
    "A passionate Python Web Developer 🚀 having an experience of building Web applications with Html /CSS /JavaScript / Flask / Tkinter / NumPy and some other cool libraries and frameworks.."
  ),
  
  resumeLink:
    "https://drive.google.com/file/d/1rTgq8m5q1EZDcSUdPGIkjnpoS9i13Bwg/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ganeshban2416",
  linkedin: "https://www.linkedin.com/in/ganesh-ban-538715322/",
  gmail: "ganeshban163@gmail.com",
  Instagram: "https://www.instagram.com/ganeshvban_?igsh=dmtqdjR5bGt2NGxw",
  

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Hard working individual who looking for an opportunity to work in challenging environment with organization of repute.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and  applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Amazon's AWS/Microsoft's Azure"
    ),
     emoji("⚡Proficient to handle work loads and always adaptable to learn something new."),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
      {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    
    {
      skillName: "Microsoft-Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "College Of Computer Science & IT, Latur",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2023 - May 2026",
      desc: "Served as a Volunteer , actively contributing to organizing academic events. ",
    
      
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer Intern",
      company: "GrowFinix",
      companylogo: require("./assets/images/Growfinix.png"),
      date: "Aug 2025 – Nov 2025",
      desc: "Working on real time web projects where I enhance my skills and technical stack..!",
      
        
    },
    {
      role: "Front End Developer Intern",
      company: "Nixona",
      companylogo: require("./assets/images/nixona.png"),
      date: "Sep 2025 - Dec 2025",
      desc: "worked as Front End Developer Intern, gaining hands -on experience in building responsive and user friendly web interfaces..!"
      
        
    },
    
  
  ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true //
  
};

// Some big projects you have worked on

const Projects = {
  title: " Projects",
  subtitle: "Projects on  which I  worked in my academic Years.",
  projects: [
    {
      image: require("./assets/images/course.jpg"),
      projectName: "Computerized Course Registration System ",
      projectDesc: "Developed a simple webapp where students can enroll for  computerized courses.",
      footerLink: [
        {
          name: "Visit Project",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/facedetect.jpg"),
      projectName: "Face Detection App",
      projectDesc: "This is a desktop application in who detects the faces and count how many faces are in that frame.",
      footerLink: [
        {
          name: "Visit Project",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/portfoilo.jpg.png"),
      projectName: "PortFolio Website ",
      projectDesc: "Developed my personal portfolio website to showcase my personal Information.",
      footerLink: [
        {
          name: "Visit Portfolio",
          url: "https://ganeshvban.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};



const AchievementSection = {
  display: true,

  title: emoji("🏆 Certifications"),
  
  subtitle: "Certifications that I have achieved in my academics!",

  achievementsCards: [
    {
      title: "Python Certification",
      description: "Completed Python certification showcasing programming proficiency.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1RkYUpHQIf3YvuS9tWjDBz2pDgqVez1zt/view?usp=sharing",
        },
      ],
    },
    {
      title: "AWS Certification",
      description: "Certified in AWS fundamentals and cloud architecture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1P_bApd_yUOLzZQ-TlDf_eCbTUNcWnbZL/view?usp=sharing",
        },
      ],
    },
    {
      title: "Naukari Campus Certification",
      description: "Earned certification from Naukari Campus on career readiness.",
      image: naukriLogo,
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1myIaqkrP7D0gNF4OjIXzl8psl_VbJjDP/view?usp=sharing",
        },
      ],
    },
  ],
};




// const AchievementSection = {
//    display:true,
        
//   title: emoji(" Certifications 🏆 "),
//   subtitle:
//     " Certifications that I have achieved  in my academic..!",

  
    
//       footerLink: [
//         {
//           name: " Python Certification",
//           url: "https://drive.google.com/file/d/1RkYUpHQIf3YvuS9tWjDBz2pDgqVez1zt/view?usp=sharing/preview"
//         },
//          {
//           name: " AWS Certification",
//           url: "https://drive.google.com/file/d/1P_bApd_yUOLzZQ-TlDf_eCbTUNcWnbZL/view?usp=sharing/preview"
//         },
//                  {
//           name: "Naukri Campus Certification",
//           url: "https://drive.google.com/file/d/1myIaqkrP7D0gNF4OjIXzl8psl_VbJjDP/view?usp=sharing/preview"
//         },
        
       
//       ]
//     }




// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  
  display: true 
};
export const twitterDetails = {
  userName: "Ganesh Ban", // exampGe to hide Twitter section
};








const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss on work  or just want to say hi? My Inbox is open for all.",
  number: "+91-9699883385",
  email_address: "ganeshban163@gmail.com"
};




export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  Projects,
  AchievementSection,
  contactInfo,
  resumeSection
};
