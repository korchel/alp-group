"use client";
import React, { useState } from "react";

import styles from "./FormSection.module.scss";
import { Form } from "./Form/Form";
import { Message } from "./Message/Message";
import { useObserver } from "../hooks/useObserver";

export const FormSection = () => {
  const [show, setShow] = useState<"form" | "message">("form");
  const ref = useObserver("form");

  return (
    <section ref={ref} className={styles.formSection} id="form">
      <div className={styles.formContainer}>
        {show === "form" && <Form setShow={setShow} />}
        {show === "message" && <Message />}
      </div>
    </section>
  );
};
