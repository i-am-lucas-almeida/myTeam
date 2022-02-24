import CardProfile from './CardProfile';

import imageProfile_1 from '../../images/avatar-nikita.jpg';
import imageProfile_2 from '../../images/avatar-christian.jpg';
import imageProfile_3 from '../../images/avatar-cruz.jpg';
import imageProfile_4 from '../../images/avatar-drake.jpg';
import imageProfile_5 from '../../images/avatar-griffin.jpg';
import imageProfile_6 from '../../images/avatar-aden.jpg';

import imagePattern_1 from '../../images/bg-pattern-about-2-contact-1.svg';
import imagePattern_2 from '../../images/bg-pattern-home-4-about-3.svg';
import { useState } from 'react';

export default function Profile() {

    const [card_1, setCard_1] = useState(false);
    const [card_2, setCard_2] = useState(false);
    const [card_3, setCard_3] = useState(false);
    const [card_4, setCard_4] = useState(false);
    const [card_5, setCard_5] = useState(false);
    const [card_6, setCard_6] = useState(false);

    return(

        <div className='profiles-c'>

            <img src={imagePattern_1} alt='imagem de fundo' className='pattern-profile_left' />  

            <div className='profile-title'>
                
                <h2>Conheça nosso time</h2>

            </div> 

            <div className='cards-c'>
                
                <CardProfile image={imageProfile_1} name='Adriana Almeida' profile='Fundadora & CEO' about='imagem da Adriana' reflection='“Sempre me surpreende quanto talento existe em todos os cantos do globo. Vamos encontrá-los.”' event={() => setCard_1(!card_1)} show={card_1 ? 'show' : ''} hidden={card_1 ? 'hidden' : ''} btnState={card_1 ? 'btn-active' : ''} />

                <CardProfile image={imageProfile_2} name='Marcelo Serrano' profile='Cofundador & COO' about='imagem do Marcelo' reflection='“Equipes distribuídas exigiam processos exclusivos. Você precisa abordar o trabalho de forma inovadora.”' event={() => setCard_2(!card_2)} show={card_2 ? 'show' : ''} hidden={card_2 ? 'hidden' : ''} btnState={card_2 ? 'btn-active' : ''} />

                <CardProfile image={imageProfile_3} name='Lázaro Lemos' profile='Cofundador & COO' about='imagem do Lázaro' reflection='“A tecnologia está na vanguarda para habilitar equipes distribuídas. É aí que entramos.”' event={() => setCard_3(!card_3)} show={card_3 ? 'show' : ''} hidden={card_3 ? 'hidden' : ''} btnState={card_3 ? 'btn-active' : ''} />

                <CardProfile image={imageProfile_4} name='Antônio Ramos' profile='Líder de Negócios' about='imagem do Antônio' reflection='“Contratar pessoas semelhantes de origens semelhantes é uma maneira infalível de fracassar.”' event={() => setCard_4(!card_4)} show={card_4 ? 'show' : ''} hidden={card_4 ? 'hidden' : ''} btnState={card_4 ? 'btn-active' : ''} />

                <CardProfile image={imageProfile_5} name='Caio A. Silva' profile='Marketing de Leads' about='imagem do Caio' reflection='“Perspectivas únicas moldam produtos únicos, que é o que você precisa para sobreviver nos dias de hoje.”' event={() => setCard_5(!card_5)} show={card_5 ? 'show' : ''} hidden={card_5 ? 'hidden' : ''} btnState={card_5 ? 'btn-active' : ''} />

                <CardProfile image={imageProfile_6} name='Alan Santos' profile='Chefe de Talentos' about='imagem do Alan' reflection='“Equipes capacitadas criam produtos realmente incríveis. Coloque as no caminho e deixe-os segui-la.”' event={() => setCard_6(!card_6)} show={card_6 ? 'show' : ''} hidden={card_6 ? 'hidden' : ''} btnState={card_6 ? 'btn-active' : ''} />
                
            </div>   

            <img src={imagePattern_2} alt='imagem de fundo' className='pattern-profile_right' />      

        </div>

    )

}