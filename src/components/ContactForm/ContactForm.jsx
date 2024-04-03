import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import { IoMdAddCircleOutline } from 'react-icons/io';

import css from './ContactForm.module.css';

const ContactFormSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Must be at least 3 characters long!')
    .max(30, 'Must be no more than 30 characters!')
    .required('This field is required!'),
  phoneNumber: Yup.string()
    .min(3, 'Must be at least 3 characters long!')
    .max(30, 'Must be no more than 30 characters!')
    .required('This field is required!'),
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
      {({ setFieldValue }) => (
        <Form autoComplete="off">
          <div className={css.addContact}>
            <h2>New contact</h2>
            <div className={css.inputBox}>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="contactName"
                  id={contactNameId}
                  placeholder=" "
                />
                <label htmlFor={contactNameId}>Name</label>
              </div>
              <div>
                <ErrorMessage
                  name="contactName"
                  component="span"
                  className={css.errorMsg}
                />
              </div>
            </div>

            <div className={css.inputBox}>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="phoneNumber"
                  id={phoneNumberId}
                  placeholder=" "
                  onChange={e => {
                    const filteredValue = e.target.value.replace(/[^\d-]/g, '');
                    setFieldValue('phoneNumber', filteredValue);
                  }}
                />
                <label htmlFor={phoneNumberId}>Phone Number</label>
              </div>
              <div>
                <ErrorMessage
                  name="phoneNumber"
                  component="span"
                  className={css.errorMsg}
                />
              </div>
            </div>

            <button className={css.addContactBtn} type="submit">
              <div className={css.textBtn}>
                <IoMdAddCircleOutline className={css.iconBtn} />
                Add contact
              </div>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
