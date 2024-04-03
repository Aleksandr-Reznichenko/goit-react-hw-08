import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import EditContactModal from '../EditContactModal/EditContactModal';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';

import { RiMore2Fill } from 'react-icons/ri';
import { CiEdit, CiTrash } from 'react-icons/ci';

import css from './MoreButton.module.css';

Modal.setAppElement('#root');

export default function MoreButton({ contact }) {
  const { id, name } = contact;

  const [showPopover, setShowPopover] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setDeleteModalIsOpen(false);
  };

  const handleEditContact = (editedName, editedNumber) => {
    dispatch(editContact({ id, name: editedName, number: editedNumber }));
    closeEditModal();
  };

  const handleClickOutside = event => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  return (
    <div className={css.moreBtnContainer}>
      <button
        className={css.moreBtn}
        onClick={() => setShowPopover(!showPopover)}
      >
        <RiMore2Fill className={css.iconMore} />
      </button>
      {showPopover && (
        <div ref={popoverRef} className={css.popover}>
          <button className={css.editBtn} onClick={openEditModal}>
            <CiEdit className={css.iconEditBtn} />
          </button>

          <button className={css.deleteBtn} onClick={openDeleteModal}>
            <CiTrash className={css.iconDeleteBtn} />
          </button>
        </div>
      )}

      <EditContactModal
        onCloseModal={closeEditModal}
        isOpen={editModalIsOpen}
        contact={contact}
        onEdit={handleEditContact}
      />
      <DeleteContactModal
        onCloseModal={closeDeleteModal}
        isOpen={deleteModalIsOpen}
        onConfirmDelete={handleDeleteContact}
        contactName={name}
      />
    </div>
  );
}
