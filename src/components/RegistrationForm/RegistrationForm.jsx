import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './RegistrationForm.module.css';

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters long!')
    .max(30, 'Must be no more than 30 characters!')
    .required('This field is required!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .min(4, 'Must be at least 4 characters long!')
    .max(50, 'Must be no more than 50 characters!')
    .required('This field is required!'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters long!')
    .max(30, 'Must be no more than 3 characters!')
    .required('This field is required!'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (credentials, actions) => {
    dispatch(register(credentials));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationFormSchema}
    >
      <Form className={css.container} autoComplete="off">
        <div className={css.form}>
          <h2>Registration Form</h2>

          <div className={css.inputBox}>
            <div className={css.inputWrapper}>
              <Field type="text" name="name" id={nameId} placeholder=" " />
              <label htmlFor="nameId">Your name</label>
            </div>
            <div>
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorMsg}
              />
            </div>
          </div>

          <div className={css.inputBox}>
            <div className={css.inputWrapper}>
              <Field type="email" name="email" id={emailId} placeholder=" " />
              <label htmlFor="emailId">Email</label>
            </div>
            <div>
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMsg}
              />
            </div>
          </div>

          <div className={css.inputBox}>
            <div className={css.inputWrapper}>
              <Field
                type="password"
                name="password"
                id={passwordId}
                placeholder=" "
              />
              <label htmlFor="passwordId">Password</label>
            </div>
            <div>
              <ErrorMessage
                name="password"
                component="span"
                className={css.errorMsg}
              />
            </div>
          </div>

          <button className={css.registerBtn} type="submit">
            Create account
          </button>
          <div className={css.orLogin}>
            <p>Already have an account? </p>
            <Link to="/login">
              <span className={css.linkLogin}>Login</span>
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
