import React, { useState } from "react";
import TimePicker from "../components/TimePicker";
import "./BusinessSetting.css";

function BusinessSetting() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("00");

  const handleHour = e => {
    setHour(e.target.value);
  };

  const handleMinute = e => {
    setMinute(e.target.value);
  };

  const day = [
    {
      name: "ראשון",
      opening: "8:00",
      closing: "17:00",
      isOpen: true,
    },
    {
      name: "שני",
      opening: "8:00",
      closing: "17:00",
      isOpen: true,
    },
    {
      name: "שלישי",
      opening: "8:00",
      closing: "17:00",
      isOpen: true,
    },
    {
      name: "רביעי",
      opening: "8:00",
      closing: "17:00",
      isOpen: true,
    },
    {
      name: "חמישי",
      opening: "8:00",
      closing: "17:00",
      isOpen: true,
    },
    {
      name: "שישי",
      opening: "8:00",
      closing: "13:00",
      isOpen: true,
    },
    {
      name: "שבת",
      opening: "8:00",
      closing: "17:00",
      isOpen: false,
    },
  ];

  return (
    <div>
      <h1>הגדרת עסק</h1>
      <h2>שעות פתיחה</h2>
      <TimePicker hour={hour} handleHour={handleHour} />
      <TimePicker hour={hour} handleHour={handleHour} pickTime={false} />
    </div>
  );
}
export default BusinessSetting;
