import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions'; // Correct path to the action file
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Registerscreen() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const registerState = useSelector(state => state.registerUserReducer);
    const { error, loading, success } = registerState;

    const dispatch = useDispatch();

    function register() {
        if (password !== cpassword) {
            alert("Passwords do not match");
        } else {
            const user = {
                name,
                email,
                password,
            };
            console.log(user);
            dispatch(registerUser(user));
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
                    {loading && <Loading />}
                    {success && <Success success='User Registered Successfully' />}
                    {error && <Error error='Email already registered' />}

                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>

                    <div>
                        {/* Add margin-bottom for spacing */}
                        <input
                            required
                            type='text'
                            placeholder='Name'
                            className='form-control mb-3'
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                        <input
                            required
                            type='text'
                            placeholder='Email'
                            className='form-control mb-3'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='form-control mb-3'
                            value={password}
                            required
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='form-control mb-3'
                            value={cpassword}
                            required
                            onChange={(e) => setcpassword(e.target.value)}
                        />
                        <button onClick={register} className='btn mt-3 mb-3'>
                            REGISTER
                        </button>
                        <br />
                        <a
                            style={{ color: 'black', display: 'inline-block', marginTop: '1rem' }}
                            href='/login'
                            className='mt-3'
                        >
                            Click Here to Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
