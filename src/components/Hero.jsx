import mainHero from '../assets/main.jpg'

const Hero = () => {
  return (
    <section className="float-start w-25 me-3">
      <img className="w-100" src={mainHero} alt="Hero"/>
    </section>
  );
};

export default Hero;
