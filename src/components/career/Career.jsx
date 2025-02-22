import "./Career.css";
import Hero from "./Hero/Hero";
import Founder from "./Founders/Founder";
import Opening from "./Opening/Opening";
const Careers26 = () => {
  return (
    <>
      <div className="container">
        <Hero />

        {/* Culture Section */}
        <div className="culture-section">
          <h2>Culture</h2>
          <p>
            Our values define who we are, what we want to achieve and most
            importantly how we’re going to do it. They create our collective
            path and guide our every step, every action. When in doubt, they’re
            the clarity we need and when we’re on our way to achieve big things,
            they’re the confirmation we want.
          </p>
        </div>

        <Opening />

        <section className="career-contact">
          <p>
            <strong>Send us your CV:</strong>{" "}
            <a href="mailto:career@technoro.com">career@technoro.com</a>
          </p>
        </section>

        <Founder />
      </div>
    </>
  );
};

export default Careers26;
