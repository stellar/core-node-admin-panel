import React, { useState, FunctionComponent } from "react";
import { ReactComponent as Minus } from "../assets/Minus.svg";
import { ReactComponent as Plus } from "../assets/Plus.svg";
import s from "./FailureDisplay.module.css";

const InfoPanel: FunctionComponent = props => {
  const [showDetails, setShowDetails] = useState(true);
  let button = showDetails ? <Minus /> : <Plus />;
  let openClass = showDetails ? s.open : null;
  return (
    <div className={`${s.FailureDialog} ${openClass}`}>
      <div
        className={s.OpenCloseButton}
        onClick={() => setShowDetails(!showDetails)}
      >
        {button}
      </div>
      {showDetails ? props.children : <></>}
    </div>
  );
};

export default InfoPanel;
