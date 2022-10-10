import React, { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from './Firebase';

function App() {
  const [estimate, setEstimate] = useState({
    name: '',
    street: '',
    city: '',
    postal: '',
    description: '',
    job: '',
  });

  console.log(estimate);

  const handleChange = (e) => {
    const value = e.target.value;
    setEstimate({
      ...estimate,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async () => {
    const db = getFirestore(app);
    await addDoc(collection(db, 'estimates'), estimate);
  };

  return (
    <div className='md:w-[1000px] m-auto'>
      <header className='text-center text-2xl text-white font-bold bg-sky-600'>
        New Estimate
      </header>

      <section className='flex flex-col gap-2 items-center'>
        <h2 className='text-center font-bold'>Customer Information</h2>
        <div>
          <label htmlFor='name'>NAME:</label>
          <input
            onChange={handleChange}
            type='text'
            id='name'
            name='name'
          ></input>
        </div>

        <div>
          <label htmlFor='street'>STREET:</label>
          <input
            onChange={handleChange}
            type='text'
            id='street'
            name='street'
          ></input>
        </div>

        <div>
          <label htmlFor='city'>CITY:</label>
          <input
            onChange={handleChange}
            type='text'
            id='city'
            name='city'
          ></input>
        </div>

        <div>
          <label htmlFor='postal'>POSTAL CODE:</label>
          <input
            onChange={handleChange}
            type='text'
            id='postal'
            name='postal'
          ></input>
        </div>
      </section>

      <section className='flex flex-col items-center'>
        <h2 className='text-center font-bold'>Project Description</h2>
        <textarea
          className='w-4/5'
          onChange={handleChange}
          type='text'
          id='description'
          name='description'
        ></textarea>
      </section>

      <section>
        <h2 className='text-center font-bold'>Work To Be Completed</h2>
        <label htmlFor='job'>Choose a job:</label>
        <select onChange={handleChange} name='job' id='job'>
          <option>--select--</option>
          <option value='Bathroom - Master Bedroom'>
            Bathroom - Master Bedroom
          </option>
          <option value='Powder Room'>Powder Room</option>
          <option value='Bathroom - Upper Level Hallway'>
            Bathroom - Upper Level Hallway
          </option>
          <option value='Bathroom - Upper Level Bedroom'>
            Bathroom - Upper Level Bedroom
          </option>
        </select>
        <button type='button'>Insert Custom</button>
        <button type='button'>Add Note</button>
        <input
          onChange={handleChange}
          type='number'
          name='total'
          min='1'
          placeholder='Total'
        ></input>
        <button type='button'>New job</button>
        <button onClick={handleSubmit} type='submit'>
          Submit
        </button>
      </section>
    </div>
  );
}

export default App;
