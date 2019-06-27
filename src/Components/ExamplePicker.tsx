import React, { useCallback } from "react";

import { showExample } from "../Modules/quorum";
import { useDispatch } from "redux-react-hook";
import { useMappedState } from "redux-react-hook";
import s from "./ExamplePicker.module.css";

const ExamplePicker = () => {
  const dispatch = useDispatch();
  // Pull any quorum data out of our state
  const mapState = useCallback(state => {
    return state.quorum.validExamples;
  }, []);
  const list = useMappedState<string[]>(mapState);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(showExample(e.target.value));
  };

  return (
    <div>
      <select className={s.Picker} onChange={onChange}>
        <option key="Nothing">Select an example graph</option>
        {list.map(example => (
          <option value={example} key={example}>
            {example}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExamplePicker;
