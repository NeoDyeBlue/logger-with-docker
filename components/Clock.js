import { useState, useEffect } from "react";

export default function Clock() {
  let [time, setTime] = useState();
  function timeHandler() {
    setTime(new Date().toGMTString());
  }

  useEffect(() => {
    const timer = setInterval(setTime(new Date().toGMTString()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p className="m-0 small">{time}</p>
    </div>
  );
}
