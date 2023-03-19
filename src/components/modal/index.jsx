import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TaskModal() {
  const [ taskModal , setTaskModal ] = useState(false);
  const handleTaskModalClose = () => setTaskModal(false);

  return (
    <>
      <Modal show={taskModal} onHide={handleTaskModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="mt-3 b" style={{ fontSize: "26px" }}>
              Viewing Task
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h1 className="mt-3" style={{fontSize: "22px" }}></h1>
            <h3 className="mt-1 small" style={{fontSize: "20px"}}></h3>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTaskModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default TaskModal;
