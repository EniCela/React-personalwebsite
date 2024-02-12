export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--titlee">Hey, I'm ENi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Writing code is like solving puzzles ,
            <br /> with infinite solutions.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/eni_photo4.png" alt="Hero Section" />
      </div>
    </section>
  );
}
