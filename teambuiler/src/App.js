import React, { useState } from 'react';

import uniqid from 'uniqid';

import { Route } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import AddMember from './AddMember';
import Members from './Members';


function App() {
  const [members, setMembers] = useState([]);

  // Expects a member object with a name, email and role - then assigns a unique id to it.
  const addMember = member => {
    const newMember = {
      ...member,
      id: uniqid()
    }
    setMembers([...members, newMember]);
  }

  // Removes member object from array in state, finds target by id
  const deleteMember = id => {
    const newMembers = Array.from(members);
    const targetIndex = members.findIndex(member => member.id === id);
    newMembers.splice(targetIndex, 1);
    setMembers(newMembers);
  }

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' render={() => <Members delete={deleteMember} members={members} />} />
      <Route path='/add' add={addMember} component={AddMember} />
    </div>
  );
}

export default App;
