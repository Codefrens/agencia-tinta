"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";
import { Translations } from "@/translations/types";

const Form = ({
  translations,
}: {
  translations: Translations["contactPage"]["form"];
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("api/contact2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
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
