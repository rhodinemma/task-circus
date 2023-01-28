import React , {useState} from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import TaskModal from "../modal/index";
import "../../App.css";

const Doing = () => {
  const [modalShow , setModalShow]  = useState(false);
  return (
    <>
      <div
        className="col-sm-4 card-header card"
        style={{ borderRadius: "0.7rem" , maxHeight:"40vh"}}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>Doing</b>
        </h1>

        <div
          className="card border border-1"
          style={{ width: "20rem", borderRadius: "0.5rem" }}
          onClick = {()=> setModalShow(true)}
        >
          <div className="card-body">
            <h5 className="card-title">User Onboarding</h5>
            <div className="bottom--part mt-4 text-end">
              <small
                className="bg-warning p-1 mt-2"
                style={{ borderRadius: "0.5rem", float: "left" }}
              >
                Jan 30
              </small>
              <img
                src={moses}
                alt="dp"
                className="rounded-circle mt-2"
                width="30px"
                height="30px"
              />
              <img
                src={rhodin}
                alt="dp"
                className="rounded-circle mt-2"
                width="30px"
                height="30px"
              />
            </div>
          </div>
        </div> 
         <div className="mt-1 text-end">
            <button type="button" className="mb-1 w-75 h-2 text-muted" style={{ borderRadius: "0.3rem" , maxHeight: "auto" ,borderStyle:"none" , float:"left"}}><i className="fas fa-plus mt-1 text-muted" style={{float:"left"}}></i> 
              Add Task
            </button>
            <div className="symbols" style={{float:"left"}}>
              <i className="material-icons text-muted" data-bs-toggle="tooltip" data-bs-html="true" title="assignments">assignment</i>
              <span className="material-symbols-outlined" data-bs-toggle="tooltip" data-bs-html="true" title="recommend">recommend</span>
              <span className="material-symbols-outlined" data-bs-toggle="tooltip" data-bs-html="true" title="group_work">group_work</span>
            </div>
         </div>
      </div>
      <TaskModal show={modalShow}  onHide = {() => setModalShow(false)} />
    </>
  );
};

export default Doing;
