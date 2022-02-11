import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';
import {FaCheckCircle} from 'react-icons/fa';
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

        if ((formData.touched.fullName && formData.fullName.length < 10) ||
            (formData.touched.fullName && !formData.fullName.match(validName))
        ) {
            errors.fullName = 'Seu nome deve ter ao menos 10 caracteres';
        }

        if ((formData.touched.fullName && formData.fullName.match(validName))) {
            valid++;
        }

        //validate title

        if ((formData.touched.title && formData.title.length < 10)) 
        {
            errors.title = 'Seu título deve ter ao menos 10 caracteres';
        }

        if ((formData.touched.title && formData.title.length >= 10))
        {
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
            errors.message = 'Sua mensagem deve ter ao menos 200 caracteres';
        }

        if (
            (formData.touched.message && formData.message.length >= 200)
        ) {
            valid++;
        }

        return errors;

    }

    const [modalSuccess, setModal] = useState(false);

    const CloseModalSuccess = () => {

        setModal(false);
        document.body.style.overflowY = 'auto';
        window.location.reload(false);

    }

    const onSubmit = (e) => {

        e.preventDefault();
         console.log(valid)
        //add database connection

        if(valid === 4) {

   

            setModal(true);
            document.body.style.overflowY = 'hidden';

        }

    }

    const errors = validate();

    const {fullName, title, email, message} = formData;

    return(

        <section className='contact_container'>

            <div className={modalSuccess ? 'modal-success showModal' : 'modal-success hiddeModal'}>

                <div className='box-success animate__animated animate__fadeInDown'>

                    <FaCheckCircle className='icon' />

                    <h2>Oba, recebemos sua mensagem!</h2>

                    <p>Estamos ansiosos para trabalhar com você. Em breve nossa equipe retornara o contato.</p>

                    <button onClick={CloseModalSuccess}>Entendi</button>

                </div>

            </div>

            <form onSubmit={onSubmit} className='animate__animated animate__slideInDown'>

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

                    <p>Mensagem</p>

                    <textarea id="message" name="message" value={message} onChange={onChange} onBlur={onBlur} required />

                    {errors.message && <small className='error_message'><AiFillCloseCircle/>&nbsp;{errors.message}</small>}

                </fieldset>

                <button className='btn_submit'>enviar</button>

            </form>

        </section>

    )

}

export default Form;