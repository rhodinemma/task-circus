import { useState, useEffect } from "react";
import "./App.css";
import ToDo from "./components/sectionOne/ToDo";
import Doing from "./components/sectionTwo/Doing";
import Completed from "./components/sectionThree/Completed";

const todos = [
  {
    title: "Custom Domain for learning apps",
    description: "Setup custom domain for learning apps",
    date: "Jan 31",
  },
  {
    title: "Increase Testing Coverage and make logging run asynchronously",
    description: "Aim to increase the coverage to 80%",
    date: "Feb 2",
  },
  {
    title: "Integrate User Activity logs",
    description: "User activity logs should be reported at the frontend",
    date: "Feb 10",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <>
      {loading ? (
        <center>
          <h3 className="mt-5 pt-5 text-center">
            <b>loading..................</b>
          </h3>
        </center>
      ) : (
        <>
          <div className="App">
            <div className="container mt-2 pb-5">
              <h1
                className="mb-4 pb-2"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <i className="fas fa-layer-group"></i> &nbsp;<b>Task Circus</b>
              </h1>

              <div className="col-12 card-deck">
                <div className="row">
                  <ToDo data={todos} />

                  <Doing />

                  <Completed />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
