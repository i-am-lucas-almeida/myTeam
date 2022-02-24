import PreFooter from '../layouts/PreFooter';
import Clients from '../layouts/Clients';
import Profile from '../layouts/Profile';
import '../../styles/About.css';

import imagePattern_1 from '../../images/bg-pattern-about-1-mobile-nav-1.svg';

export default function About() {

    return(

        <div>

            <div className="container"> 

                <div className="about-top">

                    <div className='about-top_left animate__animated animate__fadeInUp'>

                        <h1>Quem somos?</h1>  

                    </div>

                    <div className='about-top_right animate__animated animate__fadeInUp'>

                        <p>Ajudamos as empresas a construir equipes dinâmicas compostas pelos melhores talentos globais. Usando nossa rede de profissionais apaixonados, impulsionamos a inovação e entregamos resultados incríveis. Equipes talentosas e diversificadas moldam os melhores produtos e experiências. Levaremos essas equipes até você.</p>

                    </div>

                    <img src={imagePattern_1} alt='imagem de fundo' className='pattern-about_right' />  

                </div>

            </div>

            <Profile/>

            <Clients/>

            <PreFooter/>

        </div>

    )

}