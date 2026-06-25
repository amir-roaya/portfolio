import Projects from "@/components/Projects";
import { fistSkills, secondSkills } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-125 max-sm:mt-72">
      <div className="container">
        <section className="relative">
          <h1 className="text-5xl max-lg:text-4xl max-sm:text-2xl">
            Hello I Am
            <span className="text-text-color"> Amirhosein Aminroaya</span>
          </h1>

          <h4 className="mt-5 text-3xl max-lg:text-2xl max-sm:text-lg">
            Frontend Developer
          </h4>

          <p className="mt-10 max-w-1/2 text-xl max-lg:text-lg max-lg:max-w-2/3 max-sm:text-sm">
            Building modern web applications with React, Next.js, and passionate
            about learning, problem-solving, and building modern web
            applications.
          </p>

          <div className="shape"></div>
        </section>

        <section className="mt-170 max-sm:mt-94 flex justify-center items-center mx-auto h-max">
          <div className="flex items-center justify-center w-[50%] h-full relative">
            <Image
              width={250}
              height={300}
              src={"/images/person.png"}
              alt={"Person"}
              className="w-62.5 h-75 max-sm:w-37.5 max-sm:h-50 max-[30rem]:w-25 max-[30rem]:h-37.5 hover:scale-110 transition-all"
              loading="eager"
            ></Image>
            <div className="image-chape"></div>
            <div className="image-shape-2"></div>
          </div>

          <div className="w-[50%]">
            <h2 className="titles">About Me</h2>

            <div className="text-lg flex flex-col gap-6 justify-center max-sm:text-sm max-[30rem]:text-xs">
              <p>
                Im a Front-End Developer focused on building responsive and
                user-friendly web applications with React and Next.js.
              </p>

              <p>
                I enjoy turning ideas into clean, modern, and accessible
                interfaces while continuously improving my skills and exploring
                new technologies,
              </p>

              <p>My goal is to become a software engineer.</p>
            </div>
          </div>
        </section>

        <section className="mt-100 max-sm:mt-60">
          <h2 className="titles">My Skills</h2>

          <div className="overflow-hidden">
            <div className="flex items-center py-2 px-8 gap-40 max-lg:gap-20 max-sm:gap-15 whitespace-nowrap will-change-transform w-max animate-scroll max-lg:animate-scroll-lg max-sm:animate-scroll-sm">
              {[...fistSkills, ...fistSkills].map(({ title, svg }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-10 max-lg:gap-5 max-sm:gap-2 shrink-0 py-5 grayscale-85 max-sm:grayscale-0 hover:grayscale-0 hover:scale-105 main-transition"
                >
                  <div>
                    <svg className="text-gray-400 max-sm:text-white group-hover:text-white main-transition">
                      <use href={`#${svg}`}></use>
                    </svg>
                  </div>

                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex items-center py-2 px-8 gap-40 max-lg:gap-20 max-sm:gap-15 whitespace-nowrap will-change-transform w-max animate-scroll-reverse max-lg:animate-scroll-lg-reverse max-sm:animate-scroll-sm-reverse">
              {[...secondSkills, ...secondSkills].map(
                ({ title, svg }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-10 max-lg:gap-5 max-sm:gap-2 shrink-0 py-5 grayscale-85 max-sm:grayscale-0 hover:grayscale-0 hover:scale-105 main-transition group"
                  >
                    <div>
                      <svg className="text-gray-400 max-sm:text-white group-hover:text-white main-transition">
                        <use href={`#${svg}`}></use>
                      </svg>
                    </div>

                    <span>{title}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="mt-100 max-sm:mt-60">
          <h2 className="titles">My Projects</h2>
          <Projects />
        </section>

        <section className="mt-100 max-sm:mt-60 mb-60">
          <h2 className="titles text-left">Contact</h2>

          <div className="flex flex-col justify-center gap-8">
            <p className="text-xl max-sm:text-[16px]">
              Feel free to reach out for collaborations, project inquiries, or
              just to say hello. Im always open to new opportunities.
            </p>

            <div className="flex flex-col gap-2 relative">
              <Link
                href="mailto:amirhosein.aminiii@gmail.com"
                className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[14px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
              >
                <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                  <svg className="max-sm:w-5 max-sm:h-5">
                    <use href="#email"></use>
                  </svg>
                </div>

                <p>amirhosein.aminiii@gmail.com</p>
              </Link>

              <Link
                href="tel:09127190994"
                className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
              >
                <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                  <svg className="max-sm:w-5 max-sm:h-5">
                    <use href="#phone"></use>
                  </svg>
                </div>

                <p>09127190994</p>
              </Link>

              <Link
                href="https://github.com/amir-roaya"
                className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
              >
                <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                  <svg className="max-sm:w-5 max-sm:h-5">
                    <use href="#github"></use>
                  </svg>
                </div>

                <p>github.com/amir-roaya</p>
              </Link>

              <Link
                href="https://t.me/amir_roayaa"
                className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition"
              >
                <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                  <svg className="max-sm:w-5 max-sm:h-5">
                    <use href="#telegram"></use>
                  </svg>
                </div>

                <p>Telegram</p>
              </Link>

              <div className="flex items-center gap-4 max-sm:gap-2 text-xl max-sm:text-[16px] w-max p-3.5 max-sm:p-2 border border-[#fff0] hover:border-[#aea3b483] rounded-2xl hover:bg-[#aea3b41f] main-transition">
                <div className="p-2.5 bg-[#a094a84b] rounded-xl">
                  <svg className="max-sm:w-5 max-sm:h-5">
                    <use href="#location"></use>
                  </svg>
                </div>

                <p>Iran, Tehran</p>
              </div>

              <div className="contect-shape"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
