import { PANELIST } from "../data/rundown";
import "./styles.css";

export const PanelistDetail = () => {
  return (
    <div className="min-h-[50vh] py-36 flex flex-wrap items-center justify-center lg:!pl-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-28">
        {PANELIST.map((item, index) => (
          <div key={index} id={"pan-" + index.toString()} className="">
            <img
              className="h-[285px] w-[285px]"
              src={item.image}
              id={item.name}
              alt={item.name}
            />
            <div className="w-[285px] mt-4">
              <p className="text-3xl">{item.name}</p>
              <p
                style={{ color: "#CC7200", fontWeight: "550" }}
                className="text-2xl text-black/50 mt-3"
              >
                {item.role}
              </p>
              <p className="text-md text-black/50 mb-5 italic">{item.remark}</p>
              <p className="text-base text-black/50 text-justify">{item.bio}</p>

              {item.pastExperiences.length > 0 && (
                <div>
                  <p className="text-base text-black/50 font-light mt-5 mb-4">
                    {item.name === "Shadrina Wicaksono" ? (
                      <p className="text-base text-black/50 font-light mt-5 mb-4">
                        Past Experiences
                        <span
                          className="text-md"
                          style={{ color: "#CC7200", fontWeight: "550" }}
                        >
                          {" "}
                          (Scroll to See More)
                        </span>
                      </p>
                    ) : (
                      "Past Experiences"
                    )}
                  </p>
                  <ul className="h-[250px] overflow-y-auto">
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
                          <p className="text-md md:text-lg text-black/50">
                            {i.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
