"use client";
import React, { useContext, useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import styles from "./FormSection.module.scss";
import { Form } from "./Form/Form";
import { Message } from "./Message/Message";
import { ObserverContext } from "../../context/obeserverContext";

export const FormSection = () => {
  const [show, setShow] = useState<"form" | "message">("form");
  const { setActiveTab } = useContext(ObserverContext);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (setActiveTab) {
      setActiveTab(isIntersecting ? "form" : null);
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className={styles.formSection} id="form">
      <div className={styles.formContainer}>
        {show === "form" && <Form setShow={setShow} />}
        {show === "message" && <Message />}
      </div>
    </section>
  );
};
