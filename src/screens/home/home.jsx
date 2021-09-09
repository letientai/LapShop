import "./home.scss";
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import CardExampleCard from "../../components/card/card";
import { Button, Checkbox, Form, Segment } from "semantic-ui-react";
import intro from "../../videos/intro.mp4";

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
  const changeChetBox = () => {
    setChetBox(!checkBox);
  };

  const data = [
    {
      id: 1,
      name: "Dell VivoBook A415EA i5 1135G7 (AM888T)",
      hang: "Dell",
      gia: "25.250.000đ",
      img: "https://cdn.vatgia.vn/pictures/fullsize/2018/02/02/vul1517565929.jpg",
    },
    {
      id: 2,
      name: "Asus ZenBook UX425EA i5 1135G7 (KI429T)",
      hang: "Asus",
      gia: "9.300.000đ",
      img: "https://phucanhcdn.com/media/product/29533_microsoft_surface_pro_2017__silver_.png",
    },
    {
      id: 3,
      name: "HP VivoBook A515EA i3 1115G4 (BN975T)",
      hang: "HP",
      gia: "15.700.000đ",
      img: "https://vcdn-sohoa.vnecdn.net/2021/01/21/HP-Elite-Folio-Front-Left-Forw-6107-5267-1611217952.jpg",
    },
    {
      id: 4,
      name: "Asus ZenBook UX371EA i7 1165G7 (HL701TS)",
      hang: "Asus",
      gia: "10.000.000đ",
      img: "https://lh6.googleusercontent.com/qm5V5mbNCZZM-LDxC2S_yFZwW8eq9CvIzFFeOtv1pHQD4AkoxtqaaDxZN3y5SDGdYnkPezfXnW3Zcpef4uTOCUoPJjInYhHRZoRR_S7MoQ5b663uLGkN5653gPrkjMP3dlc-9lgZ",
    },
  ];

  const onSubmit = () => {
    console.log(firstName, lastName, checkBox);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="forms">
        <div className="form1">
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
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={changeLastName}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="I agree to the Terms and Conditions"
                onClick={changeChetBox}
              />
            </Form.Field>
            <Button type="submit" color="green" onClick={onSubmit}>
              Submit
            </Button>
          </Form>
        </div>
        <div className="videos">
          <Segment>
            <video
              src={intro}
              preload=""
              playsinline=""
              autoplay=""
              muted=""
              controls
              loop=""
              embed
              width="570px"
              height="320px"
            ></video>
          </Segment>
        </div>
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
