import "../styles/grid-bg.css";
import "../styles/bg-2.css";
import "./overview.css";
import ThreeDots from "@/components/common/three-dots";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  Code,
  MessageCircleMore,
  Settings,
  SquareTerminal,
} from "lucide-react";
import { TECH_STACK } from "@/constants/tech-stack";

const Overview = () => {
  const text = "Frontend Developer.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (isTyping) {
          // Gõ từng chữ cái
          if (charIndex < text.length) {
            setDisplayText(text.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Đã gõ xong, chờ một chút rồi bắt đầu xóa
            setTimeout(() => {
              setIsTyping(false);
            }, 1500);
          }
        } else {
          // Xóa từng chữ cái
          if (charIndex > 0) {
            setDisplayText(text.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Đã xóa xong, bắt đầu gõ lại
            setIsTyping(true);
          }
        }
      },
      isTyping ? 100 : 80
    ); // Tốc độ gõ chậm hơn tốc độ xóa

    return () => clearTimeout(timer);
  }, [text, displayText, isTyping, charIndex]);

  return (
    <section className="p-2 md:pt-20 md:p-5">
      <div className="flex gap-10 items-center justify-evenly w-full max-w-[1200px] mx-auto">
        <div className="w-3/5 mt-5">
          <div className="flex items-center gap-1 border border-blue-600 p-2 w-fit rounded-xl bg-slate-900/60">
            <SquareTerminal className="text-gray-200 w-4 h-4" />
            <span className="text-blue-600 font-medium text-sm">WHOAMI</span>
          </div>
          <h1 className="tracking-widest font-bold text-7xl animate-floaty bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent inline-block leading-snug">
            Võ Văn Quang
          </h1>
          <div className="w-full mt-20 p-4 rounded-2xl bg-gray-700 border border-blue-600 drop-shadow-xl hover:drop-shadow-2xl drop-shadow-blue-500/50 hover:drop-shadow-blue-500/50">
            <div className="w-full bg-gray-500/50 p-3 flex gap-2">
              <ThreeDots size={2} animate />
              <span className="font-medium text-sm text-blue-500 text-shadow-sm">
                role.js
              </span>
            </div>
            <div className="flex gap-2 items-center py-4">
              <span className="text-xl font-semibold text-cyan-600">const</span>
              <span className="text-xl font-semibold text-yellow-600">
                role
              </span>
              <span className="text-2xl font-semibold text-violet-600">=</span>
              <span className="text-3xl font-semibold text-green-400 text-shadow-lg">
                "{displayText}"
              </span>
              <span className="animate-hidden bg-blue-600 h-8 w-1"></span>
            </div>
          </div>

          <div className="w-full text-white tracking-widest text-xl/relaxed mt-20 p-6 rounded-2xl bg-gray-700 border border-orange-600 drop-shadow-xl hover:drop-shadow-2xl drop-shadow-orange-500/50 hover:drop-shadow-orange-500/50">
            Chuyên gia Backend Developer với hơn 3 năm kinh nghiệm về Node.js,
            System Architecture và Database Design. Xây dựng các ứng dụng có thể
            mở rộng với công nghệ hiện đại.
          </div>

          <div className="flex flex-col gap-4 mt-20">
            <div className="flex items-center gap-2 text-gray-300 font-bold text-xl">
              <Settings className="animate-[spin_3s_ease-in_infinite]" />
              <h3>Công nghệ sử dụng</h3>
            </div>
            <div className="flex gap-6 flex-wrap">
              {TECH_STACK.map((tech) => (
                <div
                  className={`group tech-item flex items-center justify-center gap-2 px-5 py-4 border rounded-xl hover:-translate-y-2 backdrop-blur-xl hover:scale-105 transition-transform duration-300 ease-in ${tech.style} shadow-2xl`}
                  key={tech.name}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    title={tech.name}
                    className="w-6 h-6 group-hover:rotate-12 duration-300 ease-in"
                  />
                  <span className="text-base font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grow flex flex-col items-center">
          <img
            className="mt-15 w-50 aspect-square rounded-full object-cover border-4 border-blue-600 drop-shadow-2xl drop-shadow-yellow-500/30"
            src="src/assets/avatar.jpg"
          />
          <div className="w-full mt-20 p-4 rounded-2xl bg-gray-700 border border-violet-600 drop-shadow-xl hover:drop-shadow-2xl drop-shadow-violet-500/50 hover:drop-shadow-violet-500/50">
            <div className="w-full bg-gray-500/50 p-3 flex gap-2">
              <ThreeDots size={2} animate />
              <span className="font-medium text-sm text-cyan-500 text-shadow-sm">
                developer@terminal:~$
              </span>
            </div>
            <div className="flex flex-col gap-2 py-4 text-sm font-medium">
              <span className="ml-1 text-cyan-600">
                <span>$ npm run dev --mode=production</span>
              </span>
              <span className=" text-yellow-600 flex items-center">
                <ChevronRight className="w-4" />
                <span>Building for production...</span>
              </span>
              <span className=" text-violet-600 flex items-center">
                <ChevronRight className="w-4" />
                <span>Server running on https://localhost:3000</span>
              </span>
              <span className=" text-green-400 flex items-center">
                <ChevronRight className="w-4" />
                <span>Ready for connections! 🚀 </span>
              </span>
              <span className="animate-hidden bg-blue-600 h-5 w-2"></span>
            </div>
          </div>
          <div className="mt-10 flex gap-4 w-full">
            <button className="px-6 py-2 border-2 border-blue-600 flex items-center gap-2 text-white font-medium rounded-lg bg-blue-600/50 text-sm hover:-translate-y-1 duration-300 ease-in cursor-pointer">
              <Code className="w-4 h-4" />
              <span className="">Dự án</span>
            </button>
            <button className="px-6 py-2 border-2 border-violet-600 flex items-center gap-2 text-violet-400 font-medium rounded-lg  text-sm hover:-translate-y-1 duration-300 ease-in cursor-pointer">
              <MessageCircleMore className="w-4 h-4 text-violet-400" />
              <span className="">Liên hệ</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
