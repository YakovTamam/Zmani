import React, { useEffect, useState } from "react";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { days } from "./db";
import {
  getBusinessWorkingDays,
  updateBusinessWorkingDays,
} from "../actions/businessAction";

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
  const [tuesday, setTuesday] = useState(userInfo.business.workingDays.tuesday);
  const [thursday, setThursday] = useState(
    userInfo.business.workingDays.thursday
  );
  const [wednesday, setWednesday] = useState(
    userInfo.business.workingDays.wednesday
  );
  const [friday, setFriday] = useState(userInfo.business.workingDays.friday);
  const [saturday, setSaturday] = useState(
    userInfo.business.workingDays.saturday
  );

  function handleSundayOpen(val) {
    setSunday({ ...sunday, opening: val });
  }
  function handleSundayClose(val) {
    setSunday({ ...sunday, closing: val });
  }
  function handleMondayOpen(val) {
    setMonday({ ...monday, opening: val });
  }
  function handleMondayClose(val) {
    setMonday({ ...monday, closing: val });
  }
  function handleTuesdayOpen(val) {
    setTuesday({ ...tuesday, opening: val });
  }
  function handleTuesdayClose(val) {
    setTuesday({ ...tuesday, closing: val });
  }
  function handleWednesdayOpen(val) {
    setWednesday({ ...wednesday, opening: val });
  }
  function handleWednesdayClose(val) {
    setWednesday({ ...wednesday, closing: val });
  }
  function handleThursdayOpen(val) {
    setThursday({ ...thursday, opening: val });
  }
  function handleThursdayClose(val) {
    setThursday({ ...thursday, closing: val });
  }
  function handleFridayOpen(val) {
    setFriday({ ...friday, opening: val });
  }
  function handleFridayClose(val) {
    setFriday({ ...friday, closing: val });
  }
  function handleSaturdayOpen(val) {
    setSaturday({ ...saturday, opening: val });
  }
  function handleSaturdayClose(val) {
    setSaturday({ ...saturday, closing: val });
  }

  const con = e => {
    dispatch(getBusinessWorkingDays());
    dispatch(
      updateBusinessWorkingDays({
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
      })
    );
  };

  // useEffect(() => {
  //   if()
  // })

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
          <tr key={sunday.name}>
            <td>
              <TimePicker
                time={sunday.closing}
                handleTimeChange={handleSundayClose}
              />
            </td>
            <td>
              <TimePicker
                time={sunday.opening}
                handleTimeChange={handleSundayOpen}
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
                handleTimeChange={handleThursdayOpen}
              />
            </td>
            <td>
              <TimePicker
                time={thursday.opening}
                handleTimeChange={handleThursdayClose}
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
          </tr>
        </tbody>
      </Table>
      <button onClick={con}>עדכן</button>
    </div>
  );
}
export default BusinessSetting;
