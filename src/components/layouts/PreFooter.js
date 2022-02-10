import '../styles/PreFooter.css';

import imagePattern from '../../images/bg-pattern-home-6-about-5.svg';

import Button from './Button';

export default function PreFooter() {

    return(

        <div className='preFooter-c'>

            <img src={imagePattern} alt='imagem de fundo' className='pattern-left' />

            <div className='container'>

                <h2>Pronto para começar?</h2>

                <Button color='button-preFooter' />

            </div>

        </div>

    )

}