const Coalition: React.FC = () => {
  return (
    <section className="coalition__container">
      <div className="coalition__logo-container">
        <img src="logos/kdu.png" alt="logo kdu-csl" />
        <img src="logos/sz-logo.svg" alt="logo strany zelenych" />
        <img src="logos/pirati-logo.svg" alt="logo piratske strany" />
        <img
          className="coalition__logo-budoucnost"
          src="logos/budoucnost-logo.svg"
          alt="logo strany budoucnost"
        />
      </div>
    </section>
  );
};

export default Coalition;
