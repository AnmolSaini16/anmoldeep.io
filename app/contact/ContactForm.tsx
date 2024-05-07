"use client";

import toast from "react-hot-toast";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/action";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmailPromise = async (formData: FormData) => {
    setLoading(true);

    try {
      const { error } = await sendEmail(formData);

      if (error) {
        throw new Error(error.message);
      } else {
        formRef.current?.reset();
      }
    } catch (error) {
      console.error(error);
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    toast.promise(sendEmailPromise(formData), {
      loading: "Sending...",
      error: "Something wrent wrong",
      success: "Message sent successfully!",
    });
  };

  return (
    <Card className="max-w-[400px] mx-auto">
      <CardContent>
        <form
          className="mt-4 grid grid-cols-1 auto-rows-auto gap-4"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="senderEmail"
              type="email"
              required
              maxLength={100}
              placeholder="Your email"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="senderName"
              type="name"
              required
              maxLength={100}
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="senderMessage"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </div>
          <Button className="w-fit mt-4" disabled={loading}>
            Send message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
