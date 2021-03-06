import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';
// страница авторизации
// используем materialyze

export const AuthPage = () => {
    //use hooks
    // const {loading, error, request} = useHttp();
    const {loading, request} = useHttp();

    // локальный State - form. Использование - ...form
    const [form, setForm] = useState({
        email:'', password:''
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    // запросы на сервер, надо прицепик к кнопке
    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form}); // this is in backend
            console.log(`Data: ${data} by Alexander Mukas`);
        } catch(e) {}

    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card teal darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Input email" 
                                    id="email" 
                                    type="text" 
                                    name="email"
                                    className="yellow-input"

                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input 
                                    placeholder="Enter password" 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    className="yellow-input"

                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                            disabled={loading}
                        >
                            Sign in
                        </button>
                        <button 
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}