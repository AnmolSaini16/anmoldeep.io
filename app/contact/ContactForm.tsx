"use client";

import toast from "react-hot-toast";
import { useRef, useState } from "react";

import { sendEmail } from "@/lib/action";
import { Icons } from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const sendEmailPromise = async () => {
      setLoading(true);
      try {
        const { error } = await sendEmail(formData);
        if (error) {
          throw new Error();
        }
        formRef.current?.reset();
      } finally {
        setLoading(false);
      }
    };

    toast.promise(sendEmailPromise(), {
      loading: "Sending message...",
      error: "Something went wrong",
      success: "Message sent successfully!",
    });
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit} ref={formRef}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-3">
          <label
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            id="name"
            name="senderName"
            type="text"
            required
            maxLength={100}
            placeholder="John Doe"
            disabled={loading}
            className="focus-visible:ring-primary bg-secondary transition-colors"
          />
        </div>

        <div className="grid gap-3">
          <label
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            id="email"
            name="senderEmail"
            type="email"
            required
            maxLength={100}
            placeholder="john@example.com"
            disabled={loading}
            className="focus-visible:ring-primary bg-secondary transition-colors"
          />
        </div>
      </div>

      <div className="grid gap-3">
        <label
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="message"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="senderMessage"
          placeholder="Your message here..."
          required
          maxLength={5000}
          disabled={loading}
          className="focus-visible:ring-primary bg-secondary min-h-[150px] resize-y transition-colors"
        />
        <p className="text-muted-foreground text-xs">Maximum 5000 characters</p>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="group bg-primary hover:bg-primary/90 text-primary-foreground inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
      >
        Let's talk
        <Icons.send className="ml-2 size-4 transition-transform duration-200 sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
