import React , {useState} from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import Modal from "react-bootstrap/Modal";
import "../../App.css";

const Doing = ({data}) => {
  const [doingModal, setDoingModal] = useState(false);
  const handleDoingClose =()=> setDoingModal(false);
  return (
    <>
      <div
        className="col-sm-4 card-header card"
        style={{ borderRadius: "0.7rem"}}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>Doing</b>
        </h1>
        {data.map((doing,index)=>(
          <>
            <div
              className="card border border-1 mb-2"
              style={{ width: "20rem", borderRadius: "0.5rem" }}
              onClick = {()=> setDoingModal(true)}
              key={index}
            >
              <div className="card-body">
                <h5 className="card-title">{doing.title}</h5>
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
      <Modal
                keyboard={false}
                show={doingModal} 
                onHide={handleDoingClose}
              >
              <Modal.Header closeButton>
              <Modal.Title><h2 className='mt-3'>Doing Section</h2></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>User Onboarding</h3>
                <p>Orientation for new users</p>
              </Modal.Body>
          </Modal> 
    </>
  );
};

export default Doing;
