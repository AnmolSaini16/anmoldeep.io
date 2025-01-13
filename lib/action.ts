"use server";

import { Resend } from "resend";

import { IPost } from "@/types";
import { fetchFromDevToAPI } from "./utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const getPosts = (params?: {
  [key: string]: string | number;
}): Promise<IPost[] | undefined> => {
  const queryString = params
    ? "?" + new URLSearchParams(params as Record<string, string>).toString()
    : "";

  return fetchFromDevToAPI<IPost[]>(
    `https://dev.to/api/articles/me/published${queryString}`
  );
};

export const getPost = (slug: string): Promise<IPost | undefined> =>
  fetchFromDevToAPI<IPost>(`https://dev.to/api/articles/anmolsaini16/${slug}`);

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
