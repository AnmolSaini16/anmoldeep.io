import { Metadata } from "next";

import {
  PageSection,
  PageContent,
  PageDescription,
  PageHeading,
} from "@/components/section/PageSection";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got questions, feedback, or just want to say hello? I'd love to hear from you!",
};

export default function Contact() {
  return (
    <section>
      <PageSection>
        <PageHeading>Get in touch 🤙</PageHeading>
        <PageDescription>
          Have a question or want to work together? I'd love to hear from you.
        </PageDescription>
        <PageContent>
          <ContactForm />
        </PageContent>
      </PageSection>
    </section>
  );
}
