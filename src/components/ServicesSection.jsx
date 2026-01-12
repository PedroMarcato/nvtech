import cameras from '../assets/img/OficialImgs/cameras.svg';
import redeOpticas from '../assets/img/OficialImgs/redeOpticas.svg';
import configuracao from '../assets/img/OficialImgs/configuracao.svg';
import manutencao from '../assets/img/OficialImgs/manutencao.svg';

function ServicesSection() {
    return (
        <section id="services" className="services-section">
            <div className="title">
            <h1 className="font-plex">Conheça nossos Serviços</h1><hr style={{width: '300px'}} />
            </div>
            
            <div className="services-header">
                <div>
                    <h3>Câmeras de segurança</h3>
                    <img src={cameras} alt="img" />
                    <ul>
                        <li>
                            Prestamos serviços de instalação de câmeras de segurança, desde
                            as mais simples até as mais complexas, com tecnologia de ponta.
                            Nossas soluções garantem monitoramento estratégico para
                            empresas e residências, cuidando de cada detalhe, da
                            configuração à otimização, para proporcionar segurança e
                            tranquilidade.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Redes Ópticas</h3>
                    <img src={redeOpticas} alt="img 2" />
                    <ul>
                        <li>
                            Desenvolvemos soluções em redes ópticas que proporcionam uma
                            conectividade robusta e confiável. Nossa experiência em fibra óptica
                            garante a transmissão de dados em alta velocidade por longas
                            distâncias, cobrindo todas as necessidades de rede e internet com
                            qualidade e estabilidade superiores.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Configuração e Gerenciamento de Redes e Equipamentos</h3>
                    <img src={configuracao} alt=" img 3" />
                    <ul>
                        <li>
                            Trabalhamos com a configuração e gerenciamento de
                            equipamentos de rede e segurança, garantindo
                            máxima eficiência e desempenho. Atuamos com as
                            principais tecnologias, para oferecer
                            soluções completas e personalizadas.
                            Tendo elas como:
                        </li>
                        <li className="list-style">Mikrotik</li>
                        <li className="list-style">UniFi</li>
                        <li className="list-style">Ubiquiti</li>
                        <li className="list-style">Switch avançadas de gerenciamento</li>
                    </ul>
                </div>
                <div>
                    <h3>Manutenção e Otimização de redes</h3>
                    <img src={manutencao} alt="img 4" />
                    <ul>
                        <li>
                            Realizamos serviços de reparo e melhoria de desempenho para redes de internet,
                            incluindo a instalação de equipamentos específicos como Starlink, com foco em
                            configurações e posicionamento ideais para assegurar uma conectividade mais estável e
                            eficiente.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default ServicesSection;