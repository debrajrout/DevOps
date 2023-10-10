/* 
This component will be responsible for displaying the numbers / symbols the user enters. 
*/

import { useEffect } from "react";

type DisplayProps = {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  console.log("Display component rendered with value:", value);
  useEffect(() => {
    console.log('Display component rendered with value:', value);
}, [value]);
  
  return (
    <div className="display-container">
      <p>{value}</p>
    </div>
  );
};


export default Display;