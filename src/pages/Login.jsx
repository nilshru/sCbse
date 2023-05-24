import React, { useState } from "react";
import Black from "../img/back.png";
import { useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing/hiding formContainer
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };

  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle the value of showForm state
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#maths">Mathematics</a>
          </li>
          <li>
            <a href="#science">Science</a>
          </li>
          <li>
            <a href="#english">English</a>
          </li>
          <li>
            <button className="open" onClick={handleButtonClick}><img src={Black} alt=""/></button>
          </li>
        </ul>
      </nav>
      <header>
        <h1>CBSE Class 10 Question Answers</h1>
      </header>

      <section id="maths">
        <h2>Mathematics</h2>
        <h3>Question 1</h3>
        <p>What is the value of x in the equation 2x + 5 = 15?</p>
        <h4>Answer</h4>
        <p>The value of x is 5.</p>

        <h3>Question 2</h3>
        <p>Simplify the expression: 3(2x + 4) - 5(3 - 2x)</p>
        <h4>Answer</h4>
        <p>The simplified expression is 4x + 17.</p>
      </section>

      <section id="science">
        <h2>Science</h2>
        <h3>Question 1</h3>
        <p>What is the formula for calculating the speed of an object?</p>
        <h4>Answer</h4>
        <p>The formula for calculating speed is speed = distance / time.</p>

        <h3>Question 2</h3>
        <p>What is the function of the nucleus in a cell?</p>
        <h4>Answer</h4>
        <p>
          The nucleus controls the activities of the cell and contains the
          genetic material.
        </p>
      </section>

      <section id="english">
        <h2>English</h2>
        <h3>Question 1</h3>
        <p>
          Identify the figure of speech used in the sentence: "The stars danced
          in the night sky."
        </p>
        <h4>Answer</h4>
        <p>The figure of speech used is personification.</p>

        <h3>Question 2</h3>
        <p>Write a synonym for the word "beautiful".</p>
        <h4>Answer</h4>
        <p>A synonym for "beautiful" is "gorgeous".</p>
      </section>

      {showForm && (
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Official Work</span>
            <span className="title">S-connect</span>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <button type="submit">Enter</button>
              {err && <span>Something went wrong</span>}
            </form>
            {/* <p>
              You don't have an account? <Link to="/register">Register</Link>
            </p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;


