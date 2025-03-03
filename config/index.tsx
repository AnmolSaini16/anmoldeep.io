import optymLogo from "@/public/work-place/optym.jpeg";
import easyPoll from "@/public/project/easy-poll.png";
import myWallet from "@/public/project/my-wallet.png";

import { Icons } from "@/components/Icons";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/",
    icon: Icons.linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/AnmolSaini16",
    icon: Icons.github,
  },
  {
    label: "Twitter",
    href: "https://x.com/sainianmol16",
    icon: Icons.twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anmol_saini16/",
    icon: Icons.instagram,
  },

  {
    label: "Mail",
    href: "mailto:sainianmol16@gmail.com",
    icon: Icons.mail,
  },
];

export const workplaces = [
  {
    title: "Senior Software Engineer",
    company: "Optym",
    time: "Jan, 2025 — Present",
    imageSrc: optymLogo,
    link: "https://optym.com/",
    location: "Bengaluru, India",
    description:
      "Leading the design and development of cutting-edge features for HaulSuite products, driving innovation and efficiency for LTL carriers.",
  },
  {
    title: "Software Engineer",
    company: "Optym",
    time: "Jul, 2022 — Jan, 2025",
    imageSrc: optymLogo,
    location: "Bengaluru, India",
    link: "https://optym.com/",
    description:
      "Designed and developed key features for HaulSuite products at Optym for leading LTL carriers in the United States. Worked across the stack using React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud technologies to deliver high-performance and scalable solutions.",
  },
  {
    title: "Software Engineer Intern",
    company: "Optym",
    time: "May, 2022 — Jul, 2022",
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
    github: "https://github.com/AnmolSaini16/easy-poll",
    demo: "https://easy-poll-time.vercel.app/",
  },
  {
    title: "My Wallet",
    description: "Manage you Expenses.",
    imageSrc: myWallet,
    github: "https://github.com/AnmolSaini16/my-wallet",
    demo: "https://my-wallet-teal.vercel.app/",
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
