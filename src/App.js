import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  const [colOne, setColOne] = useState([]);
  const [colTwo, setColTwo] = useState([]);
  const [colThree, setColThree] = useState([]);
  const [colFour, setColFour] = useState([]);

  const handleColOne = event => {
    setColOne(Number(event.target.value));
  };
  const handleColTwo = event => {
    setColTwo(Number(event.target.value));
  };
  const handleColThree = event => {
    setColThree(Number(event.target.value));
  };

  const colTotal = () => {
    const total = colOne + colTwo + colThree;
    if (total > 999 && total < 1000000) {
      const digitFormatter = num => {
        return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
      };
      setColFour(digitFormatter(total));
    } else if (total > 99999 && total < 1000000000) {
      const digitFormatter = num => {
        return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M";
      };
      setColFour(digitFormatter(total));
    } else if (total > 999999999 && total < 1000000000000) {
      const digitFormatter = num => {
        return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + "B";
      };
      setColFour(digitFormatter(total));
    } else if (total > 999999999999 && total < 1000000000000000) {
      const digitFormatter = num => {
        return (
          Math.sign(num) * (Math.abs(num) / 1000000000000).toFixed(1) + "T"
        );
      };
      setColFour(digitFormatter(total));
    } else if (total < 1000) {
      setColFour(total);
    } else if (total > 1000000000000000) {
      setColFour("> a trillion");
    }
  };

  useEffect(() => {
    colTotal();
  }, [colOne, colTwo, colThree, colFour]);

  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          sm={6}
          md={3}
          style={{
            textAlign: "center",
            height: 50,
            border: "1px solid black",
            padding: 0
          }}
        >
          <input
            type="number"
            onChange={handleColOne}
            style={{ height: "100%", width: "100%", textAlign: "center" }}
          />
        </Col>
        <Col
          xs={12}
          sm={6}
          md={3}
          style={{
            textAlign: "center",
            height: 50,
            border: "1px solid black",
            padding: 0
          }}
        >
          <input
            type="number"
            onChange={handleColTwo}
            style={{ height: "100%", width: "100%", textAlign: "center" }}
          />
        </Col>
        <Col
          xs={12}
          sm={6}
          md={3}
          style={{
            textAlign: "center",
            height: 50,
            border: "1px solid black",
            padding: 0
          }}
        >
          <input
            type="number"
            onChange={handleColThree}
            style={{ height: "100%", width: "100%", textAlign: "center" }}
          />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={12}
          sm={6}
          md={3}
          style={{ textAlign: "center", height: 50, border: "1px solid black" }}
        >
          <p style={{ margin: 0 }}>{colFour}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
