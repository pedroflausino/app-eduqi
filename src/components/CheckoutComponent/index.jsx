import { Checkout, Form, Inputs, LabelAndInput } from "./styles"
import { IMaskInput } from "react-imask";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form"
import { z } from 'zod'
import axios from "axios";
import { zodResolver } from '@hookform/resolvers/zod'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const updateUserFormSchema = z.object({
    name: z.string()
        .nonempty('O nome é obrigatório')
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
    email: z.string().email('Por favor, insira um e-mail válido'),
    cpf: z.string().refine((value) => /^\d{11}$/.test(value), 'Por favor, insira um CPF válido'),
    phone: z.string().refine((value) => /^\d{11}$/.test(value), 'Por favor, insira um celular válido'),
    cep: z.string().refine((value) => /^\d{8}$/.test(value), 'Por favor, insira um CEP válido'),
    uf: z.string().nonempty('O estado é obrigatório')
        .max(2, 'Apanas a abreviação, ex: SP')
        .toUpperCase(),
    city: z.string().nonempty('A cidade é obrigatória'),
    address: z.string().nonempty('O endereço é obrigatório'),
    number: z.string().nonempty('O número é obrigatório'),
    complement: z.string().nonempty('O complemento é obrigatório'),
    district: z.string().nonempty('O bairro é obrigatório'),
    reference: z.string().nullable()
});

function CheckoutContainer() {

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(updateUserFormSchema)
    })

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
                    const { name, email, cpf, cep, city, phone, uf, address, number, complement, district, reference } = response.data;
                    setValue('name', name);
                    setValue('email', email);
                    setValue('cpf', cpf);
                    setValue('phone', phone);
                    setValue('cep', cep);
                    setValue('city', city);
                    setValue('address', address);
                    setValue('number', number);
                    setValue('uf', uf);
                    setValue('district', district);
                    setValue('complement', complement);
                    setValue('reference', reference);
                    setLoading(false)
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

    const updateUser = async (data) => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login';
            toast.error('Usuário não encontrado', {
                position: 'top-right',
                rtl: true
            });
        }
        try {
            const response = await axios.put('http://127.0.0.1:8000/users', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(response.data.message, {
                position: 'top-right',
                rtl: true
            });
        } catch (error) {
            console.error('Duplicated foreing keys:', error);
            toast.error('Email, CPF, ou celular já existentes', {
                position: 'top-right',
                rtl: true
            });
        }
    }

    const handleCepChange = async (value) => {
        const e = value._unmaskedValue
        if (e.length === 8) {
            try {
                const response = await axios.get(`https://api.brasilaberto.com/v1/zipcode/${e}`);
                const { street, complement, stateShortname, city, district } = response.data.result;
                if (street) {
                    setValue('address', street);
                }
                if (stateShortname) {
                    setValue('uf', stateShortname);
                }
                if (district) {
                    setValue('district', district);
                }
                if (complement) {
                    setValue('complement', complement);
                }
                if (city) {
                    setValue('city', city);
                }
            } catch (error) {
                console.error('Erro ao buscar endereço:', error);
            } finally { }
        }
    };



    return (
        <Checkout>
            <Form onSubmit={handleSubmit(updateUser)}>
                <LabelAndInput>
                    <label htmlFor="name">Nome</label>
                    <Inputs>
                        <input
                            placeholder="Informe seu nome"
                            id="name"
                            {...register('name')}
                            autoComplete="off"
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="email">E-mail</label>
                    <Inputs>
                        <input
                            placeholder="Informe seu e-mail"
                            id="email"
                            {...register('email')}
                            autoComplete="off"
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="cpf">Informe seu CPF</label>
                    <Inputs>
                        <input
                            placeholder="000.000.000-00"
                            id="cpf"
                            {...register('cpf')}
                            autoComplete="off"
                        />
                        {errors.email && <span>{errors.cpf.message}</span>}
                        {/*<Controller
                            name="cpf"
                            control={control}
                            error={{ message: 'cpf invalid' }}
                            render={({ field }) => (
                                <IMaskInput
                                    placeholder="000.000.000-00"
                                    mask="000.000.000-00"
                                    id="cpf"
                                    {...field}
                                    autoComplete="off"
                                />
                            )}
                        />
                        {errors.cpf && <span>{
                            errors.cpf.message === 'Required' ?
                                'Por favor, insira um CPF válido' :
                                errors.cpf.message
                        }</span>} */}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="phone">Informe seu Celular</label>
                    <Inputs>
                        <input
                            placeholder="(XX) - 9XXXX-XXXX"
                            id="phone"
                            {...register('phone')}
                            autoComplete="off"
                        />
                        {errors.email && <span>{errors.phone.message}</span>}
                        {/* <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <IMaskInput
                                    placeholder="(XX) - 9XXXX-XXXX"
                                    mask="(00) 90000-0000"
                                    id="phone"
                                    {...field}
                                    autoComplete="off"
                                />
                            )}
                        />
                        {errors.phone && <span>{
                            errors.phone.message === 'Required' ?
                                'Por favor, insira um número válido' :
                                errors.phone.message
                        }</span>} */}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="cep">CEP</label>
                    <Inputs id="cepInputDiv">
                        <input
                            placeholder="(XX) - 9XXXX-XXXX"
                            id="cep"
                            {...register('cep')}
                            autoComplete="off"
                        />
                        {errors.email && <span>{errors.cep.message}</span>}
                        {/* <Controller
                            name="cep"
                            control={control}
                            render={({ field }) => (
                                <IMaskInput
                                    id="cep"
                                    placeholder="00000-000"
                                    mask="00000-000"
                                    {...field}
                                    onComplete={(maskedValue, unmaskedValue) => handleCepChange(unmaskedValue)}
                                    autoComplete="off"
                                />
                            )}
                        />
                        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php/" target="blank">Não sei o CEP</a>
                        {errors.cep && <span>{
                            errors.cep.message === 'Required' ?
                                'Por favor, insira um CEP válido' :
                                errors.cep.message
                        }</span>} */}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput className="twoInputsInLine">
                    <div className="divsTwoInputsInLine shortInput">
                        <label htmlFor="uf">UF</label>
                        <Inputs>
                            <input
                                id="uf"
                                {...register('uf')}
                                autoComplete="off"
                            />
                            {errors.uf && <span>{errors.uf.message}</span>}
                        </Inputs>
                    </div>
                    <div className="divsTwoInputsInLine longInput">
                        <label htmlFor="city">Cidade</label>
                        <Inputs>
                            <input
                                id="city"
                                {...register('city')}
                                autoComplete="off"
                            />
                            {errors.city && <span>{errors.city.message}</span>}
                        </Inputs>
                    </div>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="address">Endereço</label>
                    <Inputs>
                        <input
                            id="address"
                            {...register('address')}
                            autoComplete="off"
                        />
                        {errors.address && <span>{errors.address.message}</span>}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput className="twoInputsInLine">
                    <div className="divsTwoInputsInLine shortInput">
                        <label htmlFor="number">Número</label>
                        <Inputs>
                            <input
                                id="number"
                                {...register('number')}
                                autoComplete="off"
                            />
                            {errors.number && <span>{errors.number.message}</span>}
                        </Inputs>
                    </div>
                    <div className="divsTwoInputsInLine longInput">
                        <label htmlFor="complement">Complemento</label>
                        <Inputs>
                            <input
                                id="complement"
                                {...register('complement')}
                                autoComplete="off"
                            />
                            {errors.complement && <span>{errors.complement.message}</span>}
                        </Inputs>
                    </div>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="district">Bairro</label>
                    <Inputs>
                        <input
                            id="district"
                            {...register('district')}
                            autoComplete="off"
                        />
                        {errors.district && <span>{errors.district.message}</span>}
                    </Inputs>
                </LabelAndInput>
                <LabelAndInput>
                    <label htmlFor="reference">Referência</label>
                    <Inputs>
                        <input
                            id="reference"
                            {...register('reference')}
                            autoComplete="off"
                        />
                        {errors.reference && <span>{errors.reference.message}</span>}
                    </Inputs>
                </LabelAndInput>
                <button type="submit">Ir para Envio</button>
            </Form>
            <ToastContainer />
        </Checkout>
    )
}

export default CheckoutContainer