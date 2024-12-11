const Hero = () => {
    return (
      <section className="h-screen bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-between px-10">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Discover Your Potential</h1>
          <p className="text-lg mb-6">Empowering teams to build, monitor, and scale applications effortlessly.</p>
          <button className="bg-accent text-gray-800 px-6 py-3 rounded hover:bg-yellow-500">
            Get Started
          </button>
        </div>
        <div>
          <img src="hero-illustration.svg" alt="Hero Graphic" className="w-96" />
        </div>
      </section>
    );
  };
  
  export default Hero;
  