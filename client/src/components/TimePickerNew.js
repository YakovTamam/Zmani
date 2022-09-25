import React from "react";
import "./TimePicker.css";

const TimePicker = props => {
  return (
    <div>
      <select value={props.hour} onChange={props.handleHour}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
        <option value='13'>13</option>
        <option value='14'>14</option>
        <option value='15'>15</option>
        <option value='16'>16</option>
        <option value='17'>17</option>
        <option value='18'>18</option>
        <option value='19'>19</option>
        <option value='20'>20</option>
        <option value='21'>21</option>
        <option value='22'>22</option>
        <option value='23'>23</option>
        <option value='00'>00</option>
      </select>
      {" : "}
      <select value={props.hour} onChange={props.handleHour}>
        <option value='00'>00</option>
        <option value='05'>05</option>
        <option value='10'>10</option>
        <option value='4'>15</option>
        <option value='5'>20</option>
        <option value='6'>25</option>
        <option value='7'>30</option>
        <option value='8'>35</option>
        <option value='9'>40</option>
        <option value='10'>45</option>
        <option value='11'>50</option>
        <option value='12'>55</option>
      </select>
    </div>
  );
};

export default TimePicker;
