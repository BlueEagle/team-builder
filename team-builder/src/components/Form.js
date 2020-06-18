import React from 'react'

function Form(props) {
  const { values, onInputChange, onSubmit } = props

  return (
    <form onSubmit={onSubmit}>
      <h4>Add Team Member</h4>

      <label>Name:&nbsp;
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={onInputChange}
          maxLength='100'
          />
      </label>

      <label>Email:&nbsp;
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={onInputChange}
        />
      </label>

      <label>Role:&nbsp;
        <select
          name="role"
          value={values.role}
          onChange={onInputChange}
        >
          <option value=''>-- Select a Role --</option>
          <option value='TL'>TL</option>
          <option value='SL'>SL</option>
          <option value='Student'>Student</option>
          <option value='Other'>Other</option>
        </select>
      </label>

      <input
        type="submit"
      />
    </form>
  )
}

export default Form