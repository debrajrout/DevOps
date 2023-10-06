/* 
This component will be responsible for displaying the numbers / symbols the user enters. 
*/

import { useState } from "react";


type DisplayProps = {
  value: string;
}

const Display = ({value}: DisplayProps) => {
  const [inputValue, setInputValue] = useState([]);

  const handleStoringMultipleValues = (value: DisplayProps) => {
    //TODO: store the state as an array in order to preform multiple functions on it
    setInputValue((prevState) => ([...prevValue, value]))
    // This way I can continuously store state in the 'inputValue' array???
  }

  return (
      <div>
        {/* Instead of just displaying the value here, I can possible map through 'inputValue' and display each mapped items? */}
          <p>{value}</p>
      </div>
  );
}

export default Display;