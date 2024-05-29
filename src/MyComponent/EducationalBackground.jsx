import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EducationalBackground() {
  return (
    <>
      <Card
        className="text-center"
        style={{ marginLeft: "280px", marginBottom: "15px", marginRight: "280px", }}
      >
        <Card.Header style={{ backgroundColor: "pink" }}>
          {" "}
          <h3>Bhadiswar Shyamapada Roy Vidyabhaban</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <b>Madhyamik </b>
          </Card.Title>
          <Card.Text>
            I proudly graduated from Bhadiswar Shyamapada Roy Vidyabhaban in
            2021, achieving a remarkable 92.28% in my Madhyamik examinations
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Card
        className="text-center"
        style={{ marginLeft: "280px", marginBottom: "15px", marginRight: "280px", }}
      >
        <Card.Header style={{ backgroundColor: "pink" }}>
          <h3>Bhadiswar Shyamapada Roy Vidyabhaban</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <b> Higher Secondary </b>
          </Card.Title>
          <Card.Text>
            I proudly graduated high school from Bhadiswar Shyamapada Roy
            Vidyabhaban in 2023 as the school topper, achieving an impressive
            87.28%, marking a significant milestone in my academic journey.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Card
        className="text-center"
        style={{ marginLeft: "280px", marginBottom: "15px" , marginRight: "280px",}}
      >
        <Card.Header style={{ backgroundColor: "pink" }}>
          {" "}
          <h3> Fundamental Of Computer </h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <b>BMS Computer Center </b>
          </Card.Title>
          <Card.Text>
            In 2022, I graduated as the top student with 82% in my Diploma in
            Computer Application from BMS, showcasing my dedication and
            excellence in the field of technology.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Card
        className="text-center"
        style={{ marginLeft: "280px", marginBottom: "15px" , marginRight: "280px", }}
      >
        <Card.Header style={{ backgroundColor: "pink" }}>
          {" "}
          <h3>DIPLOMA IN FINANCIAL ACCOUNTING SYSTEM </h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <b> Murarai Youth Computer Centre </b>
          </Card.Title>
          <Card.Text>
            In 2024, I proudly earned my Diploma in Financial Accounting System
            from Murarari Youth Computer Centre, marking a significant milestone
            in my journey towards expertise in managing financial data and
            systems.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Card
        className="text-center"
        style={{ marginLeft: "280px", marginBottom: "15px", marginRight: "280px", }}
      >
        <Card.Header style={{ backgroundColor: "pink" }}>
          {" "}
          <h3>English honours</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <b> Murarai Kabi Nazrul College </b>
          </Card.Title>
          <Card.Text>
            After completing high school, I embarked on my academic journey by
            securing admission to pursue English Honours at Murarai Kabi Nazrul
            College, where I aim to deepen my understanding of literature and
            language under the guidance of esteemed faculty.
          </Card.Text>
          <Button variant="primary">
            <a href="http://kabinazrulcollege.ac.in/">
              {" "}
              <h5> Kabi Nazrul College </h5>{" "}
            </a>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Card
        className="text-center"
        style={{
          marginLeft: "280px",
          marginRight: "280px",
          marginBottom: "15px",
          paddingRight: "50px",
        }}
        >
        <Card.Header style={{ backgroundColor: "pink" }}>
          {" "}
          <h3 style={{ textAlign: "center" }}>
            Diploma in Computer Science and Technology{" "}
          </h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <b>Nalhati Government Polytechnic </b>
          </Card.Title>
          <Card.Text>
            After completing high school, I secured admission in Computer
            Science and Technology at Nalhati Government Polytechnic, embarking
            on an exciting educational path to explore the dynamic realms of
            technology and innovation
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
}

export default EducationalBackground;

