import React, { useState } from "react";

const SuperConverter = () => {
  const [select, setSelect] = useState("x");

  function onSelect(e) {
    setSelect(e.target.value);
  }

  return (
    <div>
      <h2>Super Converter</h2>
      <select value={select} onChange={onSelect}>
        <option value="x">Select your Units!</option>
        <option value="0">Hour & Minutes</option>
        <option value="1">Km & Miles</option>
      </select>
      <br />
      <br />
      {select === "x" ? "Choose Your Units!" : null}
      {select === "0" ? <TimeConverter /> : null}
      {select === "1" ? <LengthConverter /> : null}
    </div>
  );

  // 시간 변환기
  function TimeConverter() {
    const [time, SetTime] = useState(0);
    const [flip, SetFlip] = useState(false);

    function onChange(e) {
      SetTime(e.target.value);
    }
    function reset() {
      SetTime(0);
    }
    function onFlip() {
      SetFlip((current) => !current);
      SetTime(0);
    }

    return (
      <div>
        <h2>Time Converter</h2>
        <div>
          <strong>Hour</strong>
          <label htmlFor="hour"></label>
          <input
            value={flip ? Math.round(time / 60) : time}
            onChange={onChange}
            placeholder="hour"
            type="number"
            disabled={flip}
          />
        </div>
        <div>
          <strong>Minutes</strong>
          <label htmlFor="minute"></label>
          <input
            value={!flip ? time * 60 : time}
            onChange={onChange}
            placeholder="minute"
            type="number"
            disabled={!flip}
          />
        </div>
        <div>
          <button onClick={reset}>reset</button>
          <button onClick={onFlip}>{flip ? "Turn Back" : "flip"}</button>
        </div>
      </div>
    );
  }
  // 길이 변환기
  function LengthConverter() {
    const [length, SetLength] = useState(0);
    const [flip, SetFlip] = useState(false);

    function onChange(e) {
      SetLength(e.target.value);
    }
    function reset() {
      SetLength(0);
    }
    function onFlip() {
      SetFlip((current) => !current);
      SetLength(0);
    }

    return (
      <div>
        <h2>Length Converter</h2>
        <div>
          <strong>Km</strong>
          <label htmlFor="km"></label>
          <input
            value={flip ? length * 1.6 : length}
            onChange={onChange}
            placeholder="Km"
            type="number"
            disabled={flip}
          />
        </div>
        <div>
          <strong>Miles</strong>
          <label htmlFor="mile"></label>
          <input
            value={!flip ? length / 1.6 : length}
            onChange={onChange}
            placeholder="Miles"
            type="number"
            disabled={!flip}
          />
        </div>
        <div>
          <button onClick={reset}>reset</button>
          <button onClick={onFlip}>{flip ? "Turn Back" : "flip"}</button>
        </div>
      </div>
    );
  }
};

export default SuperConverter;
