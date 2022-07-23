import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import axios from "axios";
const Card = styled.div`
  width: 100%;
  margin: 20px 0;
  padding-top: 30px;

  height: 100%;
  position: relative;
  & img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 15px;
    max-height: 500px;
    filter: drop-shadow(0px 4px 2px black);
  }
  & a {
    text-decoration: none;
    color: black !important;
    display: flex;
    align-items: center;
    margin-top: auto;
    position: absolute;
    bottom: 0;
  }
  & a svg {
    color: #db5931;
    margin-top: 2px;
    margin-left: 10px;
  }
`;

const MainHeading = styled.h2`
  position: relative;
  font-size: 30px;
  & div {
    margin-top: 20px;
    width: 80px;
    border: 0.3px solid #db5931;

    border-radius: 2px;
  }
`;
const Title = styled.div`
  width: 100%;
  & sapm {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: white;
  }
  & .tag {
    text-transform: uppercase;
    letter-spacing: 2px;
    letter-spacing: 1px;
    color: #db5931;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin: 40px;
  justify-content: center;
  & button {
    color: #db5931;
    margin: 10px;
    padding: 10px;
    border: none;
    width: 50px;
    background: white;
    border: 1px solid #db5931;
    border-radius: 4px;
  }
  & button svg {
    pointer-events: none;
  }
`;

const MAX_PAGE = 2;
export default function Articles() {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState([]);

  useState(() => {
    // fetch all articles from the api
    axios
      .get("https://5dd8e1ef505c590014d3be23.mockapi.io/articles")
      .then((response) => {
        setArticles(response.data);
        setShowArticles(response.data);
        setPage(1);
      });
  }, []);

  useEffect(() => {
    const start = (page - 1) * 5;

    setShowArticles(
      articles.filter((ele, indx) => indx >= start && indx < start + 5)
    );
  }, [page, articles]);

  const changePageHandler = (e) => {
    e.preventDefault();

    const val = Number(e.target.value);
    setPage(val);
 
  };

  const pageChangeHandler = (e) => {
    e.preventDefault();
    let val = Number(e.target.value);
 
    if (val === 1) {
      setPage(Math.min(MAX_PAGE, page + 1));
    } else {
      setPage(Math.max(1, page - 1));
    }
  };
  return (
    <div>
      <Row>
        {showArticles.map((ele, indx) => (
          <Col md={indx === 0 ? 12 : 6} key={ele.id}>
            <Card>
              <img src={ele.image} alt="img" />
              <Title>
                <span className="tag">Travel</span>
                <MainHeading>
                  {ele.authorTitle.split("").slice(0, 40)}
                  <div></div>
                </MainHeading>
              </Title>
              <p>{ele.shortDescription.slice(0, 150)} ...</p>

              <Link to="3">
                {" "}
                Read more <ArrowRightAltSharpIcon />{" "}
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

      <Buttons>
        <button value={-1} onClick={pageChangeHandler}>
          <ArrowBackSharpIcon />
        </button>{" "}
        <button onClick={changePageHandler} value={1}>
          {1}
        </button>
        <button onClick={changePageHandler} value={2}>
          {2}
        </button>
        <button onClick={pageChangeHandler} value={1}>
          <ArrowRightAltSharpIcon />
        </button>
      </Buttons>
    </div>
  );
}
