// import { useState } from "react";
// import Cover from "./cover";
import WeddingInvitation from "./cover/allPage";

export default function App() {
  return <WeddingInvitation />;
}
// {
//   const [isInvitationOpen, setIsInvitationOpen] = useState(false);

//   const openInvitation = () => {
//     setIsInvitationOpen(true);
//   };

//   if (!isInvitationOpen) {
//     return <Cover openInvitation={openInvitation} />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] via-[#f8f5f0] to-[#f0ebe3] text-gray-800 font-sans animate-fade-in p-[8px]">
//       {/* Decorative Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-[#c6a15b] opacity-5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#d4af37] opacity-5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#c6a15b] opacity-3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
//       </div>

//       {/* Cover Section - Removed since it's now separate */}

//       {/* Quote Section */}
//       <section className="py-16 px-6 text-center">
//         <div className="max-w-3xl mx-auto bg-white/70 border border-[#e6dfd0] rounded-2xl p-8 shadow-md">
//           <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#444] leading-relaxed">
//             "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
//             untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
//             dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
//             kasih dan sayang."
//           </p>
//           <p className="text-[#c6a15b] font-semibold mt-6">
//             — QS. Ar-Rum: 21 —
//           </p>
//         </div>
//       </section>

//       {/* Detail Acara */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2c2c2c] mb-12">
//           Detail Acara
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {[
//             {
//               title: "Akad Nikah",
//               time: "08.00 WIB",
//               place: "Masjid Raya",
//               addr: "Jl. Contoh Alamat No. 123",
//               icon: "💍",
//             },
//             {
//               title: "Resepsi",
//               time: "11.00 WIB",
//               place: "Gedung Serbaguna",
//               addr: "Jl. Contoh Alamat No. 456",
//               icon: "🎉",
//             },
//           ].map((event, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-1 transition-all"
//             >
//               <div className="w-14 h-14 bg-[#c6a15b] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
//                 {event.icon}
//               </div>
//               <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2c2c2c] mb-4">
//                 {event.title}
//               </h3>
//               <p className="text-lg text-[#c6a15b] font-semibold">
//                 {event.time}
//               </p>
//               <p className="text-base text-gray-700">{event.place}</p>
//               <p className="text-sm text-gray-500">{event.addr}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Lokasi */}
//       <section className="py-20 px-6 bg-white/50 backdrop-blur-sm text-center">
//         <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2c2c2c] mb-10">
//           Lokasi Acara
//         </h2>
//         <div className="max-w-3xl mx-auto">
//           <div className="overflow-hidden rounded-2xl border-2 border-[#c6a15b] shadow-md">
//             <iframe
//               className="w-full h-80"
//               src="https://maps.google.com/maps?q=Masjid%20Raya&t=&z=15&ie=UTF8&iwloc=&output=embed"
//               loading="lazy"
//               title="Lokasi Pernikahan"
//             ></iframe>
//           </div>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
//             <a
//               href="https://goo.gl/maps/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center bg-[#c6a15b] text-white px-6 py-3 rounded-full hover:bg-[#b38f45] transition"
//             >
//               📍 Google Maps
//             </a>
//             <button className="flex items-center justify-center border-2 border-[#c6a15b] text-[#c6a15b] px-6 py-3 rounded-full hover:bg-[#c6a15b] hover:text-white transition">
//               📞 Hubungi Kami
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2c2c2c] mb-10">
//           Gallery
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="relative overflow-hidden rounded-xl shadow-md group"
//             >
//               <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
//                 📷
//               </div>
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* RSVP */}
//       <section className="py-20 px-6 text-center bg-gradient-to-r from-[#c6a15b] to-[#d4af37] text-white">
//         <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
//           Konfirmasi Kehadiran
//         </h2>
//         <p className="mb-8 opacity-90">Mohon konfirmasi kehadiran Anda</p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-white text-[#c6a15b] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
//             ✅ Akan Hadir
//           </button>
//           <button className="bg-white/20 border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#c6a15b] transition">
//             ❌ Tidak Hadir
//           </button>
//         </div>
//       </section>

//       {/* Closing */}
//       <section className="py-20 px-6 text-center bg-gradient-to-t from-[#faf7f2] to-white">
//         <div className="max-w-3xl mx-auto">
//           <div className="mb-10">
//             <div className="w-16 h-16 mx-auto mb-6 bg-[#c6a15b] text-white flex items-center justify-center rounded-full text-2xl">
//               🤲
//             </div>
//             <p className="text-lg italic text-[#555] mb-8">
//               Kehadiran dan doa restu Anda merupakan kebahagiaan bagi kami.
//             </p>
//           </div>
//           <div className="bg-white/80 border border-[#e6dfd0] rounded-2xl p-8 shadow-lg">
//             <p className="text-2xl font-serif font-semibold text-[#c6a15b] mb-3">
//               Wassalamualaikum Wr. Wb.
//             </p>
//             <p className="text-lg font-semibold text-[#2c2c2c]">
//               Terima Kasih 🙏
//             </p>
//           </div>
//           <div className="mt-8 flex justify-center gap-4 text-[#c6a15b] text-2xl">
//             <button>📷</button>
//             <button>📱</button>
//             <button>💌</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
