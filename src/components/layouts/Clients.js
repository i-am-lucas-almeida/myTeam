import '../styles/Clients.css';

import logoClient_1 from '../../images/logo-the-verge.png';
import logoClient_2 from '../../images/logo-jakarta-post.png';
import logoClient_3 from '../../images/logo-the-guardian.png';
import logoClient_4 from '../../images/logo-tech-radar.png';
import logoClient_5 from '../../images/logo-gadgets-now.png';

import imagePattern from '../../images/bg-pattern-about-4.svg';

export default function Clients() {

    return(

        <div>

            <div className='clients-c'>

                <img src={imagePattern} alt='imagem pattern' className='image-left' />

                <h2>Alguns de nossos clientes</h2>

                <div className="clients-img">

                    <img src={logoClient_1} alt='imagem the verge' />
                    <img src={logoClient_2} alt='imagem the verge' />
                    <img src={logoClient_3} alt='imagem the verge' />
                    <img src={logoClient_4} alt='imagem the verge' />
                    <img src={logoClient_5} alt='imagem the verge' />

                </div>

            </div>

        </div>

    )

}