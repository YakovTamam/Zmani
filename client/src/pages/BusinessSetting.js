import React, { useEffect, useState } from "react";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { days } from "./db";

function BusinessSetting() {
  const dispatch = useDispatch();

  const business = useSelector(state => state.business);
  const { business: userBusiness } = business;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const handleChange = e => {
    days[0].closing = e.target.value;
  };

  const [check, setCheck] = useState(true);

  const workingDays = userInfo.business.workingDays;

  const [sunday, setSunday] = useState(userInfo.business.workingDays.sunday);
  const [monday, setMonday] = useState(userInfo.business.workingDays.monday);

  function handleTimeChange(val) {
    setSunday({ ...sunday, opening: val });
  }

  const con = e => {
    console.log(sunday, monday);
  };

  return (
    <div>
      <h1>הגדרת עסק</h1>
      <h3>שעות פתיחה</h3>
      <button onClick={con}>g</button>
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
          <tr key={sunday.name}>
            <td>
              <TimePicker
                value={sunday.closing}
                handleTimeChange={handleTimeChange}
              />
            </td>
            <td>
              <TimePicker
                value={sunday.opening}
                handleTimeChange={handleTimeChange}
                onChange={e =>
                  setSunday({ ...sunday, opening: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='sunday'
                checked={sunday.isOpen}
                onChange={e =>
                  setSunday({ ...sunday, isOpen: e.target.checked })
                }
              />
            </td>
            <td>{sunday.name}</td>
          </tr>
          <tr key={monday.name}>
            <td>
              <TimePicker value={monday.closing} />
            </td>
            <td>
              <TimePicker value={monday.opening} />
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
            <td>{workingDays.monday.name}</td>
          </tr>
          <tr key={workingDays.tuesday.name}>
            <td>
              <TimePicker value={workingDays.tuesday.closing} />
            </td>
            <td>
              <TimePicker value={workingDays.tuesday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='tuesday'
                checked={workingDays.tuesday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.tuesday.name}</td>
          </tr>
          <tr key={workingDays.wednesday.name}>
            <td>
              <TimePicker value={workingDays.wednesday.closing} />
            </td>
            <td>
              <TimePicker value={workingDays.wednesday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='wednesday'
                checked={workingDays.wednesday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.wednesday.name}</td>
          </tr>
          <tr key={workingDays.thursday.name}>
            <td>
              <TimePicker value={workingDays.thursday.closing} />
            </td>
            <td>
              <TimePicker value={workingDays.thursday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                checked={workingDays.thursday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.thursday.name}</td>
          </tr>
          <tr key={workingDays.friday.name}>
            <td>
              <TimePicker value={workingDays.friday.closing} />
            </td>
            <td>
              <TimePicker value={workingDays.friday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                checked={workingDays.friday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.friday.name}</td>
          </tr>
          <tr key={workingDays.saturday.name}>
            <td>
              <TimePicker value={workingDays.saturday.closing} />
            </td>
            <td>
              <TimePicker value={workingDays.saturday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                checked={workingDays.saturday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.saturday.name}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default BusinessSetting;
