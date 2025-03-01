import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

import optymLogo from "@/public/work-place/optym.jpeg";
import easyPoll from "@/public/project/easy-poll.png";
import myWallet from "@/public/project/my-wallet.png";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/AnmolSaini16",
    icon: FiGithub,
  },
  {
    label: "Twitter",
    href: "https://x.com/sainianmol16",
    icon: FiTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anmol_saini16/",
    icon: FiInstagram,
  },

  {
    label: "Mail",
    href: "mailto:sainianmol16@gmail.com",
    icon: FiMail,
  },
];

export const workplaces = [
  {
    title: "Senior Software Engineer",
    company: "Optym",
    time: "January, 2025 — Present",
    imageSrc: optymLogo,
    link: "https://optym.com/",
    location: "Bengaluru, India",
    description:
      "Leading the design and development of cutting-edge features for HaulSuite products, driving innovation and efficiency for LTL carriers.",
  },
  {
    title: "Software Engineer",
    company: "Optym",
    time: "July, 2022 — January, 2025",
    imageSrc: optymLogo,
    location: "Bengaluru, India",
    link: "https://optym.com/",
    description:
      "Designed and developed key features for HaulSuite products at Optym for leading LTL carriers in the United States. Worked across the stack using React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud technologies to deliver high-performance and scalable solutions.",
  },
  {
    title: "Software Engineer Intern",
    company: "Optym",
    time: "May, 2022 — July, 2022",
    imageSrc: optymLogo,
    location: "Bengaluru, India",
    link: "https://optym.com/",
    description:
      "Responsible for development of UI and front-end features, using JavaScript, TypeScript, React and Next.js.",
  },
];

export const projects = [
  {
    title: "Easy Poll",
    description: "Create instant, real-time polls for free!",
    imageSrc: easyPoll,
    link: "https://github.com/AnmolSaini16/easy-poll",
  },
  {
    title: "My Wallet",
    description: "Manage you Expenses.",
    imageSrc: myWallet,
    link: "https://github.com/AnmolSaini16/my-wallet",
  },
];

export const siteConfig = {
  name: "Anmoldeep Singh",
  description:
    "I am a Software Engineer specializing in web. I love to Build Things!",
  url: "https://anmoldeep.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anmoldeep.vercel.app",
    title: "Anmoldeep Singh",
    description:
      "I am a Software Engineer specializing in web. I love to Build Things!",
    siteName: "Anmoldeep Singh",
  },
};
