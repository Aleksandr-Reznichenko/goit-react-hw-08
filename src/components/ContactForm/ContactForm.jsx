import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import { BiSolidContact } from 'react-icons/bi';

import css from './ContactForm.module.css';

const ContactFormSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too few characters! Please provide more information!')
    .max(50, 'Too long! Please limit the input!')
    .required('Field is required and cannot be empty'),
  phoneNumber: Yup.string()
    .min(3, 'Min value 3.')
    .max(30, 'Max value 30.')
    .required('Field is required and cannot be empty'),
});

const initialValues = {
  contactName: '',
  phoneNumber: '',
};

export default function ContactForm() {
  const contactNameId = useId();
  const phoneNumberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { contactName, phoneNumber } = values;
    dispatch(addContact({ name: contactName, number: phoneNumber }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.addContact}>
          <div className={css.fieldBox}>
            <label htmlFor="contactNameId">Contact name</label>
            <Field
              type="text"
              name="contactName"
              id={contactNameId}
              placeholder="Enter contact name"
            />
            <ErrorMessage
              name="contactName"
              component="span"
              className={css.errorMsg}
            />
          </div>

          <div className={css.fieldBox}>
            <label htmlFor="phoneNumberId">Phone number</label>
            <Field
              type="number"
              name="phoneNumber"
              id={phoneNumberId}
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="phoneNumber"
              component="span"
              className={css.errorMsg}
            />
          </div>

          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </div>
        <div className={css.hero}>
          <h1 className={css.title}>
            <BiSolidContact className={css.iconTitle} />
            Phone Book
          </h1>
          <div className={css.imgForm}></div>
        </div>
      </Form>
    </Formik>
  );
}
