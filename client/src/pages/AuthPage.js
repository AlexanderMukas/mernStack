import React from 'react';
// страница авторизации
// используем materialyze

export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4">Sign in</button>
                        <button className="btn grey lighten-1 black-text">Register</button>
                    </div>
                </div>

            </div>
        </div>
    );
}