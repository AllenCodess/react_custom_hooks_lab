import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Use useLocalStorage hook for name and service number fields
  const [name, setName] = useLocalStorage("name", "");
  const [service, setService] = useLocalStorage("service", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          id="service"
          type="text"
          data-testid="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
      </form>

      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;
