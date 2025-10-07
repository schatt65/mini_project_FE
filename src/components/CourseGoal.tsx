import { useState } from "react";
import { StyledButton } from "./styles/Shared.styled";
import MoveHomeIcon from "../icons/MoveHomeIcon";
import ExternalServiceLink from "./styles/ExternalServiceLink";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";

const CourseGoal = () => {
  const [textInput, setTextInput] = useState("");
  const Arr_Data = ["hhh", "jjj", "hhhhfks"];
  const [arrData, setArrData] = useState(Arr_Data);
  const [arr, setArr] = useState(0);
  return (
    <article>
      <div>
        <h2>Title</h2>
        <p>Descriptyion</p>
      </div>
      <StyledButton>Delete</StyledButton>
      <textarea
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      ></textarea>
      <div>Num of text= {textInput.length}</div>
      <div>Num of text= {textInput.split("").reverse().join("")}</div>
      <ul>
        {Arr_Data.slice(0, arr).map((d, idx: any) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          setArr((p: any) => {
            if (p < Arr_Data.length) {
              return p + 1;
            } else {
              // p = 0;
              return 0;
            }
          })
        }
      >
        next
      </button>
      {/* <button
        onClick={() => setArr(0)}
        disabled={arr === Arr_Data.length ? false : true}
      >
        next
      </button> */}
      <div>ar len val={arr}</div>

      <div>
        <MoveHomeIcon />
        <ExternalServiceLink
          outerIcon={<MoveHomeIcon />}
          innerIcon={<ChevronRightIcon />}
          linkLabel="Move home"
          onClick={() => {
            console.log("clicked");
          }}
          isNew={true}
        />
      </div>
    </article>
  );
};

export default CourseGoal;
