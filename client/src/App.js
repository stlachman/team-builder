import React, { useState } from "react";

import Form from "./components/Form";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Joanna",
      email: "joanna@gmail.com",
      role: "Backend Engineer"
    }
  ]);

  const addTeamMember = member => {
    setTeam([...team, member]);
  };

  return (
    <div>
      <h1>Team Builder</h1>
      {team.map((member, i) => (
        <p key={i}>{member.name}</p>
      ))}

      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
