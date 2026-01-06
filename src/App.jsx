import Spline from '@splinetool/react-spline';


export default function App() {
  return (
       <div className="w-full bg-gray-900 text-white">

      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="w-full h-screen">
          <Spline scene="https://prod.spline.design/bMsPFsPTHRPMWgpA/scene.splinecode" />
        </div>

        {/* Hero Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 text-center md:text-left md:left-16 md:translate-x-0 md:translate-y-0 max-w-md">
          <h1 className="
            text-4xl md:text-6xl font-extrabold tracking-tight
            bg-gradient-to-r from-pink-500 via-purple-500 to-green-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_10px_rgba(255,92,182,0.7)]
            animate-[fadeUp_1s_ease_forwards]
          ">
            Welcome My 3D Website
          </h1>
          <p className="
            mt-4 text-base md:text-lg opacity-90
            animate-[fadeUp_1s_ease_forwards_0.2s]
          ">
            Welcome to my Spline scene. Interactive 3D experience built for the web.
          </p>
        </div>

        <style>
          {`
            @keyframes fadeUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Interactive 3D</h3>
            <p>Engage with a fully interactive 3D experience directly in your browser.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Looks perfect on mobile, tablet, and desktop devices without extra tweaks.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p>Simple React component makes it easy to embed 3D scenes anywhere.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 text-gray-900 text-center rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started Today</h2>
        <p className="mb-6 text-lg md:text-xl">Bring your website to life with immersive 3D experiences.</p>
        <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
          Explore Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-16 text-center bg-gray-900 text-gray-400">
        &copy; {new Date().getFullYear()} My 3D Website. All rights reserved.
      </footer>

    </div>
  );
}
