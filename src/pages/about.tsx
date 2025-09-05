import ThreeDots from "@/components/common/three-dots";
import { achievements, DEVELOPS, INFORS } from "@/constants/about";
import { Trophy, User } from "lucide-react";

const About = () => {
  return (
    <section className="w-full px-6 py-20 flex flex-col items-center">
      <h1 className="tracking-widest font-bold text-7xl animate-floaty bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent inline-block leading-snug">
        {"<Giới thiệu />"}
      </h1>
      <div className="w-full max-w-[800px] text-center text-white tracking-widest text-2xl/relaxed mt-6 p-6 rounded-2xl bg-gray-800 border border-gray-600 shadow-md shadow-gray-500/50">
        Chuyên gia Backend Developer với hơn 3 năm kinh nghiệm về Node.js,
        System Architecture và Database Design. Xây dựng các ứng dụng có thể mở
        rộng với công nghệ hiện đại.
      </div>

      <div className="w-full grid grid-cols-3 gap-10  mt-20">
        <div className="flex flex-col gap-8">
          <div className="text-white text-xl font-medium flex gap-3">
            <span className="text-yellow-400 font-medium text-sm">JS</span>
            <span className="">developer.js</span>
          </div>
          <div className="w-full text-white tracking-widest text-xl/relaxed p-6 rounded-2xl bg-gray-800 border border-yellow-600  hover:drop-shadow-2xl hover:drop-shadow-yellow-500/50">
            <div className="w-full bg-gray-500/50 p-3 flex gap-2">
              <ThreeDots size={3} animate />
              <span className="font-medium text-sm text-blue-500 text-shadow-sm">
                developer.js
              </span>
            </div>
            <div className="text-sm py-4 flex flex-col gap-1">
              <div className="flex gap-2 items-center ">
                <span className="font-semibold text-cyan-500">const</span>
                <span className="font-semibold text-yellow-500">developer</span>
                <span className=" font-semibold text-violet-500">= {"{"}</span>
              </div>
              {DEVELOPS.map((item) => (
                <div className="flex gap-1 ml-4">
                  <span>{item.key}:</span>
                  <span className=" font-medium text-green-500">
                    {`"${item.value}"`}
                  </span>
                  ,
                </div>
              ))}

              <span className=" font-semibold text-violet-600">{"}"}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-white text-xl font-medium flex gap-3 items-center justify-center">
            <User className="text-violet-600 w-6" />
            <span className="">Thông tin cá nhân</span>
          </div>

          {INFORS.map((item) => (
            <div
              key={item.title}
              className="w-full flex gap-4 items-center text-white p-6 rounded-2xl bg-gray-900/70 border border-violet-900 hover:border-violet-600  hover:drop-shadow-2xl hover:drop-shadow-violet-500/50 hover:-translate-y-2 transition-transform duration-300 ease-in"
            >
              <span className="flex items-center justify-center size-12 bg-violet-600/10 rounded-2xl border border-violet-600">
                {item.icon}
              </span>
              <div className="flex flex-col gap-1">
                <span className="uppercase text-xs">{item.title}</span>
                <span className="text-lg font-semibold">{item.content}</span>
                <span className="text-sm text-gray-400">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-white text-xl font-medium flex gap-3 items-center justify-center">
            <Trophy className="text-cyan-600 w-6" />
            <span className="">Thành tựu nổi bật</span>
          </div>
          <div className="w-full flex flex-col gap-4 text-white p-6 rounded-2xl bg-gray-900/50 border border-cyan-600  hover:drop-shadow-2xl hover:drop-shadow-cyan-500/50 hover:-translate-y-2 transition-transform duration-300 ease-in">
            {achievements.map((item) => (
              <div
                className="flex gap-2 items-start hover:translate-x-2 transition-transform duration-300 ease-in"
                key={item}
              >
                <div className=" text-cyan-600 animate-pulse">●</div>
                <span className="w-fit"> {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
