import { DELEGATES } from "../data/rundown";
import "./styles.css";

export const DelegatesDetail = () => {
  return (
    <div className="min-h-[50vh] py-36 flex mx-4 xl:mx-10 flex-wrap items-center justify-center lg:!pl-0">
      <div className="grid grid-cols-1 gap-16">
        {DELEGATES.map((item, index) => (
          <div
            key={index}
            className="lg:w-[1000px] flex item items-stretch"
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
            <div className="left-side w-5/12 md:w-1/3 flex flex-col">
              <img
                className="w-100% lg:h-[285px] lg:w-[285px] mb-5"
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
              <div className="block lg:hidden flex-1">
                {item.pastExperiences.length > 0 && (
                  <div className="h-full flex flex-col">
                    <p className="text-base text-black/50 font-light mt-5 mb-4">
                      Past Experiences
                    </p>
                    <ul className="h-[260px] overflow-y-auto overflow-x-hidden">
                      {item.pastExperiences?.map((i, index) => (
                        <div>
                          <li className="text-md md:text-xl">{i.position}</li>
                          <div
                            className={`
                            ${
                              index !== item.pastExperiences.length - 1
                                ? "divider"
                                : ""
                            }`}
                            style={
                              index === item.pastExperiences.length - 1
                                ? { marginLeft: "21px" }
                                : {}
                            }
                          >
                            <p
                              className="text-md md:text-lg"
                              style={{ color: "#CC7200" }}
                            >
                              {i.organization}
                            </p>
                            {i.year === "Present" && (
                              <p className="text-md md:text-lg text-black/50">
                                {i.year}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* UP TO THIS PART */}
            </div>
            <div className="h-full right-side w-7/12 md:w-2/3 px-4 lg:px-0 ">
              <div>
                {/* ONLY SHOW WHEN ON PHONE */}
                <div className="block lg:hidden">
                  <p className="text-xl">{item.name}</p>
                  <p className="text-lg text-black/50 mt-3 mb-5">
                    <span style={{ color: "#CC7200" }}>{item.jobTitle}</span>
                  </p>
                </div>
                {/* UP TO THIS PART */}
                <p className="text-base text-black/50 text-justify">
                  {item.bio}
                </p>
              </div>

              <div className="hidden lg:block">
                {item.pastExperiences.length > 0 && (
                  <div>
                    <p className="text-base text-black/50 font-light mt-5 mb-4">
                      Past Experiences
                    </p>
                    <ul className="h-[260px] overflow-y-auto">
                      {item.pastExperiences?.map((i, index) => (
                        <div>
                          <li className="text-lg md:text-xl">{i.position}</li>
                          <div
                            className={`
                            ${
                              index !== item.pastExperiences.length - 1
                                ? "divider"
                                : ""
                            }`}
                            style={
                              index === item.pastExperiences.length - 1
                                ? { marginLeft: "21px" }
                                : {}
                            }
                          >
                            <p
                              className="text-md md:text-lg"
                              style={{ color: "#CC7200" }}
                            >
                              {i.organization}
                            </p>
                            {i.year !== "no year" && (
                              <p className="text-md md:text-lg text-black/50">
                                {i.year}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
