import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <center>
          <h1 className="mb-5">
            <i class="fas fa-layer-group"></i> &nbsp;<b>Task Circus</b>
          </h1>
        </center>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-md-4">
              <h1>
                <b>To Do</b>
              </h1>

              <div className="card border border-5" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Custom Domain for learning apps
                  </h5>
                  <small
                    className="bg-danger p-1 text-white"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Jan 30
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h1>
                <b>Doing</b>
              </h1>

              <div className="card border border-5" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">User Onboarding</h5>
                  <small
                    className="bg-warning p-1 text-white"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Jan 30
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h1>
                <b>Completed</b>
              </h1>

              <div className="card border border-5" style={{ width: "18rem" }}>
                <div className="card-body">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
