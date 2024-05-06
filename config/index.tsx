import { Linkedin, Mail } from "lucide-react";

import optymLogo from "@/public/work-place/optym.jpeg";
import easyPoll from "@/public/project/easy-poll.png";
import myWallet from "@/public/project/my-wallet.png";
import movieBox from "@/public/project/movie-box.png";
import next14InfiniteScroll from "@/public/project/next-infinite.png";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    label: "Github",
    href: "https://github.com/AnmolSaini16",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anmol_saini16/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Contact Me",
    href: "mailto:sainianmol16@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
];

export const workplaces = [
  {
    title: "Software Enginner",
    company: "Optym",
    time: "July, 2022 - Present",
    imageSrc: optymLogo,
    link: "https://optym.com/",
  },
  {
    title: "Software Engineer Intern",
    company: "Optym",
    time: "May, 2022 - July, 2022",
    imageSrc: optymLogo,
    link: "https://optym.com/",
  },
];

export const projects = [
  {
    title: "Easy Poll",
    description: "Create instant, real-time polls for free!",
    imageSrc: easyPoll,
    tags: [
      "Next.Js",
      "Tailwind",
      "Shadcn",
      "React Query",
      "Supabase",
      "PostgreSQL",
    ],
    link: "https://github.com/AnmolSaini16/easy-poll",
  },
  {
    title: "My Wallet",
    description: "Manage you Expenses.",
    imageSrc: myWallet,
    tags: [
      "Next.Js",
      "Tailwind",
      "Shadcn",
      "React Query",
      "Nest.JS",
      "Node.JS",
      "MongoDB",
      "MongoDB Atlas",
      "Prisma",
    ],
    link: "https://github.com/AnmolSaini16/my-wallet",
  },
  {
    title: "MovieBox",
    description: "All the information related to movies. Minimalistic UI.",
    imageSrc: movieBox,
    tags: [
      "Next.Js",
      "Tailwind",
      "React Query",
      "MUI",
      "Node.JS",
      "Express",
      "MongoDB",
      "MongoDB Atlas",
      "Prisma",
    ],
    link: "https://github.com/AnmolSaini16/movie-box",
  },
  {
    title: "Next Js Infinite Scroll",
    description:
      "Infinite Scroll implementation with Next Server Components and React Query.",
    imageSrc: next14InfiniteScroll,
    tags: ["Next.Js", "Tailwind", "Server Compoenents", "React Query"],
    link: "https://github.com/AnmolSaini16/next-14-infinite-scroll",
  },
];

export const blogs = [
  {
    title:
      "Why I choose Supabase as a backend service for my Next Js full stack Project",
    link: "https://dev.to/anmolsaini16/building-a-full-stack-project-with-supabase-and-next-js-5ao8",
    date: "Apr 26, 2024",
  },
];

export const siteConfig = {
  name: "Anmoldeep Singh",
  description:
    "I am a Software Engineer specializing in web. I love to Build Things!",
  url: "https://anmoldeep.vercel.app/",
};
