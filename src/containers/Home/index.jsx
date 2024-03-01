import HomeContainer from "../../components/HomeComponent"
import { HomePage, Infos } from "./styles"
import PersonalData from "../../components/PersonalDataComponent"
import MyAddress from "../../components/MyAddressComponent"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/login';
                toast.error('Usuário não encontrado', {
                    position: 'top-right',
                    rtl: true
                });
                setLoading(false);
            } else {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/user', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Ocorreu um erro ao obter os dados do usuário:', error);
                    toast.error('Usuário não encontrado', {
                        position: 'top-right',
                        rtl: true
                    });
                    window.location.href = '/login';
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [])

    if (loading) {
        return <div>Carregando...</div>;
    }
    return (
        <HomePage>
            <h1>Meus dados</h1>
            <HomeContainer user={user} />
            <Infos>
                <PersonalData user={user} />
                <MyAddress user={user} />
            </Infos>
            <ToastContainer />
        </HomePage>
    )
}

export default Home