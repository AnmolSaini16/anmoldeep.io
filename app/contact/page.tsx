"use client";

import { SendHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

import PageShell from "@/components/shell/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/action";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmailPromise = async (formData: FormData) => {
    setLoading(true);

    const { data, error } = await sendEmail(formData);

    if (error) {
      setLoading(false);
      console.error(error);
      throw new Error(error.message);
    }

    setLoading(false);
    formRef.current?.reset();
    return data;
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
    <PageShell
      heading="Contact me"
      subHeading="Got questions, feedback, or just want to say hello? I'd love to hear from you!"
    >
      <Card className="max-w-[450px] mx-auto">
        <CardContent>
          <form
            className="mt-4 grid grid-cols-1 gap-4"
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
              <Label htmlFor="message">Message*</Label>
              <Textarea
                id="message"
                className="flex-1"
                name="senderMessage"
                placeholder="Your message"
                required
                maxLength={5000}
              />
            </div>
            <Button className="w-fit mt-4" disabled={loading}>
              Send message <SendHorizontal className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageShell>
  );
}
