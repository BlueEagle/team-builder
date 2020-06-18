import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import Form from './Form'
import Member from './Member'

const initialMemberList = [
  {
    id: uuid(),
    name: 'Jonathon',
    email: 'JonJon@gmail.com',
    role: 'TL'
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

  const onInputChange = evt => {
    const { name, value } = evt.target

    setFormValues({...formValues, [name]: value})
  }
  const onSubmit = evt => {
    evt.preventDefault()

    if(!formValues.name || !formValues.email || !formValues.role) {
      console.log('User did not enter enough information!')
      return
    }

    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    setTeamMembers(teamMembers => [newMember, ... teamMembers])
    setFormValues(initialTeamMember)
    console.log('Form submitted!')
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
