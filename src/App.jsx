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

const completed = [
  {
    title:"Implement manage user section on the admin-user profile",
    description:"Add the disable and delete button",
    date:"Jan 10"
  },
  {
    title:"Enable name update for the created app",
    description:"Make sure the app is updatable",
    date:"Dec 23"
  },
  {
    title:"Figma designs for cms",
    description:"Frontend designs for the content management system",
    date:"Dec 1"
  },
];
const doing = [
  {
    title:"User Onboarding",
    description:"Orientation for new users",
    date:"Jan 2"
  },
  {
    title:"Working on the platform investigation reports",
    description:"Platform reports",
    date:"Jan 5",
  },
  {
    title:"Working on user feedback",
    description:"User experience and faults on the platform",
    date:"Jan 6"
  }
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
          <div className="spinner-border mt-5 text-center " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </center>
      ) : (
        <>
          <div className="App">
            <div className="container mt-2 pb-2">
              <h1
                className="mb-4 pb-2"
                style={{ borderBottom: "1px solid #ccc"}}
              >
                <i className="fas fa-layer-group"></i> &nbsp;<b>Task Circus</b>
              </h1>

              <div className="col-12 card-deck mt-2 pb-2">
                <div className="row">
                    <ToDo data={todos} />

                    <Doing data={doing} />

                    <Completed data={completed} />
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
