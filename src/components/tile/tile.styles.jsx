import styled from "styled-components";

export const TileContainer = styled.div`
  border-radius: 1vmax;
  position: absolute;
  transition: transform 800ms ease;

  &:nth-child(1) {
    background-color: rgb(255, 238, 88);
    height: 14%;
    width: 20%;
    left: 5%;
    top: 5%;
  }
  &:nth-child(2) {
    background-color: rgb(66, 165, 245);
    height: 24%;
    width: 14%;
    left: 42%;
    top: 12%;
  }
  &:nth-child(3) {
    background-color: rgb(239, 83, 80);
    height: 18%;
    width: 16%;
    left: 12%;
    top: 34%;
  }
  &:nth-child(4) {
    background-color: rgb(102, 187, 106);
    height: 14%;
    width: 12%;
    left: 45%;
    top: 48%;
  }
  &:nth-child(5) {
    background-color: rgb(171, 71, 188);
    height: 16%;
    width: 32%;
    left: 8%;
    top: 70%;
  }
  &:nth-child(6) {
    background-color: rgb(255, 167, 38);
    height: 24%;
    width: 24%;
    left: 68%;
    top: 8%;
  }
  &:nth-child(7) {
    background-color: rgb(63, 81, 181);
    height: 16%;
    width: 20%;
    left: 50%;
    top: 74%;
  }
  &:nth-child(8) {
    background-color: rgb(141, 110, 99);
    height: 24%;
    width: 18%;
    left: 72%;
    top: 42%;
  }
  &:nth-child(9) {
    background-color: rgb(250, 250, 250);
    height: 10%;
    width: 8%;
    left: 84%;
    top: 84%;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover > img {
    opacity: 1;
    transform: scale(1.01);
  }
`;

export const TileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 800ms ease, transform 800ms ease;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;