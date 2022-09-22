import React from "react";
import { Button } from "react-bootstrap";
import "./MyPage.css";

const MyPage = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}>
        <img
          src={
            "https://cdn.pixabay.com/photo/2021/11/15/11/00/barber-shop-6797761_960_720.jpg"
          }
          alt='backround'
          style={{ width: "398px", height: "265.33px" }}
        />
        <div
          className='logo-backround'
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            backgroundColor: "black",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "205.33px",
          }}>
          <img
            src={
              "https://img.freepik.com/premium-vector/vintage-barbershop-logo-template_441059-26.jpg?w=740"
            }
            alt='logo'
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "black",
              position: "absolute",
            }}
          />
          <Button
            id='mark-appointment-button'
            style={{
              position: "fixed",
              bottom: "0",
              width: "100%",
              height: "65px",
              borderRadius: "0",
              fontWeight: "bold",
            }}>
            הזמן תור
          </Button>
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
          marginTop: "55px",
        }}>
        GENTELMEN
      </h2>
      <div
        style={{
          textAlign: "center",
        }}>
        !המספרה הכי טובה בעיר
      </div>
      <div className='opening-houres'>
        <h4
          style={{
            textAlign: "center",
            borderBottom: "1px solid black",
            fontWeight: "bold",
          }}>
          שעות פתיחה
        </h4>
      </div>
      <div
        className='reviews'
        style={{
          backgroundColor: "lightgray",
          height: "150px",
          marginTop: "15px",
        }}>
        <h5
          style={{
            textAlign: "right",
            fontWeight: "bold",
            margin: "10px",
          }}>
          ביקורות
        </h5>
      </div>
    </div>
  );
};

export default MyPage;
