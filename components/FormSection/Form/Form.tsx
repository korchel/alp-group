import React, { Dispatch } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

import { Htag } from "../../Htag/Htag";
import { Ptag } from "../../Ptag/Ptag";
import { Button } from "../../Button/Button";
import { Field } from "./../Field/Field";
import styles from "./Form.module.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  lastName: Yup.string().required("Обязательное поле"),
  patronymic: Yup.string().required("Обязательное поле"),
});

interface IFormProps {
  setShow: Dispatch<React.SetStateAction<"form" | "message">>;
}

export const Form: React.FC<IFormProps> = ({ setShow }) => {
  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      patronymic: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      setShow("message");
    },
  });
  return (
    <>
      <Htag>Заявка на диагностику</Htag>
      <Ptag className={clsx(styles.textAlign, styles.maxW)} textAlign="center">
        Доверьте свои медицинские исследования надежным капибарам-лаборантам и
        получите качественные результаты в кратчайшие сроки!
      </Ptag>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <Field
            touched={touched.lastName}
            error={errors.lastName}
            value={values.lastName}
            onChange={handleChange}
            placeholder="Фамилия"
            name="lastName"
          />
          <Field
            touched={touched.name}
            error={errors.name}
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
            name="name"
          />
          <Field
            touched={touched.patronymic}
            error={errors.patronymic}
            value={values.patronymic}
            onChange={handleChange}
            placeholder="Отчество"
            name="patronymic"
          />
        </div>
        <Button type="submit" icon="check">
          Отправить
        </Button>
      </form>
    </>
  );
};
