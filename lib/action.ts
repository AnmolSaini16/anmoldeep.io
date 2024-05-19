"use server";

import { IPost } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const getPosts = async (): Promise<IPost[] | undefined> => {
  let postsResponse;
  try {
    const headers = new Headers();
    headers.append("api-key", process.env.DEV_TO_API_KEY!);

    postsResponse = await fetch("https://dev.to/api/articles/me/published", {
      headers,
      next: { revalidate: 1800 },
    });
  } catch (error) {
    console.log(error);
  }

  if (postsResponse?.ok) {
    return postsResponse.json();
  } else {
    console.log(
      `HTTP Response Code: ${postsResponse?.status}, Message: ${postsResponse?.statusText}`
    );
  }
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const senderName = formData.get("senderName");
  const senderMessage = formData.get("senderMessage");

  const emailContent = `
  <p>Hi,</p>
  <p>You have received a message from ${senderName}, (${senderEmail}):</p>
  <p>${senderMessage}</p>
  <p>Regards,</p>
  <p>Contact Form</p>
`;

  return resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "sainianmol16@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    html: emailContent,
  });
};
