import React, { useEffect, useState } from "react";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { days } from "./db";
import { getBusiness } from "../actions/userActions";
import { Button } from "react-bootstrap";

function BusinessSetting2() {
  const dispatch = useDispatch();

  const handleChange = e => {
    console.log(e.target.value);
  };

  const handleTimeChange = e => {
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
            <th>?פתוח</th>
            <th>יום</th>
          </tr>
        </thead>
        {/* <tbody>
          {days.map(day => (<tr key={day.name}></tr>)}
          <tr key={workingDays.sunday.name}>
            <td>
              <TimePicker
                value={workingDays.sunday.closing}
                onChange={handleTimeChange}
              />
            </td>
            <td>
              <TimePicker value={workingDays.sunday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                value={workingDays.sunday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.sunday.name}</td>
          </tr>
          <tr key={workingDays.monday.name}>
            <td>
              <TimePicker value={workingDays.monday.closing} />
            </td>
            <td>
              <TimePicker value={workingDays.monday.opening} />
            </td>
            <td>
              <Form.Check
                type='switch'
                id='custom-switch'
                value={workingDays.monday.isOpen}
                onChange={handleChange}
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
                id='custom-switch'
                value={workingDays.tuesday.isOpen}
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
                id='custom-switch'
                value={workingDays.wednesday.isOpen}
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
                value={workingDays.thursday.isOpen}
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
                defaultValue={workingDays.friday.isOpen}
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
                value={workingDays.saturday.isOpen}
                onChange={handleChange}
              />
            </td>
            <td>{workingDays.saturday.name}</td>
          </tr>
        </tbody> */}
      </Table>
    </div>
  );
}
export default BusinessSetting2;
