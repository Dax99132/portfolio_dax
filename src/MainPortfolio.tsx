import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  GithubIcon,
  LinkedinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ExternalLinkIcon
} from "./components/Icons";

import profileImage from './assets/Mypic.svg';
import arrowRight from './assets/Rightarrow.svg';
import arrowLeft from './assets/Leftarrow.svg';

// --- DATA FROM RESUME ---
const designsData = [
  {
    title: 'Rent Ease – Mobile App UI',
    tech: ['Figma', 'UI/UX', 'Mobile App Design'],
    description: [
      'A mobile app design concept for renting/selling products with category-based navigation and clean UI.',
    ],
    link: '/designs/rent-ease', // This will be your future detail page
  },
  {
    title: 'Cignifi – Mobile Authentication UI',
    tech: ['Figma', 'UI/UX'],
    description: [
      'Splash screen, login, and signup flow focusing on modern, intuitive mobile authentication.',
    ],
    link: '/designs/cignifi',
  },
  {
    title: 'ERP Mobile UI Concept',
    tech: ['Figma', 'UI/UX', 'Dashboard Design'],
    description: [
      'Business-oriented ERP system design with clean login and dashboard screens for mobile.',
    ],
    link: '/designs/erp',
  },
  {
    title: 'Cropify – Web Platform UI',
    tech: ['Figma', 'UI/UX', 'Web Design'],
    description: [
      'A farmer-buyer platform with dashboard, product management, and direct trade features.',
    ],
    link: '/designs/cropify',
  },
  {
    title: 'Quizze – Fun Interactive Quiz UI',
    tech: ['Figma', 'UI/UX'],
    description: [
      'Playful and engaging quiz app design for students and creators with bright, intuitive layout.',
    ],
    link: '/designs/quizze',
  },
   {
    title: 'Website Designs',
    tech: ['Figma', 'UI/UX'],
    description: [
      'A website Designs for business like GYM, FITNESS TRACKING, AIRPORT TIMINGS, SHOES STORE ',
    ],
    link: '/designs/Webdesign', // This will be your future detail page
  },
   {
    title: 'Website/Prototype Designs',
    tech: ['Figma', 'UI/UX'],
    description: [
      'A website Designs as a snapshot where it has prototype',
    ],
    link: '/designs/Prototype', // This will be your future detail page
  },
];



const educationData = [
  { degree: 'Master of Computer Applications (MCA)', school: 'GLS University, Ahmedabad', years: '2024 - Present' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'GLS University, Ahmedabad', years: '2021 - 2024' },
  { degree: 'Class 12 - Commerce Stream', school: 'GHSEB, Ahmedabad', years: '2019 - 2021' },
  { degree: 'Class 10', school: 'GSEB, Ahmedabad', years: '2018 - 2019' },
];

const experienceData = [
  {
    role: 'UI/UX Designer & Video Editor',
    company: 'Collab Softech Pvt. Ltd.',
    dates: 'July 2024 – November 2024',
    description: [
      'Designed clean and accessible UI screens using Figma, adhering to modern design standards.',
      'Coded responsive front-end components using HTML, CSS, and JavaScript.',
      'Produced promotional videos and reels to boost brand engagement on social media.',
      'Created content for EQ Café & Bakehouse (Australia) to enhance digital branding.',
    ],
  },
  {
    role: 'Team Leader',
    company: 'Final Year Project: Rent Ease',
    dates: 'April 2023 - April 2024',
    description: [
      'Led a team of 3 in successfully building a feature-rich Android application for the BCA Final Year Project.',
    ],
  },
  {
    role: 'Video Editor',
    company: 'Reel-Making Competition – Cultural Fest',
    dates: 'January 2024',
    description: [
      'Contributed as the video editor in a 5-member team that won 2nd place and a cash prize in the university-level event.',
    ],
  },
];

const achievementsData = [
  "Secured 2nd place in a reel-making competition at GLS University's National Colloquium on 'Women and Cultural Diversity' (2025)."
];

const otherActivitiesData = [
  'Contributed as a team member in MemeVerse at Prashasti 2025, hosted by AIDTM (Adani Institute of Digital Technology Management).',
  'Participated in the Reel Making Competition at Mediotsav 2025, organized by NIMCJ, Gujarat University.',
  'Served as the Designer of the TechBytes – Issue 34 (August 2025) MCA departmental magazine.',
];

const projectsData = [
  {
    title: 'Quizze - Quiz Management Platform',
    tech: ['Figma', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap'],
    description: [
      'Designed and implemented a responsive frontend in React.js with Bootstrap based on custom Figma wireframes.',
      'Developed a secure MERN-based platform with role-based login and quiz creation support for multiple formats.',
      'Integrated a dynamic question bank with subject-wise filtering, editing, and quiz preview features.',
    ],
    link: 'https://github.com/Dax99132/Quizze_Quiz-Management-Platform',
  },
  {
    title: 'Rent Ease - Rental/Selling Android App',
    tech: ['Java', 'XML', 'Firebase Realtime DB', 'Firebase Auth', 'Android Studio'],
    description: [
      'Built an Android app to rent/sell products with category-wise listing and real-time browsing using Firebase.',
      'Implemented user authentication, product upload forms, and in-app filtering with XML-based UI.',
      'Enabled platform-fee-based SMS system to deliver buyer contact info post-payment securely.',
    ],
    link: 'https://github.com/Dax99132/RentEase_Rental-Selling-Android-App',
  },
  {
    title: 'Amazon Clone (Frontend)',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    description: [
      'Cloned Amazon homepage with responsive layout using Bootstrap and custom CSS styling.',
      'Developed interactive login and form validation features using vanilla JavaScript.',
      'Focused on DOM manipulation, visual UI structure, and grid-based product listing.',
    ],
    link: 'https://github.com/Dax99132/Amazon-Clone',
  },
];

const skillsData = [
  { category: 'Languages', skills: 'HTML, CSS, JavaScript, Java, SQL' },
  { category: 'Frameworks', skills: 'React.js, Tailwind CSS, Bootstrap' },
  { category: 'Libraries/Packages', skills: 'NumPy, Pandas, Matplotlib, Scikit-learn, Seaborn' },
  { category: 'Databases', skills: 'MongoDB, MySQL, Firebase' },
  { category: 'Developer Tools', skills: 'Figma, Canva, Git, GitHub, VS Code, Linux Shell, Jira' },
  { category: 'Soft Skills', skills: 'Empathy, Creativity, Team Collaboration, Leadership, Problem Solving, Communication, Time Management' },
  { category: 'Areas of Interest', skills: 'Cloud-based Systems, Front-end Development, UI/UX, Customer Support Tools, Database Management, Automation' },
];

const contactData = [
  { type: 'Email', value: 'Daxgosalia12@gmail.com', href: 'mailto:Daxgosalia12@gmail.com', icon: EnvelopeIcon },
  { type: 'LinkedIn', value: 'linkedin.com/in/dax-gosalia-775b5a25a', href: 'https://linkedin.com/in/dax-gosalia-775b5a25a', icon: LinkedinIcon },
  { type: 'GitHub', value: 'github.com/Dax99132', href: 'https://github.com/Dax99132', icon: GithubIcon },
  { type: 'Phone', value: '+91-7984539322', href: 'tel:+917984539322', icon: PhoneIcon },
];

// --- COMPONENTS ---
const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </section>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Education", "Experience", "Projects", "Designs", "Skills", "Contact"];
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm border border-black rounded-full shadow-md px-4 py-2">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold text-lg">DG</div>
            <div>
              <div className="font-bold text-sm">Dax Gosalia</div>
              <div className="text-xs text-gray-600">UI/UX Designer &amp; Frontend Developer</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-black hover:text-gray-600 text-sm font-medium">
                {link}
              </a>
            ))}
          </nav>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden mt-2 bg-white border border-black rounded-2xl p-4 space-y-2 shadow-lg">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block text-black hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100">
                {link}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

/**
 * HERO
 * - Single source of truth for the profile image.
 * - Left: buttons, Center: image, Right: short description (md+).
 * - On mobile, stacks: title, image, buttons, text.
 */
const Hero: React.FC = () => (
  <section className="min-h-[70vh] flex flex-col items-center pt-20 md:pt-28 pb-10 md:pb-0 relative">
    <div className="container mx-auto px-6 w-full max-w-6xl">

      {/* Name row: smaller and stacked on mobile */}
        <div className="flex items-center md:items-end justify-center gap-4 md:gap-10 mb-10 md:mb-0 md:mt-10 lg:mb-[-2px]">
  <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter truncate max-w-full"  style={{ wordSpacing: '12px' /* Adjust gap size as needed */ }}>
    DAX GOSALIA
  </h1>
</div>
      {/* Button, image, and text grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 md:gap-8">
        
        {/* Buttons: centered on mobile, aligned left on desktop */}
        <div className="flex justify-center md:justify-start gap-4 order-2 md:order-1 mt-0 md:mt-80 md:ml-32 md:-mr-20">
  <a href="#projects" className="px-6 py-3 border border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
    SEE WORK
  </a>
  <a href="#contact" className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition">
    HIRE ME
  </a>
</div>
        {/* Profile Image: centered always, with responsive size */}
        <div className="order-1 md:order-2 flex justify-center mb-4 md:mb-[-60px] lg:mb-[-80px]">
  <div className="relative rounded-3xl overflow-visible
                  shadow-lg md:shadow-none
                  w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-[22rem]
                  lg:w-[24rem] lg:h-[28rem] xl:w-[28rem] xl:h-[32rem]">
    <img
      src={profileImage}
      alt="Dax Gosalia"
      className="w-full h-full object-contain rounded-3xl select-none pointer-events-none"
      draggable={false}
    />
    {/* Left Arrow */}
    <img
      src={arrowLeft}
      alt="Arrow Left"
      className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-70 pointer-events-none z-20"
    />
    {/* Right Arrow */}
    <img
      src={arrowRight}
      alt="Arrow Right"
      className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-70 pointer-events-none z-20"
    />
  </div>
</div>


        {/* Text: centered on mobile, aligned right on desktop */}
        <div className="order-3 flex justify-center md:justify-end mt-6 md:mt-60">
          <p className="max-w-sm text-center md:text-justify text-sm md:text-base text-gray-800 px-4 md:px-0">
            I design and build digital products — focusing on UI, branding, and frontend development with a love for clean, user-friendly experiences.
          </p>
        </div>

      </div>
    </div>
  </section>
);



const About: React.FC = () => (
  <section id="about" className="relative pt-14 md:pt-0 -mt-20 md:-mt-32 lg:-mt-0 xl:-mt-1">
  <div className="container mx-auto px-6 w-full max-w-6xl">
    <div className="bg-black text-white rounded-3xl border-2 border-black px-6 pt-4 pb-10 md:px-10 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold font-bai-jamjuree mb-6 pt-2">About</h2>
      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
        To contribute to innovative digital solutions by leveraging my skills in UI/UX, frontend development, and creative content creation.
        I am highly adaptable and always eager to learn new programming languages and technologies.
        With a strong interest in cloud-based platforms and AI-driven development, I aim to grow in dynamic, forward-thinking environments.
      </p>
    </div>
  </div>
</section>

);

const Education: React.FC = () => (
  <div id="education" className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-bold text-center text-black mb-12 font-bai-jamjuree">Education</h2>
    <div className="border-l-2 border-black/50 pl-8 space-y-12 relative">
      <div className="absolute top-0 -left-px w-px h-full bg-black"></div>
      {educationData.map((edu, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[37px] top-1 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
          <p className="text-gray-500 text-sm mb-1">{edu.years}</p>
          <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
          <p className="text-gray-700">{edu.school}</p>
        </div>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => (
  <div id="experience" className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-bold text-center text-black mb-12 font-bai-jamjuree">Experience</h2>
    <div className="border-l-2 border-black/50 pl-8 space-y-12 relative">
      <div className="absolute top-0 -left-px w-px h-full bg-black"></div>
      {experienceData.map((exp, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[37px] top-1 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
          <p className="text-gray-500 text-sm mb-1">{exp.dates}</p>
          <h3 className="text-xl font-bold text-black">{exp.role}</h3>
          <p className="text-md font-semibold text-gray-800 mb-2">{exp.company}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
            {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const AchievementsAndActivities: React.FC = () => (
  <div id="activities" className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-bold text-center text-black mb-16 font-bai-jamjuree">Achievements & Activities</h2>
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
      <div>
        <h3 className="text-2xl font-bold text-black mb-6 font-bai-jamjuree border-b-2 border-black pb-2">Achievements</h3>
        <ul className="space-y-4">
          {achievementsData.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 text-xl mr-3 mt-1" role="img" aria-label="trophy">🏆</span>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-black mb-6 font-bai-jamjuree border-b-2 border-black pb-2">Other Activities</h3>
        <ul className="space-y-4">
          {otherActivitiesData.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 text-xl mr-3 mt-1" role="img" aria-label="sparkles">✨</span>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <div id="projects" className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-black mb-12 font-bai-jamjuree">Projects</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projectsData.map((project, i) => (
        <div key={i} className="bg-white border-2 border-black rounded-3xl p-6 flex flex-col transition-transform hover:scale-105 hover:shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold font-bai-jamjuree text-black pr-4">{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors duration-300 shrink-0">
              <GithubIcon className="w-7 h-7" />
            </a>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-sm text-gray-600">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map(t => <span key={t} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>)}
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            {project.description.map((desc, j) => <li key={j}>{desc}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Designs: React.FC = () => (
  <div id="designs" className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-black mb-12 font-bai-jamjuree">Designs</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {designsData.map((design, i) => (
       <Link
        key={i}
        to={design.link}
        className="bg-white border-2 border-black rounded-3xl p-6 flex flex-col transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold font-bai-jamjuree text-black pr-4">{design.title}</h3>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-sm text-gray-600">Tools:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {design.tech.map(t => (
                <span key={t} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            {design.description.map((desc, j) => <li key={j}>{desc}</li>)}
          </ul>
        </Link>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => (
  <div id="skills" className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-bold text-center text-black mb-16 font-bai-jamjuree">Skills</h2>
    <div className="space-y-8">
      {skillsData.map(category => (
        <div key={category.category} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-black mb-2 font-bai-jamjuree">{category.category}</h3>
          <p className="text-gray-700 leading-relaxed">{category.skills}</p>
        </div>
      ))}
    </div>
  </div>
);

const Contact: React.FC = () => (
  <div id="contact" className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-black mb-12 font-bai-jamjuree">Contact Me</h2>
    <div className="max-w-xl mx-auto space-y-4">
      {contactData.map((item) => (
        <a key={item.type} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center w-full p-4 bg-white border-2 border-black rounded-2xl transition-all duration-300 hover:bg-black hover:text-white group">
          <item.icon className="w-6 h-6 mr-4"/>
          <span className="font-semibold">{item.value}</span>
          <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-400 group-hover:text-white transition-colors duration-300"/>
        </a>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-10 mt-20 md:mt-32">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Dax99132" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300">
          <GithubIcon className="w-7 h-7" />
        </a>
        <a href="https://linkedin.com/in/dax-gosalia-775b5a25a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
          <LinkedinIcon className="w-7 h-7" />
        </a>
      </div>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Dax Gosalia. All Rights Reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen relative">
      <div className="absolute inset-0 bg-grid z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          {/* Keep About close to Hero so they appear connected */}
          <AnimatedSection className="pt-0 pb-16 md:pb-20"><About /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><Education /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><Experience /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><AchievementsAndActivities /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><Projects /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><Designs /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><Skills /></AnimatedSection>
          <AnimatedSection className="py-20 md:py-32"><Contact /></AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}
