import React from "react";
import MapConsoleOutput from "./MapConsoleOutput";
import Prompt from "./Prompt";
import Twitter from "./commands/Twitter";
import Linkedin from "./commands/Linkedin";
import Instagram from "./commands/Instagram";
import Github from "./commands/Github";
import Contact from "./commands/Contact";
import Help from "./commands/Help";
import About from "./commands/About";
import Website from "./commands/Website";



const Terminal = () => {
  const inputText = React.useRef();
  const scrollRef = React.useRef();
  
  const [input, setInput] = React.useState("");
  // const [consoleOutput, onEnter] = UseOnEnter();
  // const [output, setOutput] = React.useState('')
  const [terminalOutput, setTerminalOutput] = React.useState([]);
  
  //Store executed to use as a history
  const [historyCommands, setHistoryCommands] = React.useState([]);
  const [historyCommandsPosition, setHistoryComandsPosition] = React.useState(0);


  
  const banner =

  "   _                           _ _                     _   _   _ \n" +
  "  (_)_   _  __ _ _ __     __ _| | | ___  __ _ _ __ ___| |_| |_(_)\n" +
  "  | | | | |/ _` | '_ \\   / _` | | |/ _ \\/ _` | '__/ _ \\ __| __| |\n" +
  "  | | |_| | (_| | | | | | (_| | | |  __/ (_| | | |  __/ |_| |_| |\n" +
  " _/ |\\__,_|\\__,_|_| |_|  \\__,_|_|_|\\___|\\__, |_|  \\___|\\__|\\__|_|\n" +
  "|__/                                    |___/                    \n"
  

  const pCommands = {
    help: (
      <div>
      <p>
      You can use any of the following commands. You can also browse your command history
      with ArrowUp or ArrowDown and press Tab to autocomplete.
      </p>
      <dl>
        <dt>about</dt>
        <dd>A description about me</dd>
        <dt>github</dt>
        <dd>Where to find my code</dd>
        <dt>twitter</dt>
        <dd>My Twitter profile</dd>
        <dt>instagram</dt>
        <dd>My Instagram profile</dd>
        <dt>download_cv</dt>
        <dd>Check out my CV [pdf - 168KB]</dd>
        <dt>contact</dt>
        <dd>How to reach me</dd>
        <dt>website</dt>
        <dd>How I built this</dd>
        <dt>all</dt>
        <dd>Run all commands</dd>
        <dt>clear</dt>
        <dd>Clears the terminal output</dd>
      </dl>
    </div>
    ),
    website: <div>I built this personal website using React.js to practice this technology.
    The source code is on my <a href="https://github.com/Juan-Allegretti">GitHub</a></div>,
    twitter: <div>My Twitter account is <a href="https://www.twitter.com/juanallegretti">@JuanAllegretti</a></div>,
    github: <div>My GitHub repo is <a href="https://github.com/Juan-Allegretti">@Juan-Allegretti</a></div>,
    linkedin: <div>My Linkedin account is <a href="https://www.linkedin.com/in/juanallegretti">@JuanAllegretti</a></div>,
    instagram: <div>My Instagram account is <a href="https://www.instagram.com/juan.allgretti">@Juan.Allegretti</a></div>,
    contact: (
      <dl>
      <dt>Email</dt>
      <dd>
        <a href="mailto:juan.elca@gmail.com">juan.elca@gmail.com</a>
      </dd>
      <dt>Linkedin</dt>
     <dd>My Linkedin account is <a href="https://www.linkedin.com/in/juanallegretti">@JuanAllegretti</a></dd>

    </dl>
    ),
    about: <div>I'm a 28 years old <span className="terminal-glow">Computer Engineer</span> graduated from <a href="https://www.unlam.edu.ar/">Universidad Nacional de La Matanza</a> in Buenos Aires, Argentina</div>
  };

  const functionCommands = ["clear", "all", "cv"]
  
  const printCommands = ["twitter",  "linkedin", "github", "instagram", "website", "contact", "about", "help"];

  const commandsMap = {
    twitter: <Twitter />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    github: <Github />,
    website: <Website />,
    contact: <Contact />,
    about: <About />,
    help: <Help />
  };


  

  React.useEffect(() => {
    // inputText.current.value = "";
    inputText.current.focus();
    // inputText.current.selectionStart = inputText.current.value.length;
    inputText.current.selectionEnd = inputText.current.value.length;
    scrollRef.current?.scrollIntoView();
  });

  const isValidCommand = (command) => {
    return isPrintCommand(command) || isFunctionCommand(command);
  };

  const isPrintCommand = (command) => {
    return printCommands.includes(command);
  };

  const isFunctionCommand = (command) => {
    return functionCommands.includes(command);
  };

// Download a file from the path received and name it as the file name received
  const downloadFile = (path, fileName) => {
    const a = document.createElement("a");
    a.href = path;
    a.download = fileName;
    a.click();
  };


//Try to autocomplete the command from the input and return the matched commands
  
  const autocompleteCommand = (command) => {
    // const commands = Object.keys(printCommands);
    const validCommands = printCommands
    validCommands.push(...functionCommands);
    const matchedCommands = validCommands.filter((c) => c.startsWith(command));
    return matchedCommands;
  };

//Navigate through the history of commands
  const getCommandFromHistory = (key) => {
    if (key === "ArrowUp") {
      if (historyCommands.length > 0 && (historyCommands.length) > historyCommandsPosition) {
        setHistoryComandsPosition(historyCommandsPosition + 1);
        return historyCommands[historyCommands.length - historyCommandsPosition -1 ];

      } else{
        return historyCommands[historyCommands.length - historyCommandsPosition];
      }
    } else if (key === "ArrowDown") {
      if (historyCommands.length > 0 && historyCommandsPosition > 1) {
        setHistoryComandsPosition(historyCommandsPosition - 1);
        return historyCommands[historyCommands.length - historyCommandsPosition + 1];

      } else if(historyCommandsPosition <= 1){
        setHistoryComandsPosition(0);
        return "";

      }
    }
  }



  const handleKeyDown = (value, e) => {
    const terminalPrompt = "user@juanallegretti.com$"
    const commandRecord = (
      <div
      ref={(element) => (scrollRef.current = element)}
        className="terminal-command-record"
      >
        {/* <span className="terminal-prompt">{terminalPrompt}</span>{""} */}
        <span className="terminal-prompt"><Prompt />{" "}{value}</span>
        {/* <span>{value}</span> */}
      </div>
    );
    

    switch(e.key){
        case "Tab":
            e.preventDefault();
            if (input.trim() !== "") {
            const matchedCommands = autocompleteCommand(value);
            if (matchedCommands.length === 1) {
              setInput(matchedCommands[0]);
            }
            //If there are more than one matched commands, print in the console the matched commands. If there are no matched commands, do nothing
            else if (matchedCommands.length > 1 && matchedCommands != -1) {
              setTerminalOutput([...terminalOutput, commandRecord, matchedCommands.join("     ")]);
            }
          }
              break;
        case "ArrowUp":
            e.preventDefault();
            const commando = getCommandFromHistory(e.key);
            setInput(commando);
            break;
        case "ArrowDown":
            e.preventDefault();
            const commando2 = getCommandFromHistory(e.key);
            setInput(commando2);
            break;
        case "Enter":
          e.preventDefault();
          setHistoryComandsPosition(0);
          setInput("");
          // Check if input is empty or has whitespaces
          if (value.trim() == "") {
            // Set the output empty and don't add to history
          setTerminalOutput([...terminalOutput,  commandRecord]);
          break;
          }
          // Store command in history
          setHistoryCommands([...historyCommands, value]);
          
          if (!isValidCommand(value)){
            console.log("Errror bokeeee");
            const error = (
              <div className="terminal-error-group">
                <span className="terminal-error">
                  {`command not found: ${value}`}
                </span>
                <span>{`Type 'help' to view a list of available commands`}</span>
              </div>
            );
    
            setTerminalOutput([...terminalOutput,  commandRecord, error]);
            break;
            // return setTerminalOutput
          }
          else if (isPrintCommand(value)) {
                        
            setTerminalOutput([...terminalOutput,  commandRecord, commandsMap[value]]);
            setInput("");

          }
          else if (isFunctionCommand(value)) {
            switch(value){
              case "clear":
                setTerminalOutput([]);
                setInput("");
                // return setTerminalOutput
                break;
              case "all":

                // Get the keys of the object printCommands in an array and print it in the terminal
                const keys = Object.keys(printCommands);

                const allCommands = keys.map((key) => {
                  const printAll = (
                    <>
                    <div>
                      <span>{"- "}<b>{key}</b></span>{":"}
                    </div>
                    <div className="terminal-command-output">
                    <span>{printCommands[key]}</span>
                    </div>
                    </>
                  )
                  return printAll;

                });
                setTerminalOutput([...terminalOutput,  commandRecord,  ...allCommands]);                
                setInput("");
                // return setTerminalOutput
                break;
              case "cv":
                // Download de CV file
                downloadFile("CV.txt", "Juan");
                setInput("");
                break;
            }
            // setTerminalOutput([...terminalOutput,  commandRecord, printCommands[value]]);
            // setInput("");
            // return setTerminalOutput
          }

    }
  };



  return (
    //This is the terminal component and it's the only one that has the focus    

    <div className="terminal-container" tabIndex={-1} onKeyDown={(e) => { if (e.key === "Tab") e.preventDefault() }}>
      <div className="terminal-content">
      <div className="terminal-banner">{banner}</div>
      <MapConsoleOutput consoleOutput={terminalOutput} />
      <div className="terminal-input-area">
      <Prompt />
        <input
        type="text"
        ref={inputText}
        className="terminal-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(input, e)}

        />
      </div>
      </div>
    </div>
  );
};

export default Terminal;