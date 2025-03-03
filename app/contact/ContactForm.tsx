"use client";

import toast from "react-hot-toast";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/action";
import { Icons } from "@/components/Icons";

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
      loading: "Sending message...",
      error: "Something went wrong",
      success: "Message sent successfully!",
    });
  };

  return (
    <Card className="border-dashed">
      <CardContent className="mt-4">
        <form className="grid gap-6" onSubmit={handleSubmit} ref={formRef}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="senderName"
                type="text"
                required
                maxLength={100}
                placeholder="John Doe"
                disabled={loading}
                className="transition-colors focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="senderEmail"
                type="email"
                required
                maxLength={100}
                placeholder="john@example.com"
                disabled={loading}
                className="transition-colors focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="senderMessage"
              placeholder="Your message here..."
              required
              maxLength={5000}
              disabled={loading}
              className="min-h-[150px] resize-y transition-colors focus-visible:ring-primary"
            />
            <p className="text-xs text-muted-foreground">
              Maximum 5000 characters
            </p>
          </div>

          <Button className="group" disabled={loading} type="submit" size="lg">
            Let's talk
            <Icons.send className="ml-2 size-4 transition-transform duration-200 sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
