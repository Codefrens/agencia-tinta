"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import styles from "./LandingForm.module.css";

interface LandingFormProps {
  lang: "es" | "en";
  formTranslations: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    projectType: string;
    message: string;
    buttonLabel: string;
    buttonLabelSending: string;
    successMessage: string;
    errorMessage: string;
    recaptchaError: string;
    projectTypes: {
      video: string;
      event: string;
      photography: string;
      reels: string;
      other: string;
    };
  };
}

const LandingForm = ({ lang, formTranslations }: LandingFormProps) => {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "recaptcha_error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Verificar reCAPTCHA
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setStatus("recaptcha_error");
      return;
    }

    try {
      // Ejecutar reCAPTCHA
      const token = await executeRecaptcha('contact_form');

      const res = await fetch("/api/landing-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "landing-production",
          recaptchaToken: token,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
        
        // Redirección después de 1 segundo para mostrar brevemente el mensaje de éxito
        setTimeout(() => {
          router.push(`/${lang}/thank-you`);
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
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>{formTranslations.title}</h3>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder={formTranslations.name}
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder={formTranslations.email}
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        
        <div className={styles.row}>
          <input
            type="tel"
            name="phone"
            placeholder={formTranslations.phone}
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">{formTranslations.projectType}</option>
            <option value="video">{formTranslations.projectTypes.video}</option>
            <option value="event">{formTranslations.projectTypes.event}</option>
            <option value="photography">{formTranslations.projectTypes.photography}</option>
            <option value="reels">{formTranslations.projectTypes.reels}</option>
            <option value="other">{formTranslations.projectTypes.other}</option>
          </select>
        </div>
        
        <textarea
          rows={4}
          name="message"
          placeholder={formTranslations.message}
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
        
        <button
          className={styles.button}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading"
            ? formTranslations.buttonLabelSending
            : formTranslations.buttonLabel}
        </button>
      </form>
      
      {status === "success" && (
        <div className={styles.successMessage}>
          {formTranslations.successMessage}
        </div>
      )}
      {status === "error" && (
        <div className={styles.errorMessage}>
          {formTranslations.errorMessage}
        </div>
      )}
      {status === "recaptcha_error" && (
        <div className={styles.errorMessage}>
          {formTranslations.recaptchaError}
        </div>
      )}

    </div>
  );
};

export default LandingForm; 