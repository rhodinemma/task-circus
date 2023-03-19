import React, { useState } from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import { Modal } from "react-bootstrap";
import "../../index.css";
import Swal from "sweetalert2";

const Doing = ({ data }) => {
  let doing;
  const [tasktitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate , setTaskDate ] = useState("");
  const [inputModal, setInputModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const handleViewModalClose = () => setViewModal(false);
  const handleInputModalClose = () => setInputModal(false);

  //create functions for the view sections
  const [viewId, setViewId] = useState("");
  const [viewTitle, setViewTitle] = useState("");
  const [viewDescription, setViewDescription] = useState("");
  const [viewDate, setViewDate] = useState(""); 
  const [comment, setComment] = useState("");

  const getSingleDoing = (id) => {
    doing = data.find((doing) => doing.id === id);
    setViewId(doing.id);
    setViewTitle(doing.title);
    setViewDescription(doing.description);
    setViewDate(doing.date);
    setComment(doing.comment);
  }


  // function to submit a new task
  const submitTask = (e) => {
    e.preventDefault();
    //fill in the empty fields 
    if (tasktitle  === "" && taskDescription === "" &&  taskDate === ""){
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Fill in the task tile , description and date"
      })
    }else if(tasktitle && taskDescription === "" && taskDate === ""){
    Swal.fire({
      icon: "error",
      title: "Oops..",
      text: "Fill in the task description and date"
    })
  }else if(tasktitle  === ""  && taskDescription && taskDate === ""){
    Swal.fire({
      icon: "error",
      title: "Oops..",
      text: "Fill in the task tile and date"
    })
  }else if(tasktitle && taskDescription && taskDate === ""){
    Swal.fire({
      icon: "error",
      title: "Oops..",
      text: "Fill in the task date"
    })
  }else{
    //this will add the new date ,description and title
      setTaskDate('');
      setTaskDescription('');
      setTaskTitle('');
    // this adds a new task to our todos array
    data.push({
      title: tasktitle,
      description: taskDescription,
      date: taskDate,
    });

    // after adding a new task, close the input modal
      setInputModal(false);

    Swal.fire({
      icon: "sucess",
      title: "Sucessful",
      text: "Created task successfully"
    })
    }
  };
  
  const saveComment = () => {
    e.preventDefault();
    data.push({
      comment: comment,
    });
    setComment("");
  }

  return (
    <>
      <div
        className="col-sm-4 card-header card"
        style={{ borderRadius: "0.7rem" }}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>Doing</b>
        </h1>
      <div className="cards-top">
        {data.map((doing, index) => (
          <>
            <div
              className="card border border-1 mb-2"
              style={{ width: "20rem", borderRadius: "0.5rem" }}
              onClick={() => {
                getSingleDoing(doing.id);
              }}
              key={index}
            >
              <div className="card-body">
                <h5 className="card-title"
                  onClick={() => {
                    setViewModal(true);
                    }}
                >
                  {doing.title}
                </h5>
                <div className="bottom--part mt-4 text-end">
                  <small
                    className="bg-warning p-1 mt-2"
                    style={{ borderRadius: "0.5rem", float: "left" }}
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title={doing.date}
                  >
                    {doing.date}
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
            }}
            onClick={() => setInputModal(true)}
          > Add Task &nbsp;
            <i
              className="fas fa-plus mt-1 text-muted"
              style={{ float: "center" }}
            /> 
          </button>
        </div>

        {viewModal && (
          <Modal
            keyboard={false}
            show={viewModal}
            onHide={handleViewModalClose}
            style={{ minHeight: "15rem" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h1 className="mt-1 b">Viewing task #{viewId}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                  <div className="mb-1 b">
                    <h2 className="mb-1">{viewTitle}</h2>
                  </div>
                  <div className="mb-1" style={{  display: "flex", justifyContent:"space-between" }} >
                    <h5 className="mb-1 text-muted">{viewDescription}</h5>
                    <h5 className="mt-1" style={{float : "right"}}>{viewDate}</h5>
                  </div>
              </div>
              <div>
                <h5 className="b mt-3" style={{borderBottom : "0.1px solid #ccc"}}>More activities</h5>
                <textarea
                  className="mb-1"
                  rows={2} width="100%"
                  placeholder={"write a comment"}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button type="button mt-3"
                  className="save btn-primary" 
                  value="save"
                  style={{ justifyContent: "center", alignContent: "center", display: "flex" }}
                  onClick={()=> saveComment()}
                >
                  Save
                </button>
                <p>{comment}</p>
              </div>
            </Modal.Body>
          </Modal>
        )}

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
              Save task
            </button>
           </form>
          </Modal.Body>
        </Modal>
      </div>
      
    </>
  );
};

export default Doing;
