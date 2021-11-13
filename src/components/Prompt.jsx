import React from "react";

// This is the prompt with the user and a symbol separating them.

const Prompt = () => <div>
                            {/* <span>user@juanallegretti.com&nbsp;➜</span> */}
                            {/* <span class="terminal-prompt-arrow"><b>➜</b></span><span class="terminal-prompt-text">&nbsp;<b>~</b>&nbsp;user@juanallegretti.com&nbsp;</span> */}
                            <span class="terminal-prompt-arrow">➜</span><span class="terminal-prompt-text">&nbsp;~&nbsp;user@juanallegretti.com&nbsp;</span>

                        </div>;

export default Prompt;