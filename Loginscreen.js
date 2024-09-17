import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginstate = useSelector(state => state.loginUserReducer);
    const { error, loading } = loginstate;

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/';  // Fixed the redirect to '/'
        }
    }, []);

    function login() {
        const user = { email, password };
        dispatch(loginUser(user));
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>

                    {loading && <Loading />}
                    {error && <Error error='Invalid Credentials' />}

                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Login</h2>

                    <div>
                        {/* Add mb-3 for margin between input fields */}
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
                        <button onClick={login} className='btn mt-3'>LOGIN</button>
                        <br />
                        <a style={{ color: 'black', display: 'inline-block', marginTop: '1rem' }} href='/register' className='mt-3 mb-3'>
                            Click Here to Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
