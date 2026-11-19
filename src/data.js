// =====================================================================
//  Saari details yahin se aati hain. Kuch badalna ho to sirf is file me badlo.
//  Photos: public/images/ me daalo (hero.jpg, g1.jpg ...)
// =====================================================================

export const profile = {
  name: "Ankit Tiwari",
  firstName: "Ankit",
  lastName: "Tiwari",
  tagline: "Mr. Perfect | Software Developer | Full Stack | AI Developer",
  heroLine:
    "I build scalable, intelligent applications: production React dashboards, MERN stack products and AI-powered features.",
  photo: "/images/ankit.jpeg",
  email: "ankittiwari285202@gmail.com",
  phone: "+91 90052 27425",
  location: "Noida, Uttar Pradesh, India",
  availability: "Open to work",
  preferredRoles: "Full Stack · Frontend · AI",
  resumeUrl: "/Ankit_Tiwari_Resume.pdf", // resume PDF ko public/ folder me isi naam se rakho
};

export const stats = [
  { value: "1+", label: "Years of experience" },
  { value: "50+", label: "REST APIs integrated" },
  { value: "200+", label: "LeetCode problems solved" },
];

export const about = [
  "I am Ankit Tiwari, a Full Stack Developer and aspiring AI Developer from Noida. I enjoy building scalable, user-friendly and intelligent applications. At Delhi Academy of Medical Sciences (DAMS) I work on production-level React.js applications, including the eMedicoz admin dashboard used to manage courses, users, quizzes, reports, payments and academic content.",
  "I am currently building TeamFlow, a Project Management SaaS application, and exploring Python, FastAPI, Generative AI and LLMs. I care about clean code, Low-Level Design, scalable architecture and finding practical ways to bring AI into real-world applications.",
  "I practice Data Structures and Algorithms to keep my problem-solving sharp, and my goal is to grow into a Full Stack AI Engineer. I am open to frontend, full stack and AI-focused roles, and to collaborations.",
];

export const facts = [
  { label: "Education", value: "B.Tech, Information Technology" },
  { label: "Languages", value: "Hindi, English" },
  { label: "Based in", value: "Noida, India" },
  { label: "Availability", value: "Open to opportunities" },
  { label: "Preferred roles", value: "Full Stack · Frontend · AI" },
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "React Hooks", "JSX", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Ant Design", "Responsive Design"] },
  { title: "State management", items: ["Redux Toolkit", "Context API"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "Socket.IO"] },
  { title: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "Software design", items: ["Low-Level Design (LLD)", "OOP", "Design Patterns", "SOLID Principles", "REST API Design", "Scalable architecture"] },
  { title: "AI and Generative AI", items: ["LLMs", "Generative AI", "Prompt Engineering", "RAG", "AI API integration", "Embeddings and vector databases (learning)"] },
  { title: "Tools", items: ["Git", "GitHub", "Axios", "Postman", "VS Code", "Vite", "Webpack", "npm / Yarn", "DOMPurify"] },
  { title: "Practices", items: ["Agile / Scrum", "Cross-browser compatibility", "Code review", "Debugging", "Problem solving"] },
];

export const experience = [
  {
    period: "Nov 2025 - Present",
    role: "Full-Stack Developer",
    company: "Delhi Academy of Medical Sciences (DAMS), Noida",
    points: [
      "Developed and maintained a production React.js admin dashboard for courses, users, quizzes, reports, notifications, payments and academic content, improving admin task completion time by 30%.",
      "Built reusable components, dynamic forms, search, filters, pagination, role-based access and dashboard modules with React.js and Ant Design.",
      "Integrated 50+ REST APIs using Axios and Redux Toolkit.",
      "Implemented Socket.IO real-time features for live updates and notifications.",
      "Resolved 20+ SonarQube security issues by replacing unsafe HTML rendering with reusable sanitized components.",
      "Optimized rendering with React.memo, useMemo and useCallback, cutting unnecessary re-renders and fixing production bugs.",
      "Worked with cross-functional teams in Agile/Scrum to ship sprint-based releases on schedule.",
    ],
  },
  {
    period: "Jul 2024 - Jun 2025",
    role: "Full-Stack Developer",
    company: "DUCAT, Noida",
    points: [
      "Built full-stack applications with MongoDB, Express.js, React.js and Node.js, with responsive, cross-browser compatible interfaces.",
      "Developed REST APIs, CRUD operations, secure authentication and reusable UI components.",
      "Collaborated on 3+ team projects, including debugging, unit-level testing and code reviews.",
    ],
  },
];

export const projects = [
  {
    title: "TeamFlow",
    tag: "Project Management SaaS · In development",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    detail:
      "A full-stack project management platform where teams organize projects, manage tasks and collaborate from one workspace.",
    impact: "Planned features: secure authentication, role-based permissions, project workflows and real-time collaboration.",
    link: "",
    github: "",
  },
  {
    title: "eMedicoz Admin Dashboard",
    tag: "Production application",
    stack: ["React.js", "Redux Toolkit", "Ant Design", "REST APIs", "Socket.IO"],
    detail:
      "Enterprise admin dashboard for a medical learning platform: Course Management, Reports, Notifications, Recordings, Transactions, Refunds and Content Management.",
    impact: "Integrated 50+ APIs, improved admin task completion by 30%, and resolved 20+ security findings.",
    link: "",
    github: "",
  },
  {
    title: "Resume Builder",
    tag: "Web application",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    detail:
      "A clean resume builder with structured, editable sections for personal details, education, skills, experience and projects.",
    impact: "Built with reusable components and a print-friendly, mobile-responsive interface.",
    link: "",
    github: "",
  },
  {
    title: "E-Commerce Website",
    tag: "Full stack application",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    detail:
      "An online shopping app with dynamic product listing and details, backend API integration and CRUD operations.",
    impact: "Implemented a structured full-stack architecture with reusable React components.",
    link: "",
    github: "",
  },
  {
    title: "Google Gemini Clone",
    tag: "Personal project",
    stack: ["React.js", "API integration"],
    detail:
      "A Gemini-inspired AI chat interface with prompt handling, reusable components and chat-style interactions.",
    impact: "Practiced API integration, loading/error states and modern conversational UI patterns.",
    link: "",
    github: "",
  },
  {
    title: "Personal Portfolio Website",
    tag: "Personal project",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    detail:
      "A responsive portfolio showcasing my skills, experience, projects and contact details.",
    impact: "Designed for desktop and mobile with focused recruiter-friendly information architecture.",
    link: "",
    github: "",
  },
];

export const achievements = [
  { year: "Cert.", title: "Full-Stack Development, DUCAT", detail: "Completed professional full-stack certification." },
  { year: "DSA", title: "200+ LeetCode problems solved", detail: "Data Structures and Algorithms practice." },
];

export const education = {
  degree: "Bachelor of Technology, Information Technology",
  school: "Uma Nath Singh Institute of Engineering & Technology",
  period: "2020 - 2024",
  score: "CGPA 7.9",
};

// Photos: public/images/ me daalo. Khali rakhoge to Gallery section hide rahega.
export const gallery = [
  // { src: "/images/g1.jpg", alt: "Ankit Tiwari portrait" },
];

export const videos = [];

export const socials = [
  { name: "Instagram", url: "https://www.instagram.com/mr_ankit_tiwari28?srtk=NGNza2w4endzZWlz" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mrankittiwari28/" },
  { name: "GitHub", url: "https://github.com/mrankittiwari28" },
];
