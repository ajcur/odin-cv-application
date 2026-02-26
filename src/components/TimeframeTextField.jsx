function TimeframeTextField({ editMode, deleteMethod, type }) {
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [mainText, setMainText] = useState("");

  function handleFromYearChange(e) {
    setFromYear(e.target.value);
  }

  function handleToYearChange(e) {
    setToYear(e.target.value);
  }

  function handleMainTextChange(e) {
    setMainText(e.target.value);
  }

  let placeholderText = type.charAt(0).toUpperCase() + type.slice(1);

  let allEmpty = fromYear == "" && toYear == "" && mainText == "";

  return (
    <>
      {editMode ? (
        <div className={`timeframe-text-field edit ${type}`}>
          <div className="from-to">
            <input
              value={fromYear}
              placeholder="Start (Year)"
              onChange={handleFromYearChange}
            />{" "}
            –{" "}
            <input
              value={toYear}
              placeholder="End (Year)"
              onChange={handleToYearChange}
            />
            :{" "}
          </div>
          <input
            value={mainText}
            placeholder={placeholderText}
            onChange={handleMainTextChange}
          />
          <button
            className={`timeframe-text-field delete ${type}`}
            onClick={deleteMethod}
          >
            X
          </button>
        </div>
      ) : allEmpty ? null : (
        <div className={`timeframe-text-field display ${type}`}>
          <span className="from-to">
            {fromYear} – {toYear}:{" "}
          </span>
          <span>{mainText}</span>
        </div>
      )}
    </>
  );
}

export { TimeframeTextField };
