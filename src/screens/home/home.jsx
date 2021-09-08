import "./home.scss";
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import CardExampleCard from "../../components/card/card";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setChetBox] = useState(false);

  const changeFirstName = (e) => {
    setFirstName([e.target.value]);
  };
  const changeLastName = (e) => {
    setLastName([e.target.value]);
  };
  const changeChetBox = () =>{
    setChetBox(!checkBox);
  }

  
const data = [
  {
    id: 1,
    name: "Dell VivoBook A415EA i5 1135G7 (AM888T)",
    hang: "Dell",
    gia: "25.250.000đ",
  },
  {
    id: 2,
    name: "Asus ZenBook UX425EA i5 1135G7 (KI429T)",
    hang: "Asus",
    gia: "9.300.000đ",
  },
  {
    id: 3,
    name: "HP VivoBook A515EA i3 1115G4 (BN975T)",
    hang: "HP",
    gia: "15.700.000đ",
  },
  {
    id: 4,
    name: "Asus ZenBook UX371EA i7 1165G7 (HL701TS)",
    hang: "Asus",
    gia: "10.000.000đ",
  },
];

const onSubmit = () => {
  console.log(firstName, lastName, checkBox);
};


  return (
    <div className="container">
      <Navbar />
      <div className="forms">
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={changeFirstName}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" value={lastName}
              onChange={changeLastName}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" onClick={changeChetBox}/>
          </Form.Field>
          <Button type="submit" color="green" onClick={onSubmit}>Submit</Button>
        </Form>
      </div>
      <div className="cards">
        {data.map((item) => (
          <CardExampleCard abc={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
