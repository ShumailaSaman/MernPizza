import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function Addpizza() {
  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [mediumPrice, setMediumPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  const formHandler = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !smallPrice || !mediumPrice || !largePrice || !image || !description || !category) {
      alert('Please fill in all fields');
      return;
    }

    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };

    dispatch(addPizza(pizza));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Add Pizza</h1>

      {loading && <Loading />}
      {error && <Error error={error.message || 'Something Went Wrong'} />}
      {success && <Success success='New Pizza Added Successfully' />}

      <form onSubmit={formHandler} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          className='form-control'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className='form-control'
          type='number'
          placeholder='Small Variant Price'
          value={smallPrice}
          onChange={(e) => setSmallPrice(e.target.value)}
          required
        />
        <input
          className='form-control'
          type='number'
          placeholder='Medium Variant Price'
          value={mediumPrice}
          onChange={(e) => setMediumPrice(e.target.value)}
          required
        />
        <input
          className='form-control'
          type='number'
          placeholder='Large Variant Price'
          value={largePrice}
          onChange={(e) => setLargePrice(e.target.value)}
          required
        />
        <input
          className='form-control'
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          className='form-control'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          className='form-control'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value=''>Select Category</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='non-vegetarian'>Non-Vegetarian</option>
        </select>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '15px' }}>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Add Pizza
          </button>
        </div>
      </form>
    </div>
  );
}
