import { nanoid } from 'nanoid';
import { FaCss3, FaDatabase, FaElementor, FaHtml5,  FaJs, FaLeaf, FaNodeJs, FaReact, FaTenge,} from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text:'HOME'},
  { id: nanoid(), href: '#skills', text: 'SKILLS' },
  { id: nanoid(), href: '#education', text: 'EDUCATION' },
  { id: nanoid(), href: '#about', text: 'ABOUT' },
  
  
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },

  {
    id: nanoid(),
    title: 'CSS',
    icon: <FaCss3 className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in CSS, developing layout, appearance, and formatting of web pages. ',
  },

  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in node, developing ways to streamline your workflow, build applications, and solve specific challenges.',
  },
  {
    id: nanoid(),
    title: 'Express',
    icon: <FaElementor className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in Express, simplifies the process of creating robust and scalable server-side applications by providing a set of features and utilities.',
  },

  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <FaLeaf className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'MySQL',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <FaTenge className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

];

export const projects = [
  {
    id: nanoid(),
    img: 'https://media.licdn.com/dms/image/C4D12AQEWHzMrlFh0nQ/article-cover_image-shrink_600_2000/0/1651474032780?e=2147483647&v=beta&t=z28GT8q3CjQt7muAhWKoCN75JFU5TUItx7SAYsqw6F0',
    title: 'Brain Tumor Detection & Stage Classification',
    text: 'Brain tumor detection and stage classification using Convolutional Neural Networks (CNNs) involve the application of deep learning techniques to analyze medical imaging data, such as magnetic resonance images (MRI) of the brain.',
  },
  {
    id: nanoid(),
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*cVhM1Iwv5ZyIRAxdudqN7Q.jpeg',
    title: 'LSB Image Steganography',
    text: 'LSB (Least Significant Bit) image steganography can be combined with AES (Advanced Encryption Standard) encryption to enhance the security of the hidden information.',
  },
  {
    id: nanoid(),
    img: 'https://c0.wallpaperflare.com/preview/157/733/255/shopping-online-ecommerce-consumer.jpg',
    title: 'E-commerce Web Application',
    text: 'This project is an E-commerce web application using React involves building a dynamic and responsive user interface that allows users(buyers) to browse products, add items to their cart, and complete the checkout process. Also users(sellers) can add their products in the web application..',
  },
];

export const education = [
  {
    id: nanoid(),
    img: 'https://img.theweek.in/content/dam/week/education/admissions/images/2019/10/29/apj-aktu-wiki.jpg',
    title: 'JAWAHARLAL COLLEGE OF ENGINEERING & TECHNOLOGY',
    text: 'Bachelor of Technology',
    branch:'Computer Science & Engineering',
    year:'2019-2023',
    cgpa:'7.68'
  },
  {
    id: nanoid(),
    img: 'https://yt3.googleusercontent.com/ytc/AIf8zZSccQjPQnmnZ6zrr4lfmNkpdqyf91Cviv1LDKGt7g=s900-c-k-c0x00ffffff-no-rj',
    title: 'SREENARAYAN TRUST CENTRAL SCHOOL',
    text: 'Higher Secondary Education',
    branch:'Science',
    year:'2017-2019',
    cgpa:'79.8%'
  },
  {
    id: nanoid(),
    img: 'https://media.licdn.com/dms/image/C560BAQFMJJYl_-cnNg/company-logo_200_200/0/1630636119988?e=2147483647&v=beta&t=K_zaI-1uhaMDgunHkTSXtxh1rSdPIWl-ejruEDCOHIw',
    title: 'CARMEL CMI SCHOOL',
    text: 'High School Education',
    // branch:'Computer Science & Engineering',
    year:'2016-2017',
    cgpa:'86%'
  },
];
