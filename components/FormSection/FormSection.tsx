"use client";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./FormSection.module.scss";
import { Form } from "./Form/Form";
import { Message } from "./Message/Message";
import { useVisibility } from "../hooks/useVisibility";

export const FormSection = () => {
  const [show, setShow] = useState<"form" | "message">("form");
  const handleVisibility = useVisibility("form");

  return (
    <VisibilitySensor onChange={handleVisibility} scrollCheck={true} partialVisibility={true} >
      <section className={styles.formSection} id="form">
        <div className={styles.formContainer}>
          {show === "form" && <Form setShow={setShow} />}
          {show === "message" && <Message />}
        </div>
      </section>
    </VisibilitySensor>
  );
};
