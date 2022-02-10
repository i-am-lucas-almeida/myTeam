import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';
import '../styles/Form.css';

const Form = () => {

    const initState = {

        fullName: '',
        title: '',
        email: '',
        message: '',
        touched: {
            fullName: false,
            title: false,
            email: false,
            message: false,
        }

    }

    const [formData, setFormData] = useState(initState);

    const onChange = (e) => {

        const { name, value } = e.target;
        setFormData( { ...formData, [name]: value } );

    }

    const onBlur = (e) => {

        const { name } = e.target;
        setFormData( { ...formData, touched: { ...formData.touched, [name]: true } } );

    }

    let valid = '';

    const validate = () => {

        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

        const validName = /^[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+$/;

        const errors = {
            fullName: '',
            title: '',
            email: '',
            message: '',
        }

        //validate fullname

        if ((formData.touched.fullName && formData.fullName.length < 5) ||
            (formData.touched.fullName && formData.fullName.length > 30) ||
            (formData.touched.fullName && !formData.fullName.match(validName))
        ) {
            errors.fullName = 'Seu nome deve ter entre 5 e 30 caracteres';
        }

        if ((formData.touched.fullName && formData.fullName.match(validName))) {
            valid++;
        }

        //validate title

        if ((formData.touched.title && formData.title.length < 5) ||
            (formData.touched.title && formData.title.length > 50)
        ) {
            errors.title = 'Seu título deve ter entre 5 e 50 caracteres';
        }

        if ((formData.touched.title && formData.title.length > 5) && 
            (formData.touched.title && formData.title.length <= 50)
        ) {
            valid++;
        }

        //validate email

        if ((formData.touched.email && formData.email.length === 0)) {
            errors.email = 'E-mail não pode ficar vazio';
        }

        if ((formData.touched.email && !formData.email.match(validEmail))) {
            errors.email = 'Esse e-mail é inválido';
        }

        if ((formData.touched.email && formData.email.match(validEmail))) {
            valid++;
        }

        //validate message
        if (
            (formData.touched.message && formData.message.length === 0) || 
            (formData.touched.message && formData.message.length < 200)
        ) {
            errors.message = 'Sua menssagem deve ter ao menos 200 caracteres';
        }

        if (
            (formData.touched.message && formData.message.length >= 200)
        ) {
            valid++;
        }

        return errors;

    }

    const onSubmit = (e) => {

        e.preventDefault();

        if(valid === 3) {

            alert('Thanks for message. I will get back in touch soon!');
            window.location.reload(false);

        }

    }

    const errors = validate();

    const {fullName, title, email, message} = formData;

    return(

        <section className='contact_container'>

            <form onSubmit={onSubmit}>

                <fieldset>

                    <p>Nome</p>

                    <input type="text" id="fullName" name="fullName" value={fullName} onChange={onChange} onBlur={onBlur} required />

                    {errors.fullName && <small className='error_message'><AiFillCloseCircle/>&nbsp;{errors.fullName}</small>}

                </fieldset>

                <fieldset>

                    <p>Título</p>

                    <input type="text" id="title" name="title" value={title} onChange={onChange} onBlur={onBlur} required />

                    {errors.title && <small className='error_message'><AiFillCloseCircle/>&nbsp;{errors.title}</small>}

                </fieldset>

                <fieldset>

                    <p>E-mail</p>

                    <input type="email" id="email" name="email" value={email} onChange={onChange} onBlur={onBlur} required />

                    {errors.email && <small className='error_message'><AiFillCloseCircle/>&nbsp;{errors.email}</small>}

                </fieldset>

                <fieldset>

                    <p>Menssagem</p>

                    <textarea id="message" name="message" value={message} onChange={onChange} onBlur={onBlur} required />

                    {errors.message && <small className='error_message'><AiFillCloseCircle/>&nbsp;{errors.message}</small>}

                </fieldset>

                <button className='btn_submit'>enviar</button>

            </form>

        </section>

    )

}

export default Form;