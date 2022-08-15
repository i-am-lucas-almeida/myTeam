import "../styles/pages/Home.css";

import imagePattern_1 from "../images/bg-pattern-home-1.svg";
import imagePattern_2 from "../images/bg-pattern-home-2.svg";
import imagePattern_3 from "../images/bg-pattern-home-3.svg";
import imagePattern_4 from "../images/bg-pattern-home-4-about-3.svg";
import imagePattern_5 from "../images/bg-pattern-home-5.svg";

import iconToolsHome_1 from "../images/icon-person.svg";
import iconToolsHome_2 from "../images/icon-cog.svg";
import iconToolsHome_3 from "../images/icon-chart.svg";

import imageQuote from "../images/icon-quotes.svg";

import imagePerson_1 from "../images/avatar-kady.jpg";
import imagePerson_2 from "../images/avatar-aiysha.jpg";
import imagePerson_3 from "../images/avatar-arthur.jpg";

import PreFooter from "../components/PreFooter";

export default function Home() {

    return (

        <div>

            <div className="container">

                <img src={imagePattern_1} alt="imagem de fundo" className="pattern-home_top" />

                <header className="header-c">

                    <div className="header-left animate__animated animate__fadeInUp">

                        <h1>Encontre os melhores <span>talentos</span></h1>

                    </div>

                    <div className="header-right animate__animated animate__fadeInUp">

                        <p>Encontrar as pessoas certas e construir equipes de alto desempenho pode ser difícil. A maioria das empresas não está aproveitando a abundância de talentos globais. Estamos prestes a mudar isso.</p>

                    </div>

                    <img src={imagePattern_2} alt="imagem de fundo" className="pattern-home_bottom" />

                </header>

            </div>

            <main>

                <div className="home-tools_c">

                    <div className="container home-tools">

                        <div className="home-left">

                            <h2>Construa &amp; gerencie equipes distribuídas como ninguém.</h2>

                        </div>

                        <div className="home-right">

                            <aside>

                                <img src={iconToolsHome_1} alt="imagem qualidade dos talentos" />

                                <article>

                                    <h3>Indivíduos experientes</h3>

                                    <p>Nossa rede é formada por profissionais altamente experientes e apaixonados pelo que fazem.</p>

                                </article>

                            </aside>

                            <aside>

                                <img src={iconToolsHome_2} alt="imagem ferramentas do software" />

                                <article>

                                    <h3>Fácil de implementar</h3>

                                    <p>Nossos processos foram refinados ao longo de anos de implementação, o que significa que nossas equipes sempre entregam.</p>

                                </article>

                            </aside>

                            <aside>

                                <img src={iconToolsHome_3} alt="imagem impulsionar a inovação" />

                                <article>

                                    <h3>Produtividade Aprimorada</h3>

                                    <p>Nossa plataforma personalizada com análises integradas ajuda você a gerenciar suas equipes distribuídas.</p>

                                </article>

                            </aside>

                        </div>

                    </div>

                    <img src={imagePattern_3} alt="imagem de fundo" className="pattern-home-tolls_right" />

                </div>

                <div className="home-testimonials-c">

                    <img src={imagePattern_4} alt="imagem de fundo" className="pattern-home-testimonials_left" />

                    <div className="container">

                        <div className="testimonials-title">

                            <h1>Entregando resultados reais para as principais empresas. Algumas de nossas <span>histórias de sucesso:</span></h1>

                        </div>

                        <div className="testimonials-flex">

                            <aside>

                                <img src={imageQuote} alt="ícone aspas" />

                                <p>“A equipe se encaixa perfeitamente no conjunto de habilidades especializadas necessárias. Eles se concentraram nos recursos mais essenciais, ajudando-nos a lançar a plataforma oito meses mais rápido do que o planejado.”</p>

                                <article>

                                    <h3>Vanessa Groe</h3>
                                    <h4>Gerente de produto na Bookmark</h4>

                                    <img src={imagePerson_1} alt="imagem do cliente" />

                                </article>

                            </aside>

                            <aside>

                                <img src={imageQuote} alt="ícone aspas" />

                                <p>“Precisávamos automatizar todo o nosso processo de integração. A equipe entrou e construiu toda a jornada. Desde que foi lançado, a retenção de usuários atingiu o teto!”</p>

                                <article>

                                    <h3>Ana Senna</h3>
                                    <h4>Fundadora da Manage</h4>

                                    <img src={imagePerson_2} alt="imagem do cliente" />

                                </article>

                            </aside>

                            <aside>

                                <img src={imageQuote} alt="ícone aspas" />

                                <p>
                                    “Surpreendente. Nossa equipe nos ajudou a construir um aplicativo que trouxe uma nova experiência para a contratação de um fisioterapeuta. O lançamento foi um sucesso instantâneo com 100 mil downloads no primeiro mês.”
                                </p>

                                <article>

                                    <h3>Arthur Cabral</h3>
                                    <h4>Co-fundador da MyPhysio</h4>

                                    <img src={imagePerson_3} alt="imagem do cliente" />

                                </article>

                            </aside>

                        </div>

                    </div>

                    <img src={imagePattern_5} alt="imagem de fundo" className="pattern-home-testimonials_right" />

                </div>

            </main>

            <PreFooter />

        </div>

    );

}