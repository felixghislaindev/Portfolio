"use server";
import ContactFormEmail from "@/email/conact-forms-email";
import { getErrorMessage, validateStr } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

console.log(process.env.RESEND_API_KEY, "Resend API key");

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderMessage = formData.get("senderMessage");
  const senderEmail = formData.get("senderEmail");

  if (!validateStr(senderMessage, 500)) {
    return {
      error: "Invalid sender message",
    };
  }
  if (!validateStr(senderEmail, 5000)) {
    return {
      error: "Invalid sender Email",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "felixghislain@yahoo.com",
      subject: "Message from portfolio contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: String(senderMessage),
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
