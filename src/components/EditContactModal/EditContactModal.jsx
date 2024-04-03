import Modal from 'react-modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { useId } from 'react';
import EditContact from '../../assets/editContact.png';
import * as Yup from 'yup';

import css from './EditContactModal.module.css';

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

export default function EditContactModal({ onCloseModal, isOpen, contact }) {
  const contactNameId = useId();
  const phoneNumberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { contactName, phoneNumber } = values;
    const editedContact = {
      id: contact.id,
      name: contactName,
      number: phoneNumber,
    };
    dispatch(editContact(editedContact));
    onCloseModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName={
        isOpen ? `${css.overlay}` : `${css.overlay} ${css.leave}`
      }
      className={isOpen ? `${css.modal}` : `${css.modal} ${css.leave}`}
      contentLabel="Edit contact"
    >
      <Formik
        initialValues={{
          contactName: contact.name,
          phoneNumber: contact.number,
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form autoComplete="off">
          <div className={css.editContact}>
            <div className={css.head}>
              <h2>Edit contact</h2>
              <img src={EditContact} alt="Edit contact" width={80} />
            </div>
            <div className={css.inputBox}>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="contactName"
                  id={contactNameId}
                  placeholder=" "
                />
                <label htmlFor="contactNameId">Name</label>
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
                  type="tel"
                  name="phoneNumber"
                  id={phoneNumberId}
                  placeholder=" "
                />
                <label htmlFor="phoneNumberId">Phone Number</label>
              </div>
              <div>
                <ErrorMessage
                  name="phoneNumber"
                  component="span"
                  className={css.errorMsg}
                />
              </div>
            </div>

            <div className={css.buttons}>
              <button className={css.closeBtn} onClick={onCloseModal}>
                Cancel
              </button>
              <button type="submit" className={css.saveBtn}>
                Save contact
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}
