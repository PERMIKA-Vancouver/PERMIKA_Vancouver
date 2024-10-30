import { PANELIST } from "../data/rundown";
import "./styles.css";

export const PanelistDetail = () => {
  return (
    <div className="min-h-[50vh] py-36 flex flex-wrap items-center justify-center lg:!pl-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-28">
        {PANELIST.map((item, index) => (
          <div key={index} className="">
            <img
              className="h-[285px] w-[285px]"
              src={item.image}
              id={item.name}
              alt={item.name}
            />
            <div className="w-[285px]">
              <p className="text-3xl">{item.name}</p>
              <p className="text-xl text-black/50 mt-3 mb-5">
                <span style={{ color: "#CC7200" }}>{item.role}</span> at{" "}
                <span className="italic">{item.place}</span>
              </p>
              <p className="text-base text-black/50 text-justify">{item.bio}</p>
              <p className="text-base text-black/50 font-light mt-5 mb-4">
                Past Experiences
              </p>
              <ul>
                <li className="text-xl md:text-2xl">
                  {item.pastExperiences[0].position}
                </li>
                <div className="divider">
                  <p
                    className="text-lg md:text-xl"
                    style={{ color: "#CC7200" }}
                  >
                    {item.pastExperiences[0].organization}
                  </p>
                  <p className="text-lg md:text-xl text-black/50">
                    {item.pastExperiences[0].year}
                  </p>
                </div>
                <li className="text-xl md:text-2xl">
                  {item.pastExperiences[1].position}
                </li>
                <div className="divider">
                  <p
                    className="text-lg md:text-xl"
                    style={{ color: "#CC7200" }}
                  >
                    {item.pastExperiences[1].organization}
                  </p>
                  <p className="text-lg md:text-xl text-black/50">
                    {item.pastExperiences[1].year}
                  </p>
                </div>
                <li className="text-xl md:text-2xl">
                  {item.pastExperiences[2].position}
                  <div style={{ marginLeft: "14.5px" }}>
                    <p
                      className="text-lg md:text-xl"
                      style={{ color: "#CC7200" }}
                    >
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-lg md:text-xl text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
