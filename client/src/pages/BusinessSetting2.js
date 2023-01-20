// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import TimePicker from "../components/TimePicker";
// import "./BusinessSetting.css";
// import { Table, Form, Button } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getBusinessWorkingDays,
//   updateBusinessBackground,
//   updateBusinessLogo,
//   updateBusinessName,
//   updateBusinessSlogan,
//   updateBusinessWorkingDays,
// } from "../actions/businessAction";
// import { UPDATE_BUSINESS_LOGO_SUCCESS } from "../constants/businessConstant";

// function BusinessSetting() {
//   const dispatch = useDispatch();

//   const userLogin = useSelector(state => state.userLogin);
//   const { userInfo } = userLogin;

//   const business = useSelector(state => state.business);
//   const { workingDays, businessName, slogan, backgroundImage, logoImage } =
//     business;

//   const [logoImg, setLogoImage] = useState(logoImage);
//   const [backgroundImg, setBackgroundImage] = useState(backgroundImage);
//   const [uploading, setUploading] = useState(false);
//   const [name, setName] = useState(businessName);
//   const [businessSlogan, setBusinessSlogan] = useState(slogan);
//   const [sunday, setSunday] = useState(workingDays.sunday);
//   const [monday, setMonday] = useState(workingDays.monday);
//   const [tuesday, setTuesday] = useState(workingDays.tuesday);
//   const [thursday, setThursday] = useState(workingDays.thursday);
//   const [wednesday, setWednesday] = useState(workingDays.wednesday);
//   const [friday, setFriday] = useState(workingDays.friday);
//   const [saturday, setSaturday] = useState(workingDays.saturday);

//   function handleSundayOpen(val) {
//     setSunday({ ...sunday, opening: val });
//   }
//   function handleSundayClose(val) {
//     setSunday({ ...sunday, closing: val });
//   }
//   function handleMondayOpen(val) {
//     setMonday({ ...monday, opening: val });
//   }
//   function handleMondayClose(val) {
//     setMonday({ ...monday, closing: val });
//   }
//   function handleTuesdayOpen(val) {
//     setTuesday({ ...tuesday, opening: val });
//   }
//   function handleTuesdayClose(val) {
//     setTuesday({ ...tuesday, closing: val });
//   }
//   function handleWednesdayOpen(val) {
//     setWednesday({ ...wednesday, opening: val });
//   }
//   function handleWednesdayClose(val) {
//     setWednesday({ ...wednesday, closing: val });
//   }
//   function handleThursdayOpen(val) {
//     setThursday({ ...thursday, opening: val });
//   }
//   function handleThursdayClose(val) {
//     setThursday({ ...thursday, closing: val });
//   }
//   function handleFridayOpen(val) {
//     setFriday({ ...friday, opening: val });
//   }
//   function handleFridayClose(val) {
//     setFriday({ ...friday, closing: val });
//   }
//   function handleSaturdayOpen(val) {
//     setSaturday({ ...saturday, opening: val });
//   }
//   function handleSaturdayClose(val) {
//     setSaturday({ ...saturday, closing: val });
//   }

//   const handleBusinessName = e => {
//     setName(e.target.value);
//   };

//   const handleBusinessSlogan = e => {
//     setBusinessSlogan(e.target.value);
//   };

//   const update = e => {
//     // dispatch(
//     //   updateBusinessWorkingDays({
//     //     sunday,
//     //     monday,
//     //     tuesday,
//     //     wednesday,
//     //     thursday,
//     //     friday,
//     //     saturday,
//     //   })
//     // );
//     console.log(backgroundImg);
//     console.log(logoImg);
//   };

//   useEffect(() => {
//     if (!workingDays) {
//       dispatch(getBusinessWorkingDays());
//     }
//   }, [dispatch, workingDays]);

//   const x = async e => {
//     const { data } = await axios.post("/api/uploads");
//   };

//   const uploadFileHandler = async e => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);
//     setUploading(true);

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       };

//       const { data } = await axios.post("/api/uploads", formData, config);
//       if (e.target.id === "logoImage") {
//         setLogoImage(data);
//         dispatch(updateBusinessLogo(data));
//       } else {
//         setBackgroundImage(data);
//         dispatch(updateBusinessBackground(data));
//       }
//       setUploading(false);
//     } catch (error) {
//       console.error(error);
//       setUploading(false);
//     }
//   };

//   return (
//     <div className='business'>
//       <h1>הגדרת העסק</h1>
//       <div className='card'>
//         <h6>שם העסק</h6>
//         <input
//           type='text'
//           placeholder={businessName}
//           style={{ marginBottom: "20px" }}
//           onChange={handleBusinessName}></input>
//         <h6>סלוגן</h6>
//         <input
//           type='text'
//           placeholder={businessSlogan}
//           style={{ marginBottom: "20px" }}
//           onChange={handleBusinessSlogan}></input>
//         <h6>העלאת לוגו</h6>
//         <input
//           type='file'
//           id='logoImage'
//           className='filename'
//           onChange={uploadFileHandler}
//         />
//         <h6>העלאת תמונת רקע</h6>
//         <input
//           type='file'
//           id='backgroundImage'
//           className='filename'
//           onChange={uploadFileHandler}></input>
//       </div>
//       <h3>שעות פתיחה</h3>
//       <Table striped>
//         <thead>
//           <tr>
//             <th>סגירה</th>
//             <th>פתיחה</th>
//             <th>?פתוח</th>
//             <th>יום</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr key={sunday.name}>
//             <td>
//               <TimePicker
//                 time={sunday.closing}
//                 handleTimeChange={handleSundayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={sunday.opening}
//                 handleTimeChange={handleSundayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='sunday'
//                 checked={sunday.isOpen}
//                 onChange={e =>
//                   setSunday({ ...sunday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{sunday.name}</td>
//           </tr>
//           <tr key={monday.name}>
//             <td>
//               <TimePicker
//                 time={monday.closing}
//                 handleTimeChange={handleMondayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={monday.opening}
//                 handleTimeChange={handleMondayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='monday'
//                 checked={monday.isOpen}
//                 onChange={e =>
//                   setMonday({ ...monday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{monday.name}</td>
//           </tr>
//           <tr key={tuesday.name}>
//             <td>
//               <TimePicker
//                 time={tuesday.closing}
//                 handleTimeChange={handleTuesdayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={tuesday.opening}
//                 handleTimeChange={handleTuesdayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='tuesday'
//                 checked={tuesday.isOpen}
//                 onChange={e =>
//                   setTuesday({ ...tuesday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{tuesday.name}</td>
//           </tr>
//           <tr key={wednesday.name}>
//             <td>
//               <TimePicker
//                 time={wednesday.closing}
//                 handleTimeChange={handleWednesdayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={wednesday.opening}
//                 handleTimeChange={handleWednesdayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='wednesday'
//                 checked={wednesday.isOpen}
//                 onChange={e =>
//                   setWednesday({ ...wednesday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{wednesday.name}</td>
//           </tr>
//           <tr key={thursday.name}>
//             <td>
//               <TimePicker
//                 time={thursday.closing}
//                 handleTimeChange={handleThursdayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={thursday.opening}
//                 handleTimeChange={handleThursdayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='thursday'
//                 checked={thursday.isOpen}
//                 onChange={e =>
//                   setThursday({ ...thursday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{thursday.name}</td>
//           </tr>
//           <tr key={friday.name}>
//             <td>
//               <TimePicker
//                 time={friday.closing}
//                 handleTimeChange={handleFridayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={friday.opening}
//                 handleTimeChange={handleFridayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='custom-switch'
//                 checked={friday.isOpen}
//                 onChange={e =>
//                   setFriday({ ...friday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{friday.name}</td>
//           </tr>
//           <tr key={saturday.name}>
//             <td>
//               <TimePicker
//                 time={saturday.closing}
//                 handleTimeChange={handleSaturdayClose}
//               />
//             </td>
//             <td>
//               <TimePicker
//                 time={saturday.opening}
//                 handleTimeChange={handleSaturdayOpen}
//               />
//             </td>
//             <td>
//               <Form.Check
//                 type='switch'
//                 id='saturday'
//                 checked={saturday.isOpen}
//                 onChange={e =>
//                   setSaturday({ ...saturday, isOpen: e.target.checked })
//                 }
//               />
//             </td>
//             <td>{saturday.name}</td>
//           </tr>
//         </tbody>
//       </Table>
//       <Button className='updateButton' onClick={con}>
//         עדכן
//       </Button>
//     </div>
//   );
// }
// export default BusinessSetting;
