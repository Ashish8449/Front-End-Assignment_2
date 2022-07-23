import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import axios from "axios";
import img from "../asset/cup.jpg";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
const Latest = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;
  margin-top: 20px;
  & a {
    text-decoration: none !important;
    color: none;
  }
  & img {
    width: 120px;
    filter: drop-shadow(0px 3px 2px black);
    border-radius: 4px;
  }
  & .content {
    margin-left: 20px;
  }
  & .content h4 {
    font-size: 16px;
    line-height: 24px;
    word-spacing: 2px;
  }
  & .datetime {
    /* position: absolute; */
    bottom: 20px;
  }
  & .datetime .vertical {
    background-color: #c8c9ca;

    margin: 0 5px;
    padding-left: 1px;
  }
`;
const Category = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin: 20px 0px;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
  filter: drop-shadow(0px 3px 2px black);
  /* background: url("https://loremflickr.com/cache/resized/65535_52193077590_77f5abe8b1_z_640_480_nofilter.jpg"); */
  background-image: url(${img});
  background-size: cover;
  background-position: center;

  & button {
    background: #db5931;
    padding: 10px 30px;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 4px;
  }
  & button:hover {
    background: transparent;
    /* color: #db5931; */
    font-weight: bold;
    courser: pointer;
  }
`;
const SocialIcons = styled.div`
  color: #db5931;
  margin: 20px 0px;
  display: flex;
  & svg {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  & .imgbox {
    background-color: #db5931;
    /* width: 50px; */
    padding: 10px;
    margin: 15px;
    border-radius: 50%;
  }
  & imgbox img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;
const RightContainer = styled.div`
  padding-top: 40px;
`;

export default function Right() {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    axios
      .get("https://5dd8e1ef505c590014d3be23.mockapi.io/articles")
      .then((response) => {
        setLatest(
          response.data
            .filter((ele, indx) => indx < 4)
            .map((ele) => {
              let now = new Date(ele.createdAt);

              ele.createdAt =
                months[now.getMonth()] +
                " " +
                now.getDate() +
                "," +
                now.getFullYear();
              return ele;
            })
        );
      });
  }, []);

  return (
    <RightContainer>
      <MainHeading>
        Social Network <div></div>
      </MainHeading>
      {/* social media icons */}
      <SocialIcons>
        {/* <FacebookSharpIcon /> */}
        <div className="imgbox">
          <img src="/images/insta.svg" alt="" srcset="" />
        </div>{" "}
        <div className="imgbox">
          <img src="/images/twiter.svg" alt="" srcset="" />
        </div>{" "}
        <div className="imgbox">
          <img src="/images/facebook.svg" alt="" srcset="" />
        </div>
      </SocialIcons>

      <MainHeading>
        Latest Posts <div></div>
      </MainHeading>
      {/* latest */}
      <div>
        {latest.map((ele, indx) => (
          <Link
            to={`/articles/${ele.id}`}
            style={{ textDecoration: "none" }}
            key={ele.id}
          >
            <Latest>
              <img src={ele.image} alt="" />
              <div className="content">
                <h4>{ele.authorTitle}</h4>
                <div className="datetime">
                  <span>by admin</span>
                  <span className="vertical"></span>

                  <span>{ele.createdAt}</span>
                </div>
              </div>
            </Latest>
          </Link>
        ))}
      </div>

      <div className="categories">
        <MainHeading>
          Categories <div></div>
        </MainHeading>
        <Category>
          <button>feature</button>
        </Category>{" "}
        <Category>
          <button>Lifestyle</button>
        </Category>{" "}
        <Category>
          <button>Living</button>
        </Category>{" "}
        <Category>
          <button>Travel</button>
        </Category>
      </div>
    </RightContainer>
  );
}
