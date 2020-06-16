import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import Form from './Form'

const initialMemberList = [
  {
    id: uuid(),
    name: 'Jonathon'
  }
]

const initialTeamMember = {
  id: uuid(),
  name: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMemberList) // the list
  const [formValues, setFormValues] = useState(initialTeamMember) // default form

  // console.log(teamMembers)

  function addTeamMember(memberObject) {
    setTeamMembers([...teamMembers, memberObject])
  }
  const onInputChange = evt => {
    const { name, value } = evt.target

    setFormValues({...formValues, [name]: value})
  }
  const onSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div className="App">
      <Form values={formValues} onInputChange={onInputChange} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
