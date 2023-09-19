import React, { Component, useState } from 'react';

function MyForm() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  }

  return (
    <div>
      <div className='d-flex align-items-center bg-secondary'>
        <form>
          <label htmlFor="firstname"></label>
          <input type='text' className='form-control' placeholder='first name'></input>

          <label htmlFor="secondname"></label>
          <input type='text' className='form-control' placeholder='second name'></input>

          <label htmlFor="surname"></label>
          <input type='text' className='form-control' placeholder='surname'></input>

          <label htmlFor="dateOfBirth"></label>
          <input type='date' className='form-control' placeholder='Date of Birth'></input>

          <label htmlFor="gender"></label>
          <select value={gender} onChange={handleChange}>
            <option value="male" className='form-control' >Male</option>
            <option value="female" className='form-control'>Female</option>
            <option value="other" className='form-control'>Other</option>
          </select>

          <label htmlFor="idnumber"></label>
          <input type='number' className='form-control' placeholder='ID NUMBER'></input>

          <label htmlFor="EMAIL"></label>
          <input type='text' className='form-control' placeholder='example@gmail.com'></input>

          <label htmlFor="phonenumber"></label>
          <input type='number' className='form-control' placeholder='Your Phone number'></input><br></br>

          <p>**********************************************************</p>

          <h3>NEXT OF KIN</h3>
          <label htmlFor="fullnames"></label>
          <input type='text' className='form-control' placeholder='full names of next of kin'></input><br></br>

          <label htmlFor="phonenumber"></label>
          <input type='number' className='form-control' placeholder='Phone number'></input><br></br>

          <label htmlFor="neokinid"></label>
          <input type='number' className='form-control' placeholder='Id number'></input><br></br>

          <label htmlFor="relationship"></label>
          <input type='text' className='form-control' placeholder='Relationship'></input><br></br>





        </form>
      </div>
    </div>
  )
}

class Farmerreg extends Component {
  render() {
    return (
      <div>
        <MyForm />
      </div>
    )
  }
}

export default Farmerreg;
