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

  const job1 = (
    <section className='flex flex-col items-center gap-6'>
      <h2 className='text-center font-bold'>
        <span className='inline-block h-[25px] w-[25px] mr-2 leading-[25px]  bg-green-500 rounded-full'>
          C
        </span>
        Work To Be Completed
      </h2>
      <select onChange={handleChange} name='job' id='job'>
        <option className='text-center'>--select a job--</option>
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
      <div className='flex gap-4'>
        <button className='bg-green-500 p-2  text-white text-sm' type='button'>
          Insert Custom
        </button>
        <button className='bg-green-500  text-white p-2 text-sm' type='button'>
          Add Note
        </button>
      </div>
      <input
        className='p-1 text-center'
        onChange={handleChange}
        type='number'
        name='total'
        min='1'
        placeholder='Total'
      ></input>
    </section>
  );

  const job2 = (
    <div className='flex flex-col items-center gap-6'>
      <select onChange={handleChange} name='job' id='job'>
        <option className='text-center'>--select a job--</option>
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
      <div className='flex gap-4'>
        <button className='bg-green-500 p-2  text-white text-sm' type='button'>
          Insert Custom
        </button>
        <button className='bg-green-500  text-white p-2 text-sm' type='button'>
          Add Note
        </button>
      </div>
      <input
        className='p-1 text-center'
        onChange={handleChange}
        type='number'
        name='total'
        min='1'
        placeholder='Total'
      ></input>
    </div>
  );
  const [newJob, setNewJob] = useState([job1]);

  const handleClick = () => {
    setNewJob([...newJob, job2]);
  };

  return (
    <div className='md:w-[1000px] m-auto'>
      <header className='text-center flex justify-center items-center h-20 text-2xl align-middle text-white font-bold bg-sky-600'>
        New Estimate
      </header>

      <section className='flex flex-col gap-2 items-center'>
        <h2 className='text-center font-bold'>
          <span className='inline-block leading-[25px] h-[25px] w-[25px] mr-2 bg-green-500 rounded-full'>
            A
          </span>
          Customer Information
        </h2>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            onChange={handleChange}
            type='text'
            id='name'
            name='name'
          ></input>
        </div>

        <div>
          <label htmlFor='street'>Street:</label>
          <input
            onChange={handleChange}
            type='text'
            id='street'
            name='street'
          ></input>
        </div>

        <div>
          <label htmlFor='city'>City:</label>
          <input
            onChange={handleChange}
            type='text'
            id='city'
            name='city'
          ></input>
        </div>

        <div>
          <label htmlFor='postal'>Postal code:</label>
          <input
            onChange={handleChange}
            type='text'
            id='postal'
            name='postal'
          ></input>
        </div>
      </section>

      <hr></hr>

      <section className='flex flex-col items-center'>
        <h2 className='text-center font-bold'>
          <span className='inline-block h-[25px] leading-[25px]  w-[25px] mr-2 bg-green-500 rounded-full'>
            B
          </span>
          Project Description
        </h2>
        <textarea
          className='w-4/5'
          onChange={handleChange}
          type='text'
          id='description'
          name='description'
        ></textarea>
      </section>

      <hr></hr>

      {newJob.map((data, index) => {
        return(
          <div className='pt-4 pb-4' key={index}>{data}</div>
        )
      })}
      <div className='flex justify-center gap-4'>
        <button
          onClick={handleClick}
          className='bg-sky-600 p-2 font-bold text-white'
          type='button'
        >
          New job
        </button>
        <button
          className='bg-sky-900 p-2 font-bold text-white'
          onClick={handleSubmit}
          type='submit'
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;
