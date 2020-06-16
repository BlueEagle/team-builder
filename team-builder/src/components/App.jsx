import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import Form from './Form'
import Member from './Member'

const initialMemberList = [
  {
    id: uuid(),
    name: 'Jonathon',
    email: 'JonJon@gmail.com',
    role: 'Front End Architect'
  }
]

const initialTeamMember = {
  id: uuid(),
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMemberList) // the list
  const [formValues, setFormValues] = useState(initialTeamMember) // default form

  // console.log(teamMembers)git add . && git commit -m 'wip'


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

      {teamMembers.map(member => {return (
        <Member key={member.id} member={member} />
      )})}
    </div>
  );
}

export default App;
