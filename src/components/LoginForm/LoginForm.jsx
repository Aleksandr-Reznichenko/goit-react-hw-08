import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './LoginForm.module.css';

const LoginFormSchema = Yup.object().shape({
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
  email: '',
  password: '',
};

export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginFormSchema}
    >
      <Form className={css.container} autoComplete="off">
        <div className={css.form}>
          <h2>Login Form</h2>

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

          <button className={css.loginBtn} type="submit">
            Sign in account
          </button>
          <div className={css.orRegister}>
            <p>Don&#39;t have an account? </p>
            <Link to="/register">
              <span className={css.linkRegister}>Register</span>
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
