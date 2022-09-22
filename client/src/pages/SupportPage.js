import React, { useState } from "react";
import { TimePicker } from "react-ios-time-picker";

function SupportPage() {
  const [value, onChange] = useState("10:00");
  return (
    <div>
      <h1>Support</h1>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}
export default SupportPage;
