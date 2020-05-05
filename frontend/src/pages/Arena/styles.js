import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  margin: auto;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px 0 70px 0;

  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.25;
    color: #0aa1a7;
    margin: 25px 0 45px 0;
  }

  span {
    max-width: 950px;
    font-size: 18px;
    line-height: 2;
    text-align: center;
    color: #5a5a5a;
  }
`;

export const Guests = styled.div`
  background: linear-gradient(to top, #0aa1a7 50%, white 50%);

  .slide-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 10px;

    img {
      max-width: 100px;
      margin-bottom: -40px;
      margin-top: 40px;
      z-index: 2;
    }
  }

  .speaker-wrapper {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.11);
    border: solid 1px #f1f1f1;
    background-color: #fcfcfc;

    .speaker-name {
      font-size: 19px;
      font-weight: bold;
      line-height: 1.95;
      text-align: center;
      color: #f28719;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .speaker-description {
      font-size: 18px;
      line-height: 1.44;
      text-align: center;
      color: #5a5a5a;
      padding: 0 20px;
    }
  }

  .carousel {
    position: relative;

    ul {
      display: flex;
      padding: 0 20px;
    }
  }

  .carousel__back-button {
    position: absolute;
    top: 40%;
    left: 0;
    background: none;
    border: none;
  }

  .carousel__next-button {
    position: absolute;
    top: 40%;
    right: 0;
    background: none;
    border: none;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: #f28719;
  margin-bottom: 60px;

  &.sponsers {
    margin-bottom: 0;
  }
`;

export const Information = styled.div`
  background-color: #29a1a7;

  div {
    &.inner {
      display: flex;
      justify-content: space-around;
      padding-bottom: 140px;
      margin-bottom: 80px;

      .lecture-info-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-info-content {
          display: flex;
          justify-content: center;
          flex-direction: column;

          .lecture {
            font-size: 18px;
            line-height: 1.78;
            text-align: left;
            color: #ffffff;
            margin-bottom: 20px;

            strong {
              color: #94d4d3;
            }

            a {
              color: white;
              border: 1px solid #f28719;
              border-radius: 4px;
              background: #f28719;
              font-size: 14px;
              font-weight: bold;
              padding: 0 5px;
              margin-left: 10px;
            }
          }
        }
      }

      .title-info {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        margin-bottom: 30px;
        width: 425px;

        img {
          margin-right: 20px;
        }
      }
    }
  }
`;

export const Suporters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Comments = styled.div`
  margin-top: 80px;

  .comments-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 820px;
    margin: auto;

    div {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: center;
        color: #5a5a5a;

        &.comments-title {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.17;
          text-align: center;
          color: #5a5a5a;
          margin-top: 20px;
        }
      }
      img {
        max-width: 200px;
      }
    }

    span {
      width: 70%;
      font-size: 18px;
      line-height: 1.67;
      text-align: left;
      color: #5a5a5a;
    }
  }

  .carousel {
    position: relative;

    ul {
      display: flex;
    }
  }

  .carousel__back-button {
    position: absolute;
    top: 40%;
    left: 0;
    background: none;
    border: none;
  }

  .carousel__next-button {
    position: absolute;
    top: 40%;
    right: 0;
    background: none;
    border: none;
  }
`;
