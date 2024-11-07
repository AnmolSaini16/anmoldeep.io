import { Metadata } from "next";

import PageShell from "@/components/PageHeader";
import ContactForm from "./ContactForm";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <Shell className="max-w-[700px]">
      <PageShell
        heading="Contact"
        subHeading="Got questions, feedback, or just want to say hello? I'd love to hear from you!"
      >
        <ContactForm />
      </PageShell>
    </Shell>
  );
}
