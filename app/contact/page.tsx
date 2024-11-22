import { Metadata } from "next";

import PageSection from "@/components/PageSection";
import ContactForm from "./ContactForm";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <Shell className="max-w-[700px]">
      <PageSection
        heading="Contact"
        subHeading="Got questions, feedback, or just want to say hello? I'd love to hear from you!"
      >
        <ContactForm />
      </PageSection>
    </Shell>
  );
}
