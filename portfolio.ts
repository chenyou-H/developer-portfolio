import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Alex Huang',
  title: "Hi all, I'm Alex",
  description:
    'As a software engineer, I am driven by my love for solving problems and my desire to make a positive impact through technology.  I am a collaborative team player and thrive in environments where I can work with others to find innovative solutions to complex problems. Leveraging my passion for learning and problem solving has led me to a career in software engineering, where I am constantly faced with new challenges and opportunities to learn and grow.',
  resumeLink:
    'https://docs.google.com/document/d/1GwjnHq0FaM7sonlgspZJoGA8TKJG4dib/edit?usp=sharing&ouid=100621214619178553009&rtpof=true&sd=true',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/chenyou-huang',
  github: 'https://github.com/chenyou-H',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ 5 years of experience building front-end applications using HTML5, CSS3, Javascript, Typescript, jQuery, React and Node.js, etc'
        ),
        emoji(
          '⚡ A thorough understanding of React and its related concepts such as functional and class components, Higher-Order components, custom hooks, lifecycles method, virtual DOM, and JSX'
        ),
        emoji(
          '⚡ Proficient with other front-end tools such as typescript for static typing and SASS to write clean and reusable CSS styles'
        ),
        emoji(
          '⚡ Experienced in client-side Node.js tools like Webpack, Babel, and testing frameworks such as Jest and React Testing Library'
        ),
        emoji(
          '⚡ Knowledgeable in the use of version control management systems such as Git'
        ),
        emoji(
          '⚡ Familiarity with popular development techniques such as Agile Scrum. Skillful in managing and prioritizing user stories and tasks using Agile Scrum tools such as Jira or Trello'
        ),
        emoji(
          '⚡ Experienced with developing responsive and interactive web applications utilizing RESTful API and constructing web service APIs that adhere to the REST architecture'
        ),
        emoji(
          '⚡ Highly skilled software engineer with expertise in Redux and Context for efficient state management'
        ),
        emoji(
          '⚡ Ensuring optimal user experiences through CSS accessibility compliance'
        ),
        emoji(
          '⚡ Knowing in deploying applications on AWS, utilizing its services such as EC2'
        ),
        emoji(
          '⚡ A self-motivated and responsible individual with excellent communication skills and the ability to take charge and lead discussions when needed'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
  ],
};

// export const SkillBars: SkillBarsType[] = [
//   {
//     Stack: 'Frontend/Design', //Insert stack or technology you have experience in
//     progressPercentage: '90', //Insert relative proficiency in percentage
//   },
//   {
//     Stack: 'Backend',
//     progressPercentage: '70',
//   },
//   {
//     Stack: 'Programming',
//     progressPercentage: '60',
//   },
// ];

// export const educationInfo: EducationType[] = [
//   {
//     schoolName: 'Harvard University',
//     subHeader: 'Master of Science in Computer Science',
//     duration: 'September 2017 - April 2019',
//     desc: 'Participated in the research of XXX and published 3 papers.',
//     grade: 'Grade A',
//     descBullets: [
//       'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//     ],
//   },
// ];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'Focus Camera',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Feb 2022 – Present',
    desc: 'Developed an e-commerce website utilizing modern technologies such as React, Redux, and Node.js, resulting in a seamless shopping experience!.',
  },
  {
    role: 'Software Engineer',
    company: 'Ocho',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Feb 2020 – Jan 2022',
    desc: 'Developed and maintained a modern and user-friendly web application using React, JavaScript, HTML, CSS, Redux, Webpack, and Babel, ensuring compatibility across multiple browsers',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Frontend Software Developer',
    company: 'Teachable',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Apr 2018 - Jan 2020',
    desc: 'Teachable helps creators engage their online audiences and get paid on their own terms with courses, coaching, and downloadable content.',
  },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  {
    name: 'Waggle',
    desc: 'A social media platform to help dog owners find like-minded dogs.',
    github: 'github.com/Hidden-In-The-Leaves/waggl',
  },
  // {
  //   name: 'AtlasMart',
  //   desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
  //   github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  // },
  // {
  //   name: 'Technota (Forum)',
  //   desc: 'Get hands-on experience in technical skills with Technota',
  //   github: 'https://github.com/1hanzla100/django-react-forum',
  // },
  // {
  //   name: 'Shopaza (Ecommerce)',
  //   desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
  //   github: 'https://github.com/1hanzla100/Django-ecommerce',
  // },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Alex Huang',
  description: 'A passionate Full Stack Web Developer .',
  author: 'Alex Huang',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: ['Portfolio', 'Alex Huang Portfolio'],
};
