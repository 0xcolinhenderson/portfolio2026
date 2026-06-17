import { useState } from "react";

function App() {
  const [tab, setTab] = useState("name");

  return (
    <>
      <section id="menu">
        <ul>
          <li
            className={tab === "name" ? "active" : ""}
            onClick={() => setTab("name")}
          >
            colin henderson
          </li>

          <li
            className={tab === "projects" ? "active" : ""}
            onClick={() => setTab("projects")}
          >
            projects
          </li>

          <li>
            <a href="https://www.linkedin.com/in/colinchenderson/">linkedin</a>
          </li>

          <li>
            <a href="https://github.com/0xcolinhenderson">github</a>
          </li>
          <li
            className={tab === "resume" ? "active" : ""}
            onClick={() => setTab("resume")}
          >
            resume
          </li>
        </ul>
      </section>
      <section id="content">
        {tab == "name" ? (
          <>
            <p>hello!</p>
          </>
        ) : tab == "projects" ? (
          <>
            <p>hello!</p>
          </>
        ) : tab == "resume" ? (
          <>
            <p>hello!</p>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default App;
