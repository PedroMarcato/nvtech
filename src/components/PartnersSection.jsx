import Carousel from "./Carousel";
import CarouselCell from "./CarouselCell";

function PartnersSection() {
  const partners = [
    { name: "Empresa 1", logo: "https://www.reallacto.com.br/site/assets/img/logo_header-dark.svg" },
    { name: "Empresa 2", logo: "https://placarsoft-guaira.s3.sa-east-1.amazonaws.com/01/setting/ac/61/325551970914085207/escudo-2-327369616470982766.png" },
    { name: "Empresa 3", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCufUU0l16dG6tixPR96dnbCnJPlJFbzvWvg7Nn0YBIv2PDsRhvzzmGK_KfstBpZrfrs&usqp=CAU" },
  ];

  const banners = [
    { image: "https://i.imgur.com/6ZvHb6m.png" },
    { image: "https://i.imgur.com/f9ajHhB.png" },
    { image: "https://i.imgur.com/GjqfWU5.png" },
    { image: "https://i.imgur.com/bT9nwZ9.png" },
  ];

  return (
    <section className="partners-section">
      <div className="title">
      <h1>Portifólio</h1>
      <hr style={{width: '150px', borderColor: '#55021b'}} />
      </div>
      <p>Algumas empresas que escolheram a <strong>NV TECH 🚀</strong></p>
      <div className="partners-logos">
        {partners.map((partner, idx) => (
          <img key={idx} src={partner.logo} alt={partner.name} title={partner.name} />
        ))}
      </div>
      <Carousel banners={banners} />
      <CarouselCell />
    </section>
  );
}

export default PartnersSection;