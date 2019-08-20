import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = e => {
    setMember({ ...member, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props);
    props.addTeamMember(member);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="name">
          Name:
          <input onChange={e => handleChange(e)} type="text" id="name" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input onChange={e => handleChange(e)} type="text" id="email" />
        </label>
      </div>
      <div>
        <label htmlFor="role">Role: </label>
        <input onChange={e => handleChange(e)} type="text" id="role" />
      </div>

      <div>
        <button>Add Team Member</button>
      </div>
    </form>
  );
};

export default Form;
