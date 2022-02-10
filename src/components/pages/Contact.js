import imageContact_1 from '../../images/icon-person.svg';
import imageContact_2 from '../../images/icon-cog.svg';
import imageContact_3 from '../../images/icon-chart.svg';

import imagePattern_1 from '../../images/bg-pattern-home-1.svg';
import imagePattern_2 from '../../images/bg-pattern-contact-2.svg';

import Form from '../layouts/Form';

export default function Contact() {

    return(

        <div className="container">

            <img src={imagePattern_1} alt='imagem de fundo' className='pattern-contact_top' />  

            <div className='contact-c'>

                <div className="box-contact_left">

                    <h1>Contato</h1>

                    <h2>Pergunte-nos sobre</h2>

                    <div className='box-contact_about'>

                        <aside>

                            <img src={imageContact_1} alt='imagem qualidade dos talentos' />

                            <p>A qualidade da nossa rede de talentos</p>

                        </aside>

                        <aside>

                            <img src={imageContact_2} alt='imagem ferramentas do software' />

                            <p>Uso e implementação do nosso software</p>

                        </aside>

                        <aside>

                            <img src={imageContact_3} alt='imagem impulsionar a inovação' />

                            <p>Como ajudamos a impulsionar a inovação</p>

                        </aside>

                    </div>

                </div>

                <Form/>

            </div>

            <img src={imagePattern_2} alt='imagem de fundo' className='pattern-contact_bottom' />

        </div>
        
    )

}