import React, { useEffect, useState } from "react";
import axios from "axios";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";
import { Table, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {} from "../actions/businessAction";
import { UPDATE_BUSINESS_LOGO_SUCCESS } from "../constants/businessConstant";

function BusinessSetting() {
  const business = useSelector(state => state.business);
  const { loading, error, token, info } = business;

  //TODO
  const handleBusinessName = e => {
    console.log("handleBusinessName");
  };

  const handleBusinessSlogan = e => {
    console.log("handleBusinessSlogan");
  };

  const uploadFileHandler = e => {
    console.log("uploadFileHandler");
  };

  return (
    <div className='business'>
      <h1>הגדרת העסק</h1>
      <div className='card'>
        <h6>שם העסק</h6>
        <input
          type='text'
          placeholder={info.businessName}
          style={{ marginBottom: "20px" }}
          onChange={handleBusinessName}></input>
        <h6>סלוגן</h6>
        <input
          type='text'
          placeholder={info.businessSlogan}
          style={{ marginBottom: "20px" }}
          onChange={handleBusinessSlogan}></input>
        <h6>העלאת לוגו</h6>
        <input
          type='file'
          id='logoImage'
          className='filename'
          onChange={uploadFileHandler}
        />
        <h6>העלאת תמונת רקע</h6>
        <input
          type='file'
          id='backgroundImage'
          className='filename'
          onChange={uploadFileHandler}></input>
      </div>
      <h3>שעות פתיחה</h3>
      <Table striped>
        <thead>
          <tr>
            <th>סגירה</th>
            <th>פתיחה</th>
            <th>?פתוח</th>
            <th>יום</th>
          </tr>
        </thead>
        <tbody>
          <tr key={info.workhours[0].name}>
            <td>
              <TimePicker
                time={info.workhours[0].name}
                // handleTimeChange={handleSundayClose}
              />
            </td>
            <td>
              <TimePicker
                time={info.workhours[0].name}
                // handleTimeChange={handleSundayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='sunday'
                // checked={sunday.isOpen}
                // onChange={e =>
                //   setSunday({ ...sunday, isOpen: e.target.checked })
                //}
              />
            </td>
            <td>{info.workhours[0].name}</td>
          </tr>
          {/* <tr key={monday.name}>
            <td>
              <TimePicker
                time={monday.closing}
                handleTimeChange={handleMondayClose}
              />
            </td>
            <td>
              <TimePicker
                time={monday.opening}
                handleTimeChange={handleMondayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='monday'
                checked={monday.isOpen}
                onChange={e =>
                  setMonday({ ...monday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{monday.name}</td>
          </tr>
          <tr key={tuesday.name}>
            <td>
              <TimePicker
                time={tuesday.closing}
                handleTimeChange={handleTuesdayClose}
              />
            </td>
            <td>
              <TimePicker
                time={tuesday.opening}
                handleTimeChange={handleTuesdayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='tuesday'
                checked={tuesday.isOpen}
                onChange={e =>
                  setTuesday({ ...tuesday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{tuesday.name}</td>
          </tr>
          <tr key={wednesday.name}>
            <td>
              <TimePicker
                time={wednesday.closing}
                handleTimeChange={handleWednesdayClose}
              />
            </td>
            <td>
              <TimePicker
                time={wednesday.opening}
                handleTimeChange={handleWednesdayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='wednesday'
                checked={wednesday.isOpen}
                onChange={e =>
                  setWednesday({ ...wednesday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{wednesday.name}</td>
          </tr>
          <tr key={thursday.name}>
            <td>
              <TimePicker
                time={thursday.closing}
                handleTimeChange={handleThursdayClose}
              />
            </td>
            <td>
              <TimePicker
                time={thursday.opening}
                handleTimeChange={handleThursdayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='thursday'
                checked={thursday.isOpen}
                onChange={e =>
                  setThursday({ ...thursday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{thursday.name}</td>
          </tr>
          <tr key={friday.name}>
            <td>
              <TimePicker
                time={friday.closing}
                handleTimeChange={handleFridayClose}
              />
            </td>
            <td>
              <TimePicker
                time={friday.opening}
                handleTimeChange={handleFridayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                checked={friday.isOpen}
                onChange={e =>
                  setFriday({ ...friday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{friday.name}</td>
          </tr>
          <tr key={saturday.name}>
            <td>
              <TimePicker
                time={saturday.closing}
                handleTimeChange={handleSaturdayClose}
              />
            </td>
            <td>
              <TimePicker
                time={saturday.opening}
                handleTimeChange={handleSaturdayOpen}
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='saturday'
                checked={saturday.isOpen}
                onChange={e =>
                  setSaturday({ ...saturday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{saturday.name}</td>
          </tr> */}
        </tbody>
      </Table>
      <Button className='updateButton'>עדכן</Button>
    </div>
  );
}
export default BusinessSetting;
