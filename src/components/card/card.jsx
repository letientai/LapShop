import "./card.scss";
import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import icon from "../../imgs/view.png";

const CardExampleCard = (props) => (
  <div className="card">
    <img
      src="https://vcdn-sohoa.vnecdn.net/2021/01/21/HP-Elite-Folio-Front-Left-Forw-6107-5267-1611217952.jpg"
      wrapped
      ui={false}
    />
    <p>{props.abc.name}</p>
    <span>{props.abc.hang}</span>
    <p>Giá: {props.abc.gia}</p>
    <Button color="green" className="btn">
      <Icon name="eye" /> Xem sản phẩm
    </Button>
  </div>
);

export default CardExampleCard;
