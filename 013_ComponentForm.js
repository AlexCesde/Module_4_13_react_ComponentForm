import React, { useState, useRef } from 'react';

const ComponentForm = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const valueForm = useRef();
    const valueLogin = useRef();
    const valuePassword = useRef();
    const valueMarital = useRef();
    const valueStudies = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Status
        console.log(valueMarital.current.value);
        console.log(valueStudies.current.checked);

        setLogin(valueLogin.current.value);
        setPassword(valuePassword.current.value);

        valueLogin.current.value = "";
        valuePassword.current.value = "";
    };

    return (
        <>
            <form onSubmit={handleSubmit} ref={valueForm}>
                <div><label>Login</label></div>
                <div>
                    <input type="text" ref={valueLogin} />
                </div>
                <div><label>Password</label></div>
                <div>
                    <input type="password" ref={valuePassword} />
                </div>
                <div><label>Marital State</label></div>
                <div>
                    <select ref={valueMarital}>
                        <option value="1">Single</option>
                        <option value="2">Multiple</option>
                        <option value="3">Married</option>
                    </select>
                </div>
                <div><label>Studies</label></div>
                <div>
                    <input type="checkbox" name="studies" id="s_primary" value="primary" ref={valueStudies} />
                    <label htmlFor="s_primary">Primary</label>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <div>Login: {login}, Password: {password}</div>
        </>
    );
};

export default ComponentForm;