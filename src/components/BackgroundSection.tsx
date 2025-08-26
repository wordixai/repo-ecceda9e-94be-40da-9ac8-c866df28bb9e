const BackgroundSection = () => {
  return (
    <section className="relative py-40 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <img
          alt="Tokyo AI"
          width="1000"
          height="1000"
          className="absolute bottom-[-20px] opacity-50 w-full h-auto"
          src="https://www.usetokyo.com/logo-tokyo2.svg"
        />
      </div>
    </section>
  );
};

export default BackgroundSection;