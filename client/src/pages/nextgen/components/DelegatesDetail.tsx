import { DELEGATES } from "../data/rundown";
import "./styles.css";

export const DelegatesDetail = () => {
  return (
    <div className="min-h-[50vh] py-36 flex mx-4 xl:mx-10 flex-wrap items-center justify-center lg:!pl-0">
      <div className="grid grid-cols-1 gap-16">
        {DELEGATES.map((item, index) => (
          <div
            key={index}
            className="lg:w-[1000px] flex delegate"
            id={index.toString()}
            style={
              index !== 0
                ? {
                    paddingTop: "50px",
                    borderTop: "2px solid #dedede",
                  }
                : {}
            }
          >
            <div className="left-side w-1/3">
              <img
                className="w-100% lg:h-[285px] lg:w-[285px]"
                src={item.image}
                id={item.name}
                alt={item.name}
              />
              <div className="w-[285px] hidden lg:block">
                <p className="text-3xl">{item.name}</p>
                <p className="text-xl text-black/50 mt-3 mb-5">
                  <span style={{ color: "#CC7200" }}>{item.jobTitle}</span>
                </p>
              </div>
              {/* ONLY SHOW WHEN ON PHONE */}
              <div className="block lg:hidden">
                <p className="text-base text-black/50 font-light mt-5 mb-4">
                  Past Experiences
                </p>
                <ul>
                  <li className="text-lg">
                    {item.pastExperiences[0].position}
                  </li>
                  <div className="divider">
                    <p className="text-md" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-md text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                  <li className="text-lg">
                    {item.pastExperiences[1].position}
                  </li>
                  <div className="divider">
                    <p className="text-md" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[1].organization}
                    </p>
                    <p className="text-md text-black/50">
                      {item.pastExperiences[1].year}
                    </p>
                  </div>
                  <li className="text-lg">
                    {item.pastExperiences[2].position}
                  </li>
                  <div style={{ marginLeft: "14.5px" }}>
                    <p className="text-md" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-md text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                </ul>
              </div>
              {/* UP TO THIS PART */}
            </div>
            <div className="right-side w-2/3 px-4 lg:px-0 ">
              {/* ONLY SHOW WHEN ON PHONE */}
              <div className="w-[285px] block lg:hidden">
                <p className="text-xl">{item.name}</p>
                <p className="text-lg text-black/50 mt-3 mb-5">
                  <span style={{ color: "#CC7200" }}>{item.jobTitle}</span>
                </p>
              </div>
              {/* UP TO THIS PART */}
              <p className="text-base text-black/50 text-justify">{item.bio}</p>
              <div className="hidden lg:block">
                <p className="text-base text-black/50 font-light mt-5 mb-4">
                  Past Experiences
                </p>
                <ul>
                  <li className="text-lg md:text-xl">
                    {item.pastExperiences[0].position}
                  </li>
                  <div className="divider">
                    <p
                      className="text-md md:text-lg"
                      style={{ color: "#CC7200" }}
                    >
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-md md:text-lg text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                  <li className="text-lg md:text-xl">
                    {item.pastExperiences[1].position}
                  </li>
                  <div className="divider">
                    <p
                      className="text-md md:text-lg"
                      style={{ color: "#CC7200" }}
                    >
                      {item.pastExperiences[1].organization}
                    </p>
                    <p className="text-md md:text-lg text-black/50">
                      {item.pastExperiences[1].year}
                    </p>
                  </div>
                  <li className="text-lg md:text-xl">
                    {item.pastExperiences[2].position}
                  </li>
                  <div style={{ marginLeft: "14.5px" }}>
                    <p
                      className="text-md md:text-lg"
                      style={{ color: "#CC7200" }}
                    >
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-md md:text-lg text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
