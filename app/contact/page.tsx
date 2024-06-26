import { Metadata } from "next";

import PageShell from "@/components/shell/PageShell";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <PageShell
      heading="Contact"
      subHeading="Got questions, feedback, or just want to say hello? I'd love to hear from you!"
    >
      <ContactForm />
    </PageShell>
  );
}
