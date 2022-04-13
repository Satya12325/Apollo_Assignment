



import { useState, useEffect } from "react";
import * as React from "react";
// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { v4 as uuid } from "uuid";
import axios from "axios";
import "./Home.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom"




export default function Mediciene(){
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [date, setDate] = useState(null); 
  const [slotes, setSlotes] = useState(null); 
  const [books, setBooks] = useState([]);
  const [isLooding, setLooding] = useState(true);
  const R_time = [
    "9:00",
    "9:20",
    "9:40",
    "10:00",
    "10:20",
    "10:40",
    "11:00",
    "11:20",
    "11:40",
    "12:00",
    "12:20",
    "12:40",
    "13:00",
    "14:20",
    "14:40",
    "15:00",
    "15:20",
    "15:40",
  ];
  let neviget = useNavigate()
  const getData = async () => {
    const data = await axios.get(`https://appoloapi.herokuapp.com/mediciene`);
    console.log(data.data);
    setLooding(true);
    setBooks(data.data);
    setLooding(false);
  };

 
  const handleClick = async () => {
      let f =0;
      if(name===""|| age==="" || date===""|| slotes===""){
        alert("Please fill all your details")
        return false;
    }
    for (let i = 0; i < books.length; i++) {
      if (slotes === books[i].time && date === books[i].date) {
        alert("This Slot is already Booked");
        setSlotes("");
        return;
      }
      else{
          f=1;
      }
    }
if(f=1){
    const payload = {
      id: uuid(),
      name: name,
      age: age,
      date: date,
      time: slotes,
    };
    const config = {
      url: "https://appoloapi.herokuapp.com/mediciene",
      method: "POST",
      data: payload,
    };
    

    await axios(config);

}
await getData();
  };

  const handleChange = (e) => {
    setSlotes(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLooding) {
    return <h1>Looding...</h1>;
  }

  return (
    <div className="InputBackground">
      <div>
        <div style={{ width: "70%", margin: "auto" }}>
        < ArrowBackIcon style={{fontSize:"50px",color:"orange",cursor: "pointer"}}
        onClick={() => neviget("/")}
        />
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          ></div>
        </div>

        
        <div className="Input_container">
          <div>
            Patient name :{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            Patient age :{" "}
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            Date:{" "}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div style={{}}>
            Time :{" "}
            
            <Select
              style={{ width: "70%", color: "black", height: "30px" }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={slotes}
              onChange={handleChange}
            >
              {R_time?.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
           
          </div>
          <button onClick={handleClick}>Submit</button>
        </div>
        <div>
              <h3 style={{textAlign: "center",color: "white"}}>
                  Docyor Appointment List
              </h3>
              <div style={{width: '70%', margin:"auto"}}>
                  <div style={{display: "flex", justifyContent: "space-between",textAlign: "center",color:"blue"}}>
                      <div>Sl.No</div>
                      <div>Name</div>
                      <div>Date</div>
                      <div>Time</div>

                  </div>
                  {
                      books?.map((item,i)=>{
                          return(
                            <div style={{display: "flex", justifyContent: "space-between",textAlign: "center"}}>
                      <div>{i+1}</div>
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                  </div>
                          )
                      })
                  }
                  

              </div>
          </div>
      </div>
    </div>
  );
}
