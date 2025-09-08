"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";
import { Translations } from "@/translations/types";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Form = ({
  translations,
  lang,
}: {
  translations: Translations["contactPage"]["form"];
  lang: "es" | "en";
}) => {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "recaptcha_error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setStatus("recaptcha_error");
      return;
    }

    const token = await executeRecaptcha('contact_form');
    
    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });
  
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          router.push(`/${lang}/thank-you?origin=home`);
        }, 1000);
      } else {
        const errorData = await res.json();
        if (errorData.error === 'reCAPTCHA verification failed') {
          setStatus("recaptcha_error");
        } else {
          setStatus("error");
        }
      }
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      setStatus("recaptcha_error");
    }
   
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder={translations.name}
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder={translations.email}
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          rows={4}
          name="message"
          placeholder={translations.message}
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button
          className={styles.button}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading"
            ? translations.buttonLabelSending
            : translations.buttonLabel}
        </button>
      </form>
      {status === "success" && (
        <span className={styles.successMessage}>
          {translations.successMessage}
        </span>
      )}
      {status === "error" && (
        <span className={styles.errorMessage}>{translations.errorMessage}</span>
      )}
    </>
  );
};

export default Form;
