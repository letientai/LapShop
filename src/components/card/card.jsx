import "./card.scss";
import React from "react";
import { Icon, Button } from "semantic-ui-react";

const CardExampleCard = (props) => (
  <div className="card" key={props.abc.id}>
    <div className="imgs">
      <img
        src={props.abc.img}
        wrapped
        ui={false}
      />
    </div>
    <p>{props.abc.name}</p>
    <span>{props.abc.hang}</span>
    <p>Giá: {props.abc.gia}</p>
    <Button color="green" className="btn">
      <Icon name="eye" /> Xem sản phẩm
    </Button>
  </div>
);

export default CardExampleCard;
