import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const TaskModal = ({
  modalTaskTile,
  modalTaskDescription,
  todoModal,
  handleToDoClose,
}) => {
  const [todoModal, setToDoModal] = useState(false);
  const handleToDoClose = () => setToDoModal(false);
  return (
    <Modal
      keyboard={false}
      show={todoModal}
      onHide={handleToDoClose}
      style={{ minHeight: "15rem" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2 className="mt-3">Viewing Task</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{modalTaskTile}</h3>
        <p>{modalTaskDescription}</p>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModal;
