//import pic from "../assets/profile.jpeg"
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container mt-5 pb-5">
        <center>
          <h1 className="mb-4 pb-2" style={{borderBottom:"1px solid #ccc"}}>
            <i class="fas fa-layer-group"></i> &nbsp;<b>Task Circus</b>
          </h1>
        </center>

        <div className="col-lg-12 card-deck">
          <div className="row" >
            <div className="col-md-3 bgc-#ccc card-header card" style={{borderRadius:"0.7rem"}}>
              <h1 className="card--header" style={{borderRadius:"0.7rem"}}>
                <b>To Do</b></h1>
                <div className="cards">
                <div className="card border mb-2" style={{ width:"16rem", borderRadius:"0.5rem"}}>
                  <div className="card-body border-bottom p-3">
                    <h5 className="card-title">
                      Custom Domain for learning apps
                    </h5>
                    <small
                      className="bg-danger p-1 text-white"
                      style={{ borderRadius: "0.5rem"}}
                    >
                      Jan 30
                    </small>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
                <div className="card border" style={{ width:"16rem", borderRadius:"0.5rem"}}>
                  <div className="card-body border-bottom" style={{borderRadius:"0.7rem"}}>
                    <h5 className="card-title">
                      Increase Logging Coverage and make logging run asynchronously
                    </h5>
                    <small
                      className="bg-danger p-1 text-white"
                      style={{ borderRadius: "0.5rem"}}
                    >
                      Jan 21
                    </small>
                    <div className="text-end">
                        <img src="/profile.jpeg" alt="dp" className="rounded-circle" width="10px" height="10px" />
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="col-md-3 card-header card" style={{borderRadius:"0.7rem"}}>
              <h1>
                <b>Doing</b>
              </h1>

              <div className="card border border-1" style={{ width: "16rem" , borderRadius:"0.5rem"}}>
                <div className="card-body">
                  <h5 className="card-title">User Onboarding</h5>
                  <small
                    className="bg-warning p-1 text-white"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Jan 30
                  </small>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="col-md-3 card-header card" style={{borderRadius:"0.7rem"}}>
              <h1>
                <b>Completed</b>
              </h1>

              <div className="card border border-1" style={{ width: "16rem" , borderRadius:"0.5rem"}}>
                <div className="card-body p-3">
                  <h5 className="card-title">
                    Implement manage user section on the admin-user profile
                  </h5>
                  <small
                    className="bg-dark p-1 text-white"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Jan 30
                  </small>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
