const SupportParties: React.FC = () => {
  return (
    <section className="support-parties__container">
      <h2 className="heading-secondary">S podporou </h2>
      <div className="support-parties__logo-container">
        <img
          className="coalition__logo-budoucnost"
          src="logos/budoucnost-logo.svg"
          alt="logo strany budoucnost"
        />
         <img
          className="support-parties__logo-senator"
          src="logos/senator_2.png"
          alt="logo strany senator"
        />
        <img
          className="support-parties__logo-hnhrm"
          src="logos/hnhrm.png"
          alt="logo strany hnhrm"
        />
      </div>
    </section>
  );
};

export default SupportParties;
