import React from "react";

const Help = () => <div>
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
</div>;

export default Help;