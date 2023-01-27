import moses from "./assets/moses.jpeg";
import rhodin from "./assets/rhodin.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-2 pb-5">
        <h1 className="mb-4 pb-2" style={{ borderBottom: "1px solid #ccc" }}>
          <i className="fas fa-layer-group"></i> &nbsp;<b>Task Circus</b>
        </h1>

        <div className="col-12 card-deck">
          <div className="row">
            <div
              className="col-sm-4 bgc-#ccc card-header card"
              style={{ borderRadius: "0.7rem" }}
            >
              <h1
                className="card-header mb-3"
                style={{ borderRadius: "0.7rem" }}
              >
                <b>To Do</b>
              </h1>
              <div className="cards">
                <div
                  className="card border mb-2"
                  style={{ width: "21.5rem", borderRadius: "0.5rem" }}
                >
                  <div className="card-body border-bottom p-3">
                    <h5 className="card-title">
                      Custom Domain for learning apps
                    </h5>
                    <div className="bottom--part mt-4 text-end">
                      <small
                        className="bg-danger p-1 text-white mt-2"
                        style={{ borderRadius: "0.5rem" , float:"left"}}
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
                <div
                  className="card border"
                  style={{ width: "21.5rem", borderRadius: "0.5rem" }}
                >
                  <div
                    className="card-body border-bottom"
                    style={{ borderRadius: "0.7rem" }}
                  >
                    <h5 className="card-title">
                      Increase Testing Coverage and make logging run
                      asynchronously
                    </h5>
                    <div className="bottom--part mt-4 text-end">
                      <small
                        className="bg-danger p-1 text-white mt-2"
                        style={{ borderRadius: "0.5rem" , float:"left"}}
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
              </div>
            </div>
            <div
              className="col-sm-4 card-header card"
              style={{ borderRadius: "0.7rem" }}
            >
              <h1
                className="card-header mb-3"
                style={{ borderRadius: "0.7rem" }}
              >
                <b>Doing</b>
              </h1>

              <div
                className="card border border-1"
                style={{ width: "21.5rem", borderRadius: "0.5rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">User Onboarding</h5>
                  <div className="bottom--part mt-4 text-end">
                      <small
                        className="bg-warning p-1 mt-2"
                        style={{ borderRadius: "0.5rem", float:"left" }}
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
            </div>
            <div
              className="col-sm-4 card-header card"
              style={{ borderRadius: "0.7rem" }}
            >
              <h1
                className="card-header mb-3"
                style={{ borderRadius: "0.7rem" }}
              >
                <b>Completed</b>
              </h1>

              <div
                className="card border border-1"
                style={{ width: "21.5rem", borderRadius: "0.5rem" }}
              >
                <div className="card-body p-3">
                  <h5 className="card-title">
                    Implement manage user section on the admin-user profile
                  </h5>
                  <div className="bottom--part mt-4 text-end">
                      <small
                        className="bg-dark p-1 text-white mt-2"
                        style={{ borderRadius: "0.5rem" , float:"left"}}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
