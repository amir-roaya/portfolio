import { projects } from "@/data/projects";

export default function Projects(): React.ReactNode {
  return (
    <div className="projects-wrapper relative">
      {projects.map(({ title, desc, tools, codeHref, demoHref }, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-8 max-[25rem]:gap-5 px-6 py-12 max-[25rem]:px-4 border rounded-3xl shadow-menu-mobile"
          >
            <h4 className="font-poppins-semibold text-3xl max-[25rem]:text-2xl">
              {title}
            </h4>

            <p className="text-sm max-w-67 max-[25rem]:text-xs">{desc}</p>

            <ul className="flex flex-wrap gap-2.5 max-w-67 text-xs max-[25rem]:text-[10px]">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="py-1.5 px-2 border border-gray-500 bg-[#9885bb7a] rounded-xl"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center gap-4 text-sm max-[25rem]:text-xs">
              <a
                className="flex items-center gap-3 justify-center w-[50%] p-1 border border-[#ffffff86] rounded-xl hover:scale-105 main-transition"
                href={codeHref}
              >
                <div>
                  <svg className="w-6">
                    <use href="#github"></use>
                  </svg>
                </div>
                Code
              </a>

              <a
                className="flex items-center gap-3 justify-center w-[50%] p-1 text-black rounded-xl demo-btn-gradient hover:scale-105 main-transition"
                href={demoHref}
              >
                <div>
                  <svg className="w-6">
                    <use href="#demo"></use>
                  </svg>
                </div>
                Demo
              </a>
            </div>
          </div>
        );
      })}

      <div className="projects-shape"></div>
    </div>
  );
}
