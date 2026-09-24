import heroImage from "../../assets/hero-image.jpg"

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center" aria-selected="false">
      <img
        src={heroImage}
        alt="VÉSTIA fashion collection"
        className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.25rem] text-gray-500 mb-6" >
            NEW SEASON. NEW YOU.
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.03em] text-gray-900 leading-[1.05]">
            Timeless Style for Modern Life
          </h1>

          <p className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-gray-700">
            Discover premium quality clothing designed for comfort, confidence, and
            everyday elegance.
          </p>

          <div className="mt-10">
            <button className="px-8 py-4 bg-gray-900 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;