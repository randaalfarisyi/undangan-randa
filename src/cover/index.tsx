import BorderGold from "../component/border-gold";

interface Props {
  openInvitation: () => void;
}

const Cover = ({ openInvitation }: Props) => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-[#2c1810] via-[#44050083] to-[#ff003c38] text-gray-100 font-sans relative overflow-hidden">
      {/* <RumahGadang /> */}
      <BorderGold />
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#e6c8648f] opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#b8860b] opacity-20 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#e6c8648f] opacity-20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-700"></div>
      </div>

      {/* Cover Section */}
      <section className="flex flex-col items-center justify-center min-h-screen w-screen px-4 sm:px-6 text-center relative">
        {/* Top Flourish */}
        <div className="mb-5 animate-fade-in">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-3 h-3 bg-[#e6c8648f] rounded-full animate-ping"></div>
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
        </div>

        {/* Pre-text */}
        <p className="text-xs sm:text-sm md:text-base text-[#e6c8648f] mb-6 mt-4 tracking-[2px] sm:tracking-[3px] uppercase animate-fade-in delay-200">
          The Wedding Of
        </p>

        {/* Names */}
        <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-vibes font-normal mb-1 text-center leading-snug tracking-wide drop-shadow-lg">
          <span className="block sm:inline italic bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-transparent bg-clip-text drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
            Randa
          </span>{" "}
          <span className="block sm:inline italic bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-transparent bg-clip-text drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
            Rini
          </span>
        </h1>

        {/* { Rumah Gadang } */}
        <div className="w-full">
          <img src="rumah-gadang.png" alt="rumah" className="opacity-[0.3]" />
        </div>

        {/* Guest Info */}
        <div className="mt-10 animate-fade-in delay-1000">
          <p className="text-sm text-[#e6c8648f] mb-2">Kepada Yth:</p>
          <div className="text-[#e6c8648f] backdrop-blur-sm px-4 py-2">
            <p className="text-[#e2d7b1] italic font-medium">
              Fulan dan Keluarga
            </p>
          </div>
        </div>

        {/* Open Invitation Button */}
        <div className="animate-fade-in delay-800 mt-3">
          <button
            onClick={openInvitation}
            className="group relative bg-gradient-to-r from-[#e6c86454] to-[#e6c86454] text-white px-3 sm:px-12 py-1 sm:py-2 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-lg sm:text-xl font-semibold overflow-hidden border border-[#e6c8648f]/50"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6c86454] to-[#8b1538] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Button Content */}
            <div className="relative flex items-center space-x-3">
              <span className="text-sm text-[#e2d7b1]">Buka Undangan</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </div>

            {/* Sparkle Effect */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#e6c8648f] rounded-full opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-20 transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2"></div>
          </button>
        </div>

        {/* Bottom Flourish */}
        <div className="mt-12 animate-fade-in delay-1200">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-3 h-3 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(10deg); }
            }
            .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
            .delay-500 { animation-delay: 0.5s; }
            .delay-600 { animation-delay: 0.6s; }
            .delay-700 { animation-delay: 0.7s; }
            .delay-800 { animation-delay: 0.8s; }
            .delay-1000 { animation-delay: 1s; }
            .delay-1200 { animation-delay: 1.2s; }
          `,
        }}
      />
    </div>
  );
};

export default Cover;
