import Modal from 'react-modal';
import DeleteContact from '../../assets/deleteContact.png';

import css from './DeleteContactModal.module.css';

export default function DeleteContactModal({
  onCloseModal,
  isOpen,
  onConfirmDelete,
  contactName,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName={
        isOpen ? `${css.overlay}` : `${css.overlay} ${css.leave}`
      }
      className={isOpen ? `${css.modal}` : `${css.modal} ${css.leave}`}
      contentLabel="Delete contact"
    >
      <h2>Delete contact</h2>
      <img src={DeleteContact} alt="Delete contact" width={80} />
      <div>
        <p className={css.text}>
          Are you sure you want to delete <strong>{contactName}</strong>? This
          action cannot be undone.
        </p>
      </div>
      <div className={css.buttons}>
        <button className={css.closeBtn} onClick={onCloseModal}>
          Cancel
        </button>
        <button className={css.delBtn} onClick={onConfirmDelete}>
          Delete contact
        </button>
      </div>
    </Modal>
  );
}
