/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import BorderGold from "../component/border-gold";

import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase"; // path sesuai project

import {
  Heart,
  Calendar,
  Camera,
  MapPin,
  MessageCircle,
  ClipboardList,
  Sparkles,
  Gift,
} from "lucide-react";
import BorderSide from "../component/border-side";

interface Props {
  openInvitation: () => void;
}

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#2c1810]/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

// Updated Sections with Intersection Observer for animations
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
        ...options,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return [sectionRef, isVisible];
};

// Cover Component (your existing component)
const Cover = ({ openInvitation }: Props) => {
  const params = new URLSearchParams(window.location.search);
  const rawName = params.get("name") || ""; // "randa+alfarisyi+&+Partner"
  const name = rawName.replace(/\+/g, " ");

  const decodedName = name ? name : "";
  return (
    <div className="min-h-screen min-w-screen max-w-[500px] h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2c1810] via-[#44050083] to-[#ff003c38] text-gray-100 font-sans relative overflow-hidden">
      <div className="w-full animate-[fadeInScale_1.5s_ease-out_2s_both] opacity-0">
        <BorderGold />
      </div>

      {/* Background Floating Elements - Now Visible with Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#e6c8648f] opacity-20 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#b8860b] opacity-20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#e6c8648f] opacity-20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-[float_7s_ease-in-out_infinite]"></div>
      </div>

      {/* Cover Section */}
      <section className="flex flex-col items-center justify-center min-h-screen w-screen px-4 sm:px-6 text-center relative max-w-[500px]">
        {/* Top Flourish */}
        <div className="mb-5 animate-[slideInFromTop_1.2s_ease-out_0.3s_both]">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f] animate-[expandFromCenter_1s_ease-out_0.8s_both]"></div>
            <div className="w-3 h-3 bg-[#e6c8648f] rounded-full animate-[scaleIn_0.8s_ease-out_1s_both]"></div>
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f] animate-[expandFromCenter_1s_ease-out_0.8s_both]"></div>
          </div>
        </div>

        {/* Pre-text */}
        <p className="text-xs sm:text-sm md:text-base text-[#e6c8648f] mb-6 mt-4 tracking-[2px] sm:tracking-[3px] uppercase animate-[fadeInUp_1s_ease-out_0.6s_both] opacity-0">
          The Wedding Of
        </p>

        {/* Names - Main Animation */}
        <h1 className="text-5xl md:text-4xl lg:text-7xl lg:leading-[1.2] font-vibes font-normal mb-1 text-center leading-snug tracking-wide drop-shadow-lg flex flex-col items-center justify-center">
          <span className="block sm:inline italic bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-transparent bg-clip-text drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)] animate-[slideInFromLeft_1.2s_ease-out_0.9s_both] opacity-0">
            Randa
          </span>
          <span className="animate-[scaleIn_0.8s_ease-out_1.4s_both] opacity-0 inline-block text-[40px] mx-3">
            &
          </span>
          <span className="block sm:inline italic bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-transparent bg-clip-text drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)] animate-[slideInFromRight_1.2s_ease-out_1.6s_both] opacity-0">
            Rini
          </span>
        </h1>

        {/* Rumah Gadang */}
        <div className="w-full animate-[fadeInScale_1.5s_ease-out_2s_both] opacity-0">
          <img
            src="rumah-gadang.png"
            alt="rumah"
            className="opacity-[0.3] animate-[gentle-sway_4s_ease-in-out_infinite]"
          />
        </div>

        {/* Guest Info */}
        <div className="mt-10 animate-[slideInFromBottom_1s_ease-out_2.5s_both] opacity-0">
          <p className="text-sm text-[#e6c8648f] mb-2">Kepada Yth:</p>
          <div className="text-[#e6c8648f] backdrop-blur-sm px-4 py-2 animate-[glow_2s_ease-in-out_infinite_alternate]">
            <p className="text-[#e2d7b1] italic font-medium">{decodedName}</p>
          </div>
        </div>

        {/* Open Invitation Button */}
        <div className="animate-[bounceInUp_1.2s_ease-out_3s_both] opacity-0 mt-3">
          <button
            onClick={openInvitation}
            className="group relative bg-gradient-to-r from-[#e6c86454] to-[#e6c86454] text-white px-3 sm:px-12 py-1 sm:py-2 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-lg sm:text-xl font-semibold overflow-hidden border border-[#e6c8648f]/50 animate-[pulse_2s_ease-in-out_infinite]"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6c86454] to-[#8b1538] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Button Content */}
            <div className="relative flex items-center space-x-3">
              <span className="text-sm text-[#e2d7b1]">Buka Undangan</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 animate-[wiggle_1s_ease-in-out_infinite]">
                →
              </span>
            </div>
            {/* Sparkle Effect */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#e6c8648f] rounded-full opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-20 transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2"></div>
          </button>
        </div>

        {/* Bottom Flourish */}
        <div className="mt-12 animate-[slideInFromBottom_1.2s_ease-out_3.5s_both] opacity-0">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f] animate-[expandFromCenter_1s_ease-out_4s_both]"></div>
            <div className="w-3 h-3 bg-[#e6c8648f] rounded-full animate-[pulse_2s_ease-in-out_infinite] animate-[scaleIn_0.8s_ease-out_4.2s_both]"></div>
            <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f] animate-[expandFromCenter_1s_ease-out_4s_both]"></div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceInUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
          }
          80% {
            transform: translateY(5px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes expandFromCenter {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gentle-sway {
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(230, 200, 100, 0.3);
          }
          100% {
            box-shadow: 0 0 20px rgba(230, 200, 100, 0.6);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

// Navigation Component
const Navigation = ({ sections, currentSection, scrollToSection }: any) => {
  return (
    <nav className="fixed w-screen top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2c1810]/90 to-[#44050083]/90 backdrop-blur-sm border-b border-[#e6c8648f]/20">
      <div className="flex justify-center space-x-2 sm:space-x-4 px-4 py-3 overflow-x-auto">
        {sections.map((section: any, index: any) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`px-1 sm:px-1 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              currentSection === index
                ? "bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white scale-105"
                : "text-[#e6c8648f] hover:bg-[#e6c8648f]/20 hover:scale-105"
            }`}
          >
            {section.icon}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Bride and Groom Section
const BrideGroomSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 mb-20"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-4">
            Pengantin
          </h2>
          <p className="text-[#e2d7b1] text-lg opacity-80">
            Dengan mengharap rahmat Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i dalam acara pernikahan kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Groom */}
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-0"
            }`}
          >
            <div className="relative mb-8 group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#e6c8648f]/50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="randa.png"
                  alt="Randa"
                  className="w-full h-full object-cover"
                  onError={(e: any) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] hidden items-center justify-center text-6xl text-white">
                  👨
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#e6c8648f] rounded-full animate-bounce"></div>
            </div>

            <h3 className="text-4xl sm:text-5xl font-vibes text-[#e6c8648f] mb-2">
              Randa Alfarisyi
            </h3>
            <p className="text-[#e2d7b1] mb-4">Putra dari:</p>
            <p className="text-white font-medium">
              Bapak Syafnel & Ibu Desritta
            </p>

            <div className="mt-6 space-y-2 text-sm text-[#e2d7b1] opacity-80">
              <p>
                📍 Labuah Lanyah, Jorong Sitapung, Nagari Balai Gurah, Ampek
                Angkek, Agam, Sumatera Barat
              </p>
              <p>📧 randaalfarisyi@gmail.com</p>
            </div>
          </div>

          {/* Decorative Heart */}
          <div className="hidden md:flex justify-center items-center">
            <div className="text-6xl text-[#e6c8648f] animate-pulse">💕</div>
          </div>

          {/* Bride */}
          <div
            className={`text-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-0"
            }`}
          >
            <div className="relative mb-8 group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#e6c8648f]/50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="rini.png"
                  alt="Rini"
                  className="w-full h-full object-cover"
                  onError={(e: any) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] hidden items-center justify-center text-6xl text-white">
                  👩
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#e6c8648f] rounded-full animate-bounce delay-300"></div>
            </div>

            <h3 className="text-4xl sm:text-5xl font-vibes text-[#e6c8648f] mb-2">
              Rini Ramadani
            </h3>
            <p className="text-[#e2d7b1] mb-4">Putri dari:</p>
            <p className="text-white font-medium">
              {`Bapak Azwir (Alm) & Ibu Helmita (Almh)`}
            </p>

            <div className="mt-6 space-y-2 text-sm text-[#e2d7b1] opacity-80">
              <p>
                📍 Pasa Surau, Pasa Karambia, Nagari Guguak, 2 X 11 Kayu Tanam,
                Padang Pariaman, Sumatera Barat
              </p>
              <p>📧 riniramadhani952@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Love Story Quote */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-vibes text-[#e6c8648f] mb-4 leading-relaxed">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya..."
            </p>
            <p className="text-[#e2d7b1] text-sm">QS. Ar-Rum: 21</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Wishes Section
const WishesSection = () => {
  const [wishes, setWishes] = useState<any[]>([]);
  const [newWish, setNewWish] = useState({ name: "", message: "" });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "wishes"), (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setWishes(
        data.sort(
          (a: any, b: any) => b.createdAt?.seconds - a.createdAt?.seconds
        )
      );
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (newWish.name && newWish.message) {
      await addDoc(collection(db, "wishes"), {
        name: newWish.name,
        message: newWish.message,
        createdAt: serverTimestamp(),
      });
      setNewWish({ name: "", message: "" });
    }
  };

  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 mb-20"
    >
      {/* <div className="max-w-4xl mx-auto"> */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-4">
            Ucapan & Doa
          </h2>
          <p className="text-[#e2d7b1] text-lg opacity-80">
            Berikan ucapan dan doa terbaik untuk kami
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="animate-slide-left">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl"
            >
              <h3 className="text-2xl font-vibes text-[#e6c8648f] mb-6 text-center">
                Kirim Ucapan
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#e2d7b1] mb-2">Nama</label>
                  <input
                    type="text"
                    value={newWish.name}
                    onChange={(e) =>
                      setNewWish({ ...newWish, name: e.target.value })
                    }
                    className="w-full bg-[#2c1810]/30 border border-[#e6c8648f]/30 rounded-lg px-4 py-3 text-white placeholder-[#e2d7b1]/50 focus:outline-none focus:border-[#e6c8648f] transition-colors"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#e2d7b1] mb-2">
                    Ucapan & Doa
                  </label>
                  <textarea
                    value={newWish.message}
                    onChange={(e) =>
                      setNewWish({ ...newWish, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-[#2c1810]/30 border border-[#e6c8648f]/30 rounded-lg px-4 py-3 text-white placeholder-[#e2d7b1]/50 focus:outline-none focus:border-[#e6c8648f] transition-colors resize-none"
                    placeholder="Tuliskan ucapan dan doa terbaik untuk pengantin..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>💌</span>
                    <span>Kirim Ucapan</span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Wishes List */}
          <div className="animate-slide-right delay-200">
            <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl">
              <h3 className="text-2xl font-vibes text-[#e6c8648f] mb-6 text-center">
                Ucapan Terbaru
              </h3>

              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {wishes.map((wish, index) => (
                  <div
                    key={wish.id}
                    className={`bg-[#2c1810]/30 rounded-lg p-4 animate-fade-in delay-${
                      index * 100
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#e6c8648f] font-medium">
                        {wish.name}
                      </h4>
                      <span className="text-[#e2d7b1] text-xs opacity-60">
                        {wish.time}
                      </span>
                    </div>
                    <p className="text-[#e2d7b1] text-sm leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Closing Section
const ClosingSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 pb-20"
    >
      {/* <div className="max-w-4xl mx-auto"> */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 text-center text-sm ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-8">
            Terima Kasih
          </h2>
        </div>

        {/* Thank You Message */}
        <div className="mb-12 animate-fade-in delay-300">
          <p className="text-base sm:text-base text-[#e2d7b1] leading-relaxed mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kedua mempelai.
          </p>

          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl mb-8">
            <p className="text-2xl sm:text-3xl font-vibes text-[#e6c8648f] mb-4 leading-relaxed">
              "Wa billahi at-taufiq wal hidayah, wassalamu'alaikum
              warahmatullahi wabarakatuh"
            </p>
            <p className="text-[#e2d7b1] text-sm">
              Dan dengan pertolongan Allah, semoga mendapat petunjuk dan
              hidayah-Nya, wassalamu'alaikum warahmatullahi wabarakatuh
            </p>
          </div>
        </div>

        {/* Couple Names */}
        <div className="mb-12 animate-fade-in delay-500">
          <p className="text-[#e2d7b1] mb-4">
            Atas perhatian dan kehadirannya, kami ucapkan terima kasih
          </p>
          <div className="text-4xl sm:text-5xl font-vibes text-[#e6c8648f] mb-8">
            <span className="block sm:inline">Randa</span>
            <span className="mx-4 text-[#e2d7b1]">&</span>
            <span className="block sm:inline">Rini</span>
          </div>

          <p className="text-[#e2d7b1] text-sm">Beserta kedua keluarga besar</p>
        </div>

        {/* Decorative Elements */}
        {/* <div className="mb-12 animate-fade-in delay-700">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-3xl">💐</span>
            </div>
            <div className="text-6xl text-[#e6c8648f] animate-heart-beat">
              💕
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-3xl">🌸</span>
            </div>
          </div>
        </div> */}

        {/* Footer */}
        <div className="animate-fade-in delay-900">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-3 h-3 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <p className="text-[#e2d7b1] text-sm opacity-60">
            13 November 2025 | Sumatera Barat, Indonesia
          </p>
        </div>
      </div>
    </section>
  );
};

const MusicPlayer = ({ isPlaying, setIsPlaying }: any) => {
  const [currentSong] = useState("Wedding Song");
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(console.error);
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-6 z-50">
      <audio
        ref={audioRef}
        src="sounds.wav"
        loop
        onError={(e) => console.error("Audio error:", e)}
      />

      <div className="bg-gradient-to-br from-[#2c1810]/90 to-[#44050083]/90 backdrop-blur-sm rounded-full p-2 shadow-2xl border border-[#e6c8648f]/20">
        <button
          onClick={togglePlay}
          className="flex items-center space-x-3 group p-0"
        >
          <div className="w-5 h-5 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-white text-xl">
              {isPlaying ? "⏸️" : "▶️"}
            </span>
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-white text-sm font-medium">{currentSong}</p>
            <p className="text-[#e2d7b1] text-xs">
              {isPlaying ? "Playing..." : "Paused"}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

// Wedding Styles Component
const WeddingStyles = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        
        .font-vibes {
          font-family: 'Dancing Script', cursive;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(230, 198, 100, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(230, 198, 100, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(230, 198, 100, 0.7);
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-slide-left { animation: slide-left 0.8s ease-out forwards; }
        .animate-slide-right { animation: slide-right 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-heart-beat { animation: heart-beat 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
      `,
      }}
    />
  );
};

// Event Details Section
const EventDetailsSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const weddingDate = new Date("2025-11-13T10:00:00"); // Ganti dengan tanggal pernikahan

  const [sectionRef, isVisible] = useIntersectionObserver();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 mb-20"
    >
      {/* <div className="max-w-4xl mx-auto"> */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-4">
            Acara Pernikahan
          </h2>
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-fade-in delay-300">
          <h3 className="text-center text-2xl text-[#e2d7b1] mb-6">
            Menghitung Hari
          </h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(countdown).map(([unit, value], index) => (
              <div
                key={unit}
                className={`text-center animate-scale-in delay-${
                  (index + 1) * 200
                }`}
              >
                <div className="bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-lg p-4 shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {value > 0 ? value : 0}
                  </div>
                  <div className="text-xs uppercase text-white/80 mt-1">
                    {unit === "days"
                      ? "Hari"
                      : unit === "hours"
                      ? "Jam"
                      : unit === "minutes"
                      ? "Menit"
                      : "Detik"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl animate-slide-left delay-400">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-vibes text-[#e6c8648f] mb-4">
                Akad Nikah
              </h3>

              <div className="space-y-3 text-[#e2d7b1]">
                <div className="flex items-center justify-center space-x-2">
                  <span>📅</span>
                  <span>Kamis, 13 November 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>⏰</span>
                  <span>10:00 WIB - Selesai</span>
                </div>
                <div className="flex items-start justify-center space-x-2">
                  <span className="mt-1">📍</span>
                  <div className="text-center">
                    <div>Kediaman Mempelai Wanita</div>
                    <div className="text-sm opacity-80">
                      Pasa Surau, Pasa Karambia, Nagari Guguak, 2 X 11 Kayu
                      Tanam, Padang Pariaman, Sumatera Barat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi 1 */}
          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl animate-slide-right delay-600">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-vibes text-[#e6c8648f] mb-4">
                Resepsi 1
              </h3>

              <div className="space-y-3 text-[#e2d7b1]">
                <div className="flex items-center justify-center space-x-2">
                  <span>📅</span>
                  <span>Sabtu, 15 November 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>⏰</span>
                  <span>10:00 WIB - Selesai</span>
                </div>
                <div className="flex items-start justify-center space-x-2">
                  <span className="mt-1">📍</span>
                  <div className="text-center">
                    <div>Kediaman Mempelai Wanita</div>
                    <div className="text-sm opacity-80">
                      Pasa Surau, Pasa Karambia, Nagari Guguak, 2 X 11 Kayu
                      Tanam, Padang Pariaman, Sumatera Barat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Resepsi 2 */}
          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl animate-slide-right delay-600">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-vibes text-[#e6c8648f] mb-4">
                Resepsi 2
              </h3>

              <div className="space-y-3 text-[#e2d7b1]">
                <div className="flex items-center justify-center space-x-2">
                  <span>📅</span>
                  <span>Senin, 17 November 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>⏰</span>
                  <span>10:00 WIB - Selesai</span>
                </div>
                <div className="flex items-start justify-center space-x-2">
                  <span className="mt-1">📍</span>
                  <div className="text-center">
                    <div>Kediaman Mempelai Pria</div>
                    <div className="text-sm opacity-80">
                      Labuah Lanyah, Jorong Sitapung, Nagari Balai Gurah, Ampek
                      Angkek, Agam, Sumatera Barat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save the Date Button */}
        <div className="text-center mt-12 animate-fade-in delay-800">
          <button className="group relative bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-lg font-semibold overflow-hidden">
            <div className="relative flex items-center space-x-3">
              <span>📅</span>
              <span>Simpan Tanggal</span>
            </div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white rounded-full opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-20 transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [sectionRef, isVisible] = useIntersectionObserver();

  const galleryImages = [
    { id: 1, src: "gallery1.jpeg", alt: "Foto 1" },
    { id: 2, src: "gallery2.jpeg", alt: "Foto 2" },
    { id: 3, src: "gallery3.jpeg", alt: "Foto 3" },
    { id: 4, src: "gallery4.jpeg", alt: "Foto 4" },
    { id: 5, src: "gallery2.jpeg", alt: "Foto 5" },
    { id: 6, src: "gallery5.jpeg", alt: "Foto 6" },
  ];

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 mb-20"
    >
      {/* <div className="max-w-4xl mx-auto"> */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-4">
            Galeri Foto
          </h2>
          <p className="text-[#e2d7b1] text-lg opacity-80">
            Momen indah perjalanan cinta kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group text-center cursor-pointer animate-scale-in delay-${
                index * 100
              }`}
              onClick={() => setSelectedImage(image as any)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e: any) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] hidden items-center justify-center text-4xl text-white">
                  📷
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-xl">🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full animate-scale-in">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-white text-xl">✕</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Location Section (melanjutkan dari yang terpotong)
const LocationSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 mb-20"
    >
      {/* <div className="max-w-4xl mx-auto"> */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-4">
            Lokasi Acara
          </h2>
          <p className="text-[#e2d7b1] text-lg opacity-80">
            Petunjuk arah menuju lokasi acara
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Akad Location */}
          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl animate-slide-left">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <span className="text-2xl">🕌</span>
              </div>
              <h3 className="text-2xl font-vibes text-[#e6c8648f] mb-2">
                Akad Nikah dan Resepsi 1
              </h3>
              <p className="text-[#e2d7b1]">Kediaman Mempelai Wanita</p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#2c1810]/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#e6c8648f] mt-1">📍</span>
                  <div>
                    <p className="text-white font-medium">Alamat Lengkap:</p>
                    <p className="text-[#e2d7b1] text-sm">
                      Pasa Surau, Pasa Karambia, Nagari Guguak, 2 X 11 Kayu
                      Tanam, Padang Pariaman, Sumatera Barat
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div
                  className="flex items-center justify-center space-x-2 cursor-pointer"
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/ozG5V4boPG2JKDxR6")
                  }
                >
                  <span>🗺️</span>
                  <span>Buka Maps</span>
                </div>
              </button>
            </div>
          </div>

          {/* Reception Location */}
          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl animate-slide-right delay-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-300">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-vibes text-[#e6c8648f] mb-2">
                Resepsi 2
              </h3>
              <p className="text-[#e2d7b1]">Kediaman Mempelai Pria</p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#2c1810]/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#e6c8648f] mt-1">📍</span>
                  <div>
                    <p className="text-white font-medium">Alamat Lengkap:</p>
                    <p className="text-[#e2d7b1] text-sm">
                      Labuah Lanyah, Jorong Sitapung, Nagari Balai Gurah, Ampek
                      Angkek, Agam, Sumatera Barat
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div
                  className="flex items-center justify-center space-x-2 cursor-pointer"
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/hXyiCAwhwhX8mh3i9")
                  }
                >
                  <span>🗺️</span>
                  <span>Buka Maps</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="mt-12 bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl animate-fade-in-up delay-400">
          <h3 className="text-2xl font-vibes text-[#e6c8648f] text-center mb-6">
            Informasi Transportasi
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                <span>🚗</span>
              </div>
              <h4 className="text-white font-medium mb-2">Kendaraan Pribadi</h4>
              <p className="text-[#e2d7b1] text-sm">
                Parkir tersedia di lokasi acara
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse delay-200">
                <span>🚇</span>
              </div>
              <h4 className="text-white font-medium mb-2">Transportasi Umum</h4>
              <p className="text-[#e2d7b1] text-sm">
                Dekat Jalan Raya Bukittinggi - Padang
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse delay-400">
                <span>🚕</span>
              </div>
              <h4 className="text-white font-medium mb-2">Taksi Online</h4>
              <p className="text-[#e2d7b1] text-sm">
                Tersedia Gojek, Grab, dll
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// RSVP Section
const RSVPSection = () => {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    attendance: "",
    guests: "1",
  });
  const [rsvpList, setRsvpList] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "rsvp"), (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setRsvpList(
        data.sort(
          (a: any, b: any) => b.createdAt?.seconds - a.createdAt?.seconds
        )
      );
    });
    return () => unsub();
  }, []);

  const handleRSVPSubmit = async (e: any) => {
    e.preventDefault();
    if (rsvpData.name.trim() && rsvpData.attendance) {
      await addDoc(collection(db, "rsvp"), {
        name: rsvpData.name,
        attendance: rsvpData.attendance,
        guests: parseInt(rsvpData.guests),
        createdAt: serverTimestamp(),
      });
      setRsvpData({ name: "", attendance: "", guests: "1" });
    }
  };

  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 mb-20"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-4">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-[#e2d7b1] text-lg opacity-80">
            Mohon konfirmasi kehadiran Anda untuk membantu persiapan acara
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* RSVP Form */}
          <div className="animate-slide-left">
            <form
              onSubmit={handleRSVPSubmit}
              className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl"
            >
              <h3 className="text-2xl font-vibes text-[#e6c8648f] mb-6 text-center">
                Form Konfirmasi
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#e2d7b1] mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={rsvpData.name}
                      onChange={(e) =>
                        setRsvpData({ ...rsvpData, name: e.target.value })
                      }
                      className="w-full bg-[#2c1810]/30 border border-[#e6c8648f]/30 rounded-lg px-4 py-3 text-white placeholder-[#e2d7b1]/50 focus:outline-none focus:border-[#e6c8648f] transition-colors"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#e2d7b1] mb-2">
                    Konfirmasi Kehadiran *
                  </label>
                  <select
                    value={rsvpData.attendance}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, attendance: e.target.value })
                    }
                    className="w-full bg-[#2c1810]/30 border border-[#e6c8648f]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e6c8648f] transition-colors"
                    required
                  >
                    <option value="">Pilih konfirmasi kehadiran</option>
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                    <option value="Belum Pasti">Belum Pasti</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#e2d7b1] mb-2">
                    Jumlah Tamu (termasuk Anda)
                  </label>
                  <select
                    value={rsvpData.guests}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, guests: e.target.value })
                    }
                    className="w-full bg-[#2c1810]/30 border border-[#e6c8648f]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e6c8648f] transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} orang
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>✅</span>
                    <span>Konfirmasi Kehadiran</span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* RSVP List */}
          <div className="animate-slide-right delay-200">
            <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#e6c8648f]/20 shadow-2xl">
              <h3 className="text-2xl font-vibes text-[#e6c8648f] mb-6 text-center">
                Daftar Konfirmasi
              </h3>

              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {rsvpList.map((rsvp, index) => (
                  <div
                    key={rsvp.id}
                    className={`bg-[#2c1810]/30 rounded-lg p-4 animate-fade-in delay-${
                      index * 100
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[#e6c8648f] font-medium">
                          {rsvp.name}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              rsvp.attendance === "Hadir"
                                ? "bg-green-500"
                                : rsvp.attendance === "Tidak Hadir"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                            }`}
                          ></span>
                          <span className="text-[#e2d7b1] text-sm">
                            {rsvp.attendance}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#e2d7b1] text-xs opacity-60">
                        {rsvp.time}
                      </span>
                    </div>
                    <p className="text-[#e2d7b1] text-sm">
                      {rsvp.event} • {rsvp.guests} orang
                    </p>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-6 pt-4 border-t border-[#e6c8648f]/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">
                      {rsvpList.filter((r) => r.attendance === "Hadir").length}
                    </div>
                    <div className="text-xs text-[#e2d7b1]">Hadir</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-400">
                      {
                        rsvpList.filter((r) => r.attendance === "Tidak Hadir")
                          .length
                      }
                    </div>
                    <div className="text-xs text-[#e2d7b1]">Tidak Hadir</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-yellow-400">
                      {
                        rsvpList.filter((r) => r.attendance === "Belum Pasti")
                          .length
                      }
                    </div>
                    <div className="text-xs text-[#e2d7b1]">Belum Pasti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        {/* <div className="mt-8 bg-gradient-to-br from-[#2c1810]/30 to-[#44050083]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#e6c8648f]/20 text-center animate-fade-in delay-500">
          <p className="text-[#e2d7b1] text-sm mb-2">
            <span className="text-[#e6c8648f]">📝 Catatan Penting:</span>
          </p>
          <p className="text-[#e2d7b1] text-sm leading-relaxed">
            Konfirmasi kehadiran akan dikirim melalui WhatsApp untuk memastikan
            kami dapat mempersiapkan acara dengan baik. Terima kasih atas
            perhatian dan kerjasamanya.
          </p>
        </div> */}
      </div>
    </section>
  );
};

// Gift Section
const GiftSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("digital");
  const [copiedText, setCopiedText] = useState("");
  const [sectionRef, isVisible] = useIntersectionObserver();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    });
  };

  const bankAccounts = [
    {
      bank: "BRI",
      number: "546201023764535",
      name: "Rini Ramadani",
      logo: "🏦",
    },
    {
      bank: "BNI",
      number: "460714793",
      name: "Randa Alfarisyi",
      logo: "🏦",
    },
  ];

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-6 mb-20"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#e6c8648f]"></div>
            <div className="w-4 h-4 bg-[#e6c8648f] rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#e6c8648f]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-vibes text-[#e6c8648f] mb-8">
            Wedding Gift
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in delay-200">
          <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#e6c8648f]/20 shadow-2xl">
            {/* Gift Message */}
            <div className="mb-8">
              <p className="text-xl sm:text-2xl font-vibes text-[#e6c8648f] mb-6 leading-relaxed">
                "Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i adalah hadiah
                terindah dan terbesar bagi kami"
              </p>

              <p className="text-[#e2d7b1] text-base sm:text-lg leading-relaxed mb-6">
                Namun jika ingin memberikan hadiah untuk melengkapi kebahagiaan
                kami, kami menyediakan beberapa pilihan berikut dengan penuh
                rasa terima kasih.
              </p>
            </div>

            {/* Gift Button */}
            <button
              onClick={() => setShowModal(true)}
              className="group relative bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-lg font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6c86454] to-[#8b1538] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-3">
                <span>🎁</span>
                <span>Kirim Hadiah</span>
              </div>
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#e6c8648f] rounded-full opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-20 transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2"></div>
            </button>

            {/* Thank You Note */}
            <div className="mt-8">
              <p className="text-[#e2d7b1] text-sm leading-relaxed">
                Terima kasih atas kasih sayang dan perhatian yang telah
                diberikan kepada kami
              </p>
              <div className="mt-4 text-xl font-vibes text-[#e6c8648f]">
                Randa & Rini
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-[#2c1810] to-[#44050083] rounded-2xl max-w-[500px] w-full max-h-[90vh] overflow-y-auto border border-[#e6c8648f]/30 animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#2c1810] to-[#44050083] p-6 border-b border-[#e6c8648f]/20 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-vibes text-[#e6c8648f]">
                Informasi Wedding Gift
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 bg-[#e6c8648f]/20 rounded-full flex items-center justify-center hover:bg-[#e6c8648f]/30 transition-colors"
              >
                <span className="text-white text-xl">✕</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Tab Selection */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-full p-2 border border-[#e6c8648f]/20">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setActiveTab("digital")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === "digital"
                          ? "bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white"
                          : "text-[#e6c8648f] hover:bg-[#e6c8648f]/20"
                      }`}
                    >
                      💳
                    </button>
                    <button
                      onClick={() => setActiveTab("physical")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === "physical"
                          ? "bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white"
                          : "text-[#e6c8648f] hover:bg-[#e6c8648f]/20"
                      }`}
                    >
                      🎁
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "digital" && (
                <div className="grid sm:grid-cols-2 gap-6">
                  {bankAccounts.map((account) => (
                    <div
                      key={account.bank}
                      className="bg-gradient-to-br from-[#2c1810]/50 to-[#44050083]/50 backdrop-blur-sm rounded-2xl p-3 border border-[#e6c8648f]/20 shadow-2xl"
                    >
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                          {account.logo}
                        </div>
                        <h4 className="text-2xl font-vibes text-[#e6c8648f] mb-2">
                          Bank {account.bank}
                        </h4>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-[#2c1810]/30 rounded-lg p-4">
                          <p className="text-[#e2d7b1] text-sm mb-1">
                            Nomor Rekening
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-white text-base font-mono tracking-wider">
                              {account.number}
                            </p>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  account.number,
                                  `${account.bank}-number`
                                )
                              }
                              className="ml-2 p-2 bg-[#e6c8648f]/20 rounded-lg hover:bg-[#e6c8648f]/30 transition-colors"
                            >
                              {copiedText === `${account.bank}-number`
                                ? "✅"
                                : "📋"}
                            </button>
                          </div>
                        </div>

                        <div className="bg-[#2c1810]/30 rounded-lg p-4">
                          <p className="text-[#e2d7b1] text-sm mb-1">
                            Atas Nama
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-white font-medium">
                              {account.name}
                            </p>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  account.name,
                                  `${account.bank}-name`
                                )
                              }
                              className="ml-2 p-2 bg-[#e6c8648f]/20 rounded-lg hover:bg-[#e6c8648f]/30 transition-colors"
                            >
                              {copiedText === `${account.bank}-name`
                                ? "✅"
                                : "📋"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "physical" && (
                <div className="max-w-2xl mx-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#e6c86454] to-[#e6c8648f] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      🏠
                    </div>
                    <h4 className="text-2xl font-vibes text-[#e6c8648f] mb-4">
                      Alamat Pengiriman Kado
                    </h4>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-[#2c1810]/30 rounded-lg p-6">
                      <h5 className="text-[#e6c8648f] font-medium mb-3">
                        Alamat Mempelai Wanita
                      </h5>
                      <div className="space-y-2 text-sm text-[#e2d7b1]">
                        <p className="font-medium text-white">Rini Ramadani</p>
                        <p>Jalan lintas Padang Bukittinggi, Simpang Gantiang</p>
                        <p>Nagari Guguak, 2 X 11 Kayu Tanam</p>
                        <p>Padang Pariaman, Sumatera Barat. ID 25585</p>
                        <p className="font-mono">📞 0853-7542-3086</p>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            "Rini Ramadani\nJalan lintas Padang Bukittinggi, Simpang Gantiang\nNagari Guguak, 2 X 11 Kayu Tanam\nPadang Pariaman, Sumatera Barat",
                            "address1"
                          )
                        }
                        className="w-full mt-4 bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                      >
                        {copiedText === "address1"
                          ? "✅ Tersalin"
                          : "📋 Salin Alamat"}
                      </button>
                    </div>

                    <div className="bg-[#2c1810]/30 rounded-lg p-6 hidden">
                      <h5 className="text-[#e6c8648f] font-medium mb-3">
                        Alamat Mempelai Pria
                      </h5>
                      <div className="space-y-2 text-sm text-[#e2d7b1]">
                        <p className="font-medium text-white">
                          Randa Alfarisyi
                        </p>
                        <p>Labuah Lanyah, Jorong Sitapung</p>
                        <p>Nagari Balai Gurah, Ampek Angkek</p>
                        <p>Agam, Sumatera Barat</p>
                        <p className="font-mono">📞 0823-xxxx-xxxx</p>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            "Randa Alfarisyi\nLabuah Lanyah, Jorong Sitapung\nNagari Balai Gurah, Ampek Angkek\nAgam, Sumatera Barat",
                            "address2"
                          )
                        }
                        className="w-full mt-4 bg-gradient-to-r from-[#e6c86454] to-[#e6c8648f] text-white py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                      >
                        {copiedText === "address2"
                          ? "✅ Tersalin"
                          : "📋 Salin Alamat"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-br from-[#2c1810]/30 to-[#44050083]/30 backdrop-blur-sm rounded-2xl p-4 border border-[#e6c8648f]/20">
                  <p className="text-[#e2d7b1] text-sm leading-relaxed">
                    Terima kasih atas perhatian dan kebaikan hati
                    Bapak/Ibu/Saudara/i
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Main Wedding Invitation Component
const WeddingInvitation = () => {
  const [showCover, setShowCover] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<any>(null);
  const sectionRefs = useRef<HTMLDivElement[] | any>([]);

  const openInvitation = () => {
    setShowCover(false);
    setIsPlaying(true);
  };

  const sections = [
    { id: "bride-groom", title: "Pengantin", icon: <Heart size={20} /> },
    { id: "event-details", title: "Acara", icon: <Calendar size={20} /> },
    { id: "gallery", title: "Galeri", icon: <Camera size={20} /> },
    { id: "location", title: "Lokasi", icon: <MapPin size={20} /> },
    { id: "rsvp", title: "Konfirmasi", icon: <ClipboardList size={20} /> },
    { id: "wishes", title: "Ucapan", icon: <MessageCircle size={20} /> },
    { id: "gift", title: "Hadiah", icon: <Gift size={20} /> },
    { id: "closing", title: "Penutup", icon: <Sparkles size={20} /> },
  ];

  // Handle scroll to update current section
  useEffect(() => {
    if (showCover) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset untuk navigation

      sectionRefs.current.forEach((ref: any, index: any) => {
        if (
          ref &&
          ref.offsetTop <= scrollPosition &&
          scrollPosition < ref.offsetTop + ref.offsetHeight
        ) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCover]);

  // Smooth scroll to section
  const scrollToSection = (index: any) => {
    setCurrentSection(index);
    if (sectionRefs.current[index]) {
      const yOffset = -80; // Offset untuk navigation bar
      const element = sectionRefs.current[index];
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  if (showCover) {
    return <Cover openInvitation={openInvitation} />;
  }

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br from-[#2c1810] via-[#44050083] to-[#ff003c38] text-gray-100 font-sans relative max-w-[500px]"
    >
      <BorderSide />
      {/* Navigation */}
      <Navigation
        sections={sections}
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <div className="relative">
        <div ref={(el) => (sectionRefs.current[0] = el) as any}>
          <BrideGroomSection />
        </div>
        <div ref={(el) => (sectionRefs.current[1] = el) as any}>
          <EventDetailsSection />
        </div>
        <div ref={(el) => (sectionRefs.current[2] = el) as any}>
          <GallerySection />
        </div>
        <div ref={(el) => (sectionRefs.current[3] = el) as any}>
          <LocationSection />
        </div>
        <div ref={(el) => (sectionRefs.current[4] = el) as any}>
          <RSVPSection />
        </div>
        <div ref={(el) => (sectionRefs.current[5] = el) as any}>
          <WishesSection />
        </div>
        <div ref={(el) => (sectionRefs.current[6] = el) as any}>
          <GiftSection />
        </div>
        <div ref={(el) => (sectionRefs.current[7] = el) as any}>
          <ClosingSection />
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Custom Animations */}
      <WeddingStyles />
    </div>
  );
};

export default WeddingInvitation;
