"use client";
import React, { useState } from "react";

import styles from "./FormSection.module.scss";
import { Form } from "./Form/Form";
import { Message } from "./Message/Message";

export const FormSection = () => {
  const [show, setShow] = useState<"form" | "message">("form");

  return (
    <section className={styles.formSection} id="form">
      <div className={styles.formContainer}>
        {show === "form" && <Form setShow={setShow} />}
        {show === "message" && <Message />}
      </div>
    </section>
  );
};
