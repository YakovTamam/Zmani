import React, { useState } from "react";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { days } from "./db";

function BusinessSetting() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("00");

  const handleTime = e => {
    setHour(e.target.value);
  };

  const handleCheck = e => {
    console.log(e.target);
  };

  return (
    <div>
      <h1>הגדרת עסק</h1>
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
          {days.map(day => (
            <tr key={day.name}>
              <td>
                <TimePicker time={day.closing} />
              </td>
              <td>
                <TimePicker time={day.opening} />
              </td>
              <td>
                <Form.Check
                  type='switch'
                  id='custom-switch'
                  onChange={handleCheck}
                  checked={day.isOpen}
                />
              </td>
              <td>{day.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default BusinessSetting;
