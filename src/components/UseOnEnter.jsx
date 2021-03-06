import React from "react";



const printCommands = {
  help: (
    <div>
      <p>
        Wow, I thought the only people who would visit this site would be bots
        and spammers, guess I was wrong. Just type any of the commands below
        to get some more info. You can even type a few letters and press [tab]
        or '.' to autocomplete.
      </p>
      <dl>
        <dt>about</dt>
        <dd>Stop stalking me</dd>
        <dt>projects</dt>
        <dd>Yeah, I've made some cool stuff before</dd>
        <dt>skills</dt>
        <dd>I'm pretty good at some things</dd>
        <dt>awards</dt>
        <dd>A bit of boasting</dd>
        <dt>repo</dt>
        <dd>Take a look at some of my work</dd>
        <dt>download_cv</dt>
        <dd>Check out my CV [pdf - 168KB]</dd>
        <dt>contact</dt>
        <dd>Bring on the spam</dd>
        <dt>website</dt>
        <dd>How I built this</dd>
        <dt>all</dt>
        <dd>Tell me everything</dd>
        <dt>clear</dt>
        <dd>Clears the terminal of all output</dd>
      </dl>
    </div>
  ),
  about: (
    <div>
      <p>
        Hey there! Thanks for taking such a keen interest in me. Hopefully
        you're not gonna spam or stalk me... Okay, I guess if you must stalk
        me, just give me fair warning so I can look presentable when you
        arrive at my door.
      </p>
      <p>
        Right, so, where to begin? Well, my parents met in... Nah, just
        kidding.
        <br />
        As you probably know, my name is Juan. I'm a28 year old Computer Engineer
        born and bred in the beautiful South Africa and currently living in
        Cape Town.
      </p>
      <p>
        I graduated with distinction from the University of Cape Town with a
        Bachelor of Business Science degree in Computer Science. It comprised
        of four years of computer science courses, as well as many business
        courses (for example, I completed three years of economics, stats, and
        finance).
      </p>
      <p>
        I also have an MSc degree in Computer Science from the University of
        Oxford, where I was awarded a full academic scholarship. Studying
        abroad was an amazing experience - highlights include early morning
        rowing, croquet, formal dinners, and just exploring Oxford with
        amazing people and friends.
      </p>
      <p>
        Some of my interests include cybersecurity. I'm
        also pretty into fly fishing!
      </p>
      <p>
        My previous formal work experience includes working on asset
        management software at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.fundamental.net"
        >
          Fundamental Software
        </a>
        , as well as working for a great content creation app called{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://madewithover.com"
        >
          Over
        </a>
        .
      </p>
      <p>
        Nowadays I'm developing a method to download food... I wish! I am
        currently working at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://luno.com">
          Luno
        </a>
        , where we help people to buy, store, and learn about cryptocurrency.
      </p>
      <p>
        Please feel free to get in touch with me to discuss any cool
        opportunities. My contact details can be found by typing 'contact',
        and if you would like to check out my CV, simply type 'download_CV'.
      </p>
    </div>
  ),
  projects: (
    <>
      <p>
        I'm always working on comp sciey (not really a word) things. Why don't
        you check out a few of my public code repositories? Just type 'repo'
        to get the links.
      </p>
      <p>
        I have my own startup called{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://weaverworks.co.za"
        >
          WeaverWorks
        </a>{" "}
        that provides property managers and buildings with some really cool
        software. The project uses TypeScript, Node.js, React (with
        Material-UI components) and Firebase.
      </p>
      <p>
        You can also check out my MSc thesis{" "}
        <a href="MSc_Thesis.pdf" download="Craig Feldman - MSc Thesis.pdf">
          An investigation into the applicability of a blockchain based voting
          system
        </a>{" "}
        - this one took a while!
      </p>
    </>
  ),
  contact: (
    <>
      <dl>
        <dt>Email</dt>
        <dd>
          <a href="mailto:craig@craigfeldman.com">craig@craigfeldman.com</a>
        </dd>
        <dt>Smoke signals</dt>
        <dd>general Cape Town region</dd>
        <dt>myspace</dt>
        <dd>just kidding</dd>
      </dl>
    </>
  ),
  awards: (
    <>
      <dl>
        <dt>2016</dt>
        <dd>University of Oxford full scholarship</dd>
        <dd>
          Standard Bank Africa Chairman's Scholarship (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://graduate.standardbank.com/standimg/Graduate/DerekCooperAfricaScholarship.html"
          >
            view scholarship
          </a>
          )
        </dd>

        <dt>2015</dt>
        <dd>Dean's Merit List</dd>

        <dt>2014</dt>
        <dd>Dean's Merit List</dd>
        <dd>BSG Prize (Best 3rd year Computer Science student)</dd>
        <dd>Class Medal (1st place) for all 3 Computer Science courses</dd>
        <dd>Commerce Faculty Scholarship</dd>

        <dt>2013</dt>
        <dd>Dean's Merit List</dd>
        <dd>Computer Science Merit Award (top 5%)</dd>
        <dd>Class Medal for Inferential Statistics</dd>
        <dd>Computer Science Merit Award (top 5%)</dd>
        <dd>Commerce Faculty Scholarship</dd>

        <dt>2012</dt>
        <dd>Dean's Merit List</dd>
        <dd>Computer Science Merit Award (top 5%)</dd>
      </dl>
    </>
  ),
  repo: (
    <>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/craig-feldman"
          >
            GitHub
          </a>{" "}
          - Unfortunately, I could only make a small subset of my projects
          public.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bitbucket.org/fldcra001"
          >
            Bitbucket
          </a>{" "}
          - A few university projects.
        </li>
      </ul>
    </>
  ),
  skills: (
    <>
      <dl>
        <dt>Kotlin</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#00DE12", textShadow: "0 0 5px #00DE12" }}>
            #############
          </span>{" "}
          ##
        </dd>
        <dt>Java</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#42D100", textShadow: "0 0 5px #42D100" }}>
            ###########
          </span>
          {"   "}
          ##
        </dd>
        <dt>TypeScript</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#42D100", textShadow: "0 0 5px #42D100" }}>
            ###########
          </span>
          {"   "}
          ##
        </dd>
        <dt>C# and C++</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#99D100", textShadow: "0 0 5px #99D100" }}>
            ########
          </span>
          {"      "}
          ##
        </dd>
        <dt>Python</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#D16200", textShadow: "0 0 5px #D16200" }}>
            #####
          </span>
          {"         "}
          ##
        </dd>
      </dl>
      <dl>
        <dt>GCP / Firebase</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#99D100", textShadow: "0 0 5px 99D100" }}>
            #########
          </span>
          {"     "}
          ##
        </dd>

        <dt>React</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#00DE12", textShadow: "0 0 5px #00DE12" }}>
            ############
          </span>
          {"  "}
          ##
        </dd>

        <dt>General web development</dt>
        <dd>
          ##{" "}
          <span style={{ color: "#5BD100", textShadow: "0 0 5px 5BD100" }}>
            #########
          </span>
          {"     "}
          ##
        </dd>
      </dl>
    </>
  ),
  website: (
    <>
      <p>
        I built this website from scratch using React. It is a rewrite of my
        ).
      </p>
      <p>
        The source code for this site can be found on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/craig-feldman/personal-website-react"
        >
          GitHub
        </a>
        . Feel free to use this website for inspiration, or go ahead and copy
        some of the code! If you do, all I ask is that you give this site a
        mention :)
      </p>
    </>
  ),
};

const UseOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);

  

  const onEnter = (value, key) => {
    // if (key === "Enter") {
    //   const newConsoleLine = commands[value] || "Invalid Command";
    //   return updateConsoleOutput(consoleOutput =>
    //     consoleOutput.concat(newConsoleLine)
    //   );
    // }
    const terminalPrompt = "user@juanallegretti.com $"
    const commandRecord = (
      <div

        className="terminal-command-record"
      >
        <span className="terminal-prompt">{terminalPrompt}</span>{" "}
        <span>{value}</span>
      </div>
    );
    switch(key){
        case "Enter":
            updateConsoleOutput([...consoleOutput,  commandRecord, printCommands[value]|| "invalid"]);
            return updateConsoleOutput
            break;
        case "ArrowDown":
            updateConsoleOutput([...consoleOutput,  commandRecord, printCommands[value]|| "invalid"]);
            return updateConsoleOutput
            break;
    }
  };

  return [consoleOutput, onEnter];
};

export default UseOnEnter;