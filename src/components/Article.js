import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import { Checkbox } from "@mui/material";
const ArticleContainer = styled.div`
  padding-top: 40px;
  min-height: 100vh;
  & img {
    width: 100%;
    display: block;
    height: 500px;
    object-fit: cover;
    border-radius: 4px;
    filter: drop-shadow(0px 3px 2px black);
    margin-bottom: 30px;
    transition: all 0.5s;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  & .tag {
    text-transform: uppercase;
    letter-spacing: 2px;
    letter-spacing: 1px;
    color: #db5931;
  }
  & img:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  & p {
    margin: 20px 0px;
  }
`;
const MainHeading = styled.h2`
  position: relative;
  font-size: 30px;
  margin-top: 10px;
  text-transform: capitalize;
  & div {
    margin-top: 30px;
    width: 80px;
    border: 0.3px solid #db5931;

    border-radius: 2px;
  }
`;
const Title = styled.div`
  width: 100%;
  & sapm {
  }
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;

  border: none;
  font-weight: 600;
  padding-bottom: 30px;
  border-bottom: 2px solid #db5931;
  margin-top: 30px;
  &:focus {
    outline: none !important;
  }

  &::placeholder {
  }
  &::focus {
    display: none;
  }
`;
const Form = styled.form`
  width: 100%;

  & button {
    background: #db5931;
    padding: 10px 30px;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 4px;
    margin-bottom: 30px;
  }
  & div {
    display: flex;
    align-items: center;
  }
`;
export default function Article() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://5dd8e1ef505c590014d3be23.mockapi.io/articles/1",
      responseType: "json",
    }).then(function (response) {
      setData(response.data);
    });
  }, [id]);
  console.log(data);

  return (
    <div>
      {data && (
        <ArticleContainer>
          <img src={data.image} alt="" />
          <Title>
            <span className="tag">Travel</span>
            <MainHeading>
              {data.title}
              <div></div>
            </MainHeading>
          </Title>

          <p>{data.description}</p>
          <p>{data.description}</p>

          <hr />
        </ArticleContainer>
      )}

      <Form>
        <MainHeading>Leave a Reply</MainHeading>

        <Input placeholder="Your commment..."></Input>
        <Row>
          <Col xs={6}>
            <Input placeholder="Your name *" required></Input>
          </Col>
          <Col xs={6}>
            <Input placeholder="Your email *"></Input>
          </Col>
        </Row>

        <Input placeholder="Website URL"></Input>

        <div>
          <Checkbox></Checkbox> Save my name , email and website in this browser
          for the next time I comment
        </div>

        <button>Post Comment</button>
      </Form>
    </div>
  );
}
