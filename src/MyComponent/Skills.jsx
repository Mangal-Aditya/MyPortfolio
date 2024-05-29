import React from "react";
import "./Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";
function Skills() {
  return (
    <>
      <div className="expain">
        <h1 className="name">HTML</h1>
        <h5 className="elaborate">
          I embarked on my HTML journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.codewithharry.com/ " target="_blank">
            CodeWithHarry
          </a>{" "}
          . Delving deeper, I honed my skills at{" "}
          <a href="https://www.w3schools.com/" target="_blank">
            W3school
          </a>{" "}
          , mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>

        <h1 className="name">CSS</h1>
        <h5 className="elaborate">
          I embarked on my CSS journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.codewithharry.com/ " target="_blank">
            CodeWithHarry
          </a>{" "}
          Mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>

        <h1 className="name">JavaScript</h1>
        <h5 className="elaborate">
          I embarked on my CSS journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.codewithharry.com/ " target="_blank">
            CodeWithHarry
          </a>{" "}
          Mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>

        <h1 className="name">Bootstrap</h1>
        <h5 className="elaborate">
          I embarked on my CSS journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.codewithharry.com/ " target="_blank">
            CodeWithHarry
          </a>{" "}
          Mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>

        <h1 className="name">Wordpress</h1>
        <h5 className="elaborate">
          I embarked on my CSS journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.codewithharry.com/ " target="_blank">
            CodeWithHarry
          </a>{" "}
          Mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>

        <h1 className="name">Woocommerce</h1>
        <h5 className="elaborate">
          I embarked on my CSS journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.codewithharry.com/ " target="_blank">
            CodeWithHarry
          </a>{" "}
          Mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>

        <h1 className="name">Git</h1>
        <h5 className="elaborate">
          I embarked on my CSS journey during my 11th-grade year, captivated by
          the tutorials of{" "}
          <a href="https://www.apnacollege.in/ " target="_blank">
            ApnaCollege
          </a>{" "}
          Mastering diverse tags and their functionalities. This journey
          sculpted my understanding, paving the way for crafting immersive web
          experiences
        </h5>
      </div>

      <h3>
        An estimated percentage of my skills showcases my comprehensive
        expertise.
      </h3>
      <div className="pgrograssbar">
        <ProgressBar now={87} animated />
        <h3>HTML :- 87% </h3>

        <ProgressBar now={85} animated />
        <h3>CSS :- 85% </h3>

        <ProgressBar now={75} animated />
        <h3>JS :- 75% </h3>

        <ProgressBar now={82} animated />
        <h3>BootStrap :- 82% </h3>

        <ProgressBar now={77} animated />
        <h3>React :- 77% </h3>

        <ProgressBar now={70} animated />
        <h3>Wordpress :- 70% </h3>

        <ProgressBar now={60} animated />
        <h3>WooCommerce :- 60% </h3>

        <ProgressBar now={77} animated />
        <h3>Git :- 77% </h3>
      </div>

      <div className="enthusias">
        <h3>
          My fervor for learning knows no bounds; it's a flame that burns
          brightly within me, driving me to explore and absorb knowledge from
          every conceivable source. Each new concept, skill, or idea ignites a
          sense of excitement and curiosity within me, propelling me to delve
          deeper and uncover more. Learning isn't just a task or obligation;
          it's a passion that fuels my aspirations and propels me toward
          continuous growth and self-improvement.{" "}
        </h3>
      </div>
    </>
  );
}

export default Skills;
