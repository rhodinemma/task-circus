import React, { useState } from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const Completed = ({ data }) => {
  const [tasktitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [inputModal, setInputModal] = useState(false);
  const handleInputModalClose = () => setInputModal(false);

  // function to submit a new task
  const submitTask = (e) => {
    e.preventDefault();
    //fill in the empty fields
    if (tasktitle === "" && taskDescription === "" && taskDate === "") {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Fill in the task title , description and date",
      });
    } else if (tasktitle && taskDescription === "" && taskDate === "") {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Fill in the task description and date",
      });
    } else if (tasktitle === "" && taskDescription && taskDate === "") {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Fill in the task tile and date",
      });
    } else if (tasktitle && taskDescription && taskDate === "") {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Fill in the task date",
      });
    } else {
      //this will add the new date ,description and title
      setTaskDate("");
      setTaskDescription("");
      setTaskTitle("");
      // this adds a new task to our todos array
      data.push({
        title: tasktitle,
        description: taskDescription,
        date: taskDate,
      });

      // after adding a new task, close the input modal
      setInputModal(false);

      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Created task successfully",
      });
    }
  };

  return (
    <>
      <div
        className="col-sm-4 card-header card"
        style={{ borderRadius: "0.7rem" }}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>Completed</b>
        </h1>
        <div className="cards-top">
          {data.map((completed, index) => (
            <>
              <div
                className="card border border-1 mb-2"
                style={{ width: "20rem", borderRadius: "0.5rem" }}
                key={index}
                onClick={() => setCompletedModal(true)}
              >
                <div className="card-body p-3">
                  <h5 className="card-title">{completed.title}</h5>
                  <div className="bottom--part mt-4 text-end">
                    <small
                      className="bg-dark p-1 text-white mt-2"
                      style={{ borderRadius: "0.5rem", float: "left" }}
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title={completed.date}
                    >
                      {completed.date}
                    </small>
                    <img
                      src={moses}
                      alt="dp"
                      className="rounded-circle mt-2"
                      width="30px"
                      height="30px"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="mosesmulumba"
                    />
                    <img
                      src={rhodin}
                      alt="dp"
                      className="rounded-circle mt-2"
                      width="30px"
                      height="30px"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="rhodinemma"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="mt-1 text-end">
          <button
            type="button"
            className="mb-1 w-100 h-2 text-muted"
            style={{
              borderRadius: "0.3rem",
              maxHeight: "auto",
              borderStyle: "none",
              float: "left",
            }}
            onClick={() => setInputModal(true)}
          >
            <i
              className="fas fa-plus mt-1 text-muted"
              style={{ float: "left" }}
            ></i>
            Add Task
          </button>
        </div>
        <Modal
          keyboard={false}
          show={inputModal}
          onHide={handleInputModalClose}
          style={{ minHeight: "15rem" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="mt-3">Add task</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={submitTask}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Task Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Task Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Task Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setTaskDate(e.target.value)}
                />
              </div>
              <button
                className="mt-3 btn btn-primary"
                onClick={() => submitTask()}
              >
                Submit task
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Completed;
