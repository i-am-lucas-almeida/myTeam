import CardProfile from './CardProfile';

import imageProfile_1 from '../../images/avatar-nikita.jpg';
import imageProfile_2 from '../../images/avatar-christian.jpg';
import imageProfile_3 from '../../images/avatar-cruz.jpg';
import imageProfile_4 from '../../images/avatar-drake.jpg';
import imageProfile_5 from '../../images/avatar-griffin.jpg';
import imageProfile_6 from '../../images/avatar-aden.jpg';

import imagePattern_1 from '../../images/bg-pattern-about-2-contact-1.svg';
import imagePattern_2 from '../../images/bg-pattern-home-4-about-3.svg';

export default function Profile() {

    return(

        <div className='profiles-c'>

            <img src={imagePattern_1} alt='imagem de fundo' className='pattern-profile_left' />  

            <div className='profile-title'>
                
                <h2>Conheça nosso time</h2>

            </div> 

            <div className='cards-c'>
                
                <CardProfile image={imageProfile_1} name='Adriana Almeida' profile='Fundadora & CEO' about='imagem da Adriana' linkLinkd='https://www.linkedin.com' linkTwi='https://twitter.com' />

                <CardProfile image={imageProfile_2} name='Marcelo Serrano' profile='Cofundador & COO' about='imagem do Marcelo' linkLinkd='https://www.linkedin.com' linkTwi='https://twitter.com' />

                <CardProfile image={imageProfile_3} name='Lázaro Lemos' profile='Cofundador & COO' about='imagem do Lázaro' linkLinkd='https://www.linkedin.com' linkTwi='https://twitter.com' />

                <CardProfile image={imageProfile_4} name='Antônio Ramos' profile='Líder de Negócios' about='imagem do Antônio' linkLinkd='https://www.linkedin.com' linkTwi='https://twitter.com' />

                <CardProfile image={imageProfile_5} name='Caio Silva' profile='Marketing de Leads' about='imagem do Caio' linkLinkd='https://www.linkedin.com' linkTwi='https://twitter.com' />

                <CardProfile image={imageProfile_6} name='Alan Santos' profile='Chefe de Talentos' about='imagem do Alan' linkLinkd='https://www.linkedin.com' linkTwi='https://twitter.com' />
                
            </div>   

            <img src={imagePattern_2} alt='imagem de fundo' className='pattern-profile_right' />      

        </div>

    )

}