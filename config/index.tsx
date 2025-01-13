import { Mail } from "lucide-react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import optymLogo from "@/public/work-place/optym.jpeg";
import easyPoll from "@/public/project/easy-poll.png";
import myWallet from "@/public/project/my-wallet.png";
import movieBox from "@/public/project/movie-box.png";
import next14InfiniteScroll from "@/public/project/next-infinite.png";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/AnmolSaini16",
    icon: FaGithub,
  },
  {
    label: "Twitter",
    href: "https://x.com/sainianmol16",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anmol_saini16/",
    icon: FaInstagram,
  },

  {
    label: "Mail",
    href: "mailto:sainianmol16@gmail.com",
    icon: Mail,
  },
];

export const workplaces = [
  {
    title: "Software Engineer",
    company: "Optym",
    time: "July, 2022 - Present",
    imageSrc: optymLogo,
    link: "https://optym.com/",
    description:
      "Designed and developed key features impacting major LTL clients in the USA, collaborating with cross-functional teams to deliver high-quality code. Optimized UI and backend to enhance performance, user experience, and business profitability using the latest technologies like JavaScript, TypeScript, React, Next, Node, Nest, PostgreSQL, Material UI, MobX, and Azure DevOps.",
  },
  {
    title: "Software Engineer Intern",
    company: "Optym",
    time: "May, 2022 - July, 2022",
    imageSrc: optymLogo,
    link: "https://optym.com/",
    description:
      "Responsible for development of UI and front-end features from scratch, using JavaScript, TypeScript, React, Next Js, Material UI.",
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
  // {
  //   title: "MovieBox",
  //   description: "All the information related to movies. Minimalistic UI.",
  //   imageSrc: movieBox,
  //   link: "https://github.com/AnmolSaini16/movie-box",
  // },
  // {
  //   title: "Next Js Infinite Scroll",
  //   description:
  //     "Infinite Scroll implementation with Next Server Components and React Query.",
  //   imageSrc: next14InfiniteScroll,
  //   link: "https://github.com/AnmolSaini16/next-14-infinite-scroll",
  // },
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
