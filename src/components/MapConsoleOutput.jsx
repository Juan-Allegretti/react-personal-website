import React from "react";

const MapConsoleOutput = ({ consoleOutput }) => {
  const scrollRef = React.useRef();
  

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      
  });

  return (
    <div className="console-output" ref={scrollRef}>
      {/* const outputList = props.outputs.map((o, key) => <div key={key}>{o}</div>); */}
      {consoleOutput.map((item, key) => (
        <div key={key}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default MapConsoleOutput;