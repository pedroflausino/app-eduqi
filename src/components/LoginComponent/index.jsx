import React, { useState } from 'react';
import axios from 'axios';
import { Login, Form, Inputs, LabelAndInput } from "./styles";
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const changeInput = (event) => {
        event.target.id === 'mail' ?
            setEmail(event.target.value) :
            setPassword(event.target.value);
        }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login', {
                email: email,
                password: password
            });
            if (response.data.data && response.data.data.token) {
                localStorage.setItem('token', response.data.data.token);
                window.location.href = '/';
            } else {
                toast.error('Usuário ou senha inválidos', {
                    position: 'top-right',
                    rtl: true
                });
            }
        } catch (error) {
            console.error('Ocorreu um erro ao fazer login:', error);
            toast.error('Ocorreu um erro ao fazer login', {
                position: 'top-right',
                rtl: true
            });
        }
    }

    return (
        <Login>
            <Form onSubmit={handleSubmit}>
                <LabelAndInput>
                    <label htmlFor="email">Email</label>
                    <Inputs>
                        <input
                            placeholder="Informe seu e-mail"
                            id="mail"
                            value={email}
                            onChange={changeInput}
                            autoComplete="off"
                        />
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="password">Senha</label>
                    <Inputs>
                        <input
                            placeholder="Informe sua senha"
                            type={showPassword ? 'text' : 'password'}
                            id="pass"
                            value={password}
                            onChange={changeInput}
                            autoComplete="off"
                        />
                        {
                            showPassword ? (
                                <IoEyeOffOutline onClick={togglePasswordVisibility}></IoEyeOffOutline>
                            ) : (
                                <IoEyeOutline onClick={togglePasswordVisibility}></IoEyeOutline>
                            )
                        }
                    </Inputs>
                </LabelAndInput>
                <button type="submit">Entrar</button>
            </Form>
            <ToastContainer />
        </Login>
    )
}

export default LoginContainer;
