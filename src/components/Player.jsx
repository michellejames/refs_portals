import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const playerNameRef = useRef();

  function handleClick() {
    setName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
