import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaById, updatePizza } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function EditPizza() {
  const dispatch = useDispatch();
  const { pizzaid } = useParams(); // Get pizzaid from URL params

  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [mediumPrice, setMediumPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (pizzaid) {
      dispatch(getPizzaById(pizzaid)); // Dispatch action with pizzaid
    }
  }, [pizzaid, dispatch]);

  // Get pizza details and status from the Redux store
  const pizzaDetails = useSelector((state) => state.getPizzaByIdReducer);
  const { loading, error, pizza } = pizzaDetails;

  const updatePizzaStatus = useSelector((state) => state.updatePizzaReducer) || {};
  const { success, loading: updatingLoading } = updatePizzaStatus; // Default to an empty object if undefined

  useEffect(() => {
    if (pizza) {
      setName(pizza.name || '');
      setSmallPrice(pizza.prices?.small || '');
      setMediumPrice(pizza.prices?.medium || '');
      setLargePrice(pizza.prices?.large || '');
      setImage(pizza.image || '');
      setDescription(pizza.description || '');
      setCategory(pizza.category || '');
    }
  }, [pizza]);

  const formHandler = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !smallPrice || !mediumPrice || !largePrice || !image || !description || !category) {
      alert('Please fill in all fields');
      return;
    }

    const updatedPizza = {
      _id: pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: Number(smallPrice),  // Convert to number
        medium: Number(mediumPrice), // Convert to number
        large: Number(largePrice),   // Convert to number
      },
    };

    dispatch(updatePizza(updatedPizza)); // Call updatePizza action
  };

  return (
    <div>
      <h1>Edit Pizza</h1>
      {loading && <Loading />}
      {error && <Error error={error.message || 'Something Went Wrong'} />}
      {success && <Success success='Pizza Updated Successfully' />}
      {updatingLoading && <Loading />} {/* Show loading spinner while updating */}

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
            Update Pizza
          </button>
        </div>
      </form>
    </div>
  );
}
