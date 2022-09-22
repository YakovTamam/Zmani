import React, { useState } from "react";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function BusinessSetting() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("00");

  const handleHour = e => {
    setHour(e.target.value);
  };

  const handleMinute = e => {
    setMinute(e.target.value);
  };

  const handleCheck = e => {
    console.log(e.target.value);
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                onChange={handleCheck}
                checked={true}
              />
            </td>
            <td>ראשון</td>
          </tr>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check type='switch' id='custom-switch' checked={true} />
            </td>
            <td>שני</td>
          </tr>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check type='switch' id='custom-switch' checked={true} />
            </td>
            <td>שלישי</td>
          </tr>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check type='switch' id='custom-switch' checked={true} />
            </td>
            <td>רביעי</td>
          </tr>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check type='switch' id='custom-switch' checked={true} />
            </td>
            <td>חמישי</td>
          </tr>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check type='switch' id='custom-switch' checked={true} />
            </td>
            <td>שישי</td>
          </tr>
          <tr>
            <td>
              <TimePicker />
            </td>
            <td>
              <TimePicker />
            </td>
            <td>
              <Form.Check type='switch' id='custom-switch' checked={false} />
            </td>
            <td>שבת</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default BusinessSetting;
