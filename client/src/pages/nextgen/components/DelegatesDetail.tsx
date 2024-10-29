import { DELEGATES } from "../data/rundown";
import "./styles.css";

export const DelegatesDetail = () => {
  return (
    <div className="min-h-[50vh] py-36 flex mx-10 flex-wrap items-center justify-center lg:!pl-0">
      <div className="grid grid-cols-1 gap-16">
        {DELEGATES.map((item, index) => (
          <div
            key={index}
            className="lg:w-[1000px] flex delegate"
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
              <div className="block lg:hidden">
                <p className="text-base text-black/50 font-light mt-5 mb-4">
                  Past Experiences
                </p>
                <ul>
                  <li className="text-2xl">
                    {item.pastExperiences[0].position}
                  </li>
                  <div className="divider">
                    <p className="text-xl" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-xl text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                  <li className="text-2xl">
                    {item.pastExperiences[1].position}
                  </li>
                  <div className="divider">
                    <p className="text-xl" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[1].organization}
                    </p>
                    <p className="text-xl text-black/50">
                      {item.pastExperiences[1].year}
                    </p>
                  </div>
                  <li className="text-2xl">
                    {item.pastExperiences[2].position}
                    <div style={{ marginLeft: "14.5px" }}>
                      <p className="text-xl" style={{ color: "#CC7200" }}>
                        {item.pastExperiences[0].organization}
                      </p>
                      <p className="text-xl text-black/50">
                        {item.pastExperiences[0].year}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-side w-2/3 px-12 lg:px-0 ">
              {/* ONLY SHOW WHEN ON PHONE */}
              <div className="w-[285px] block lg:hidden">
                <p className="text-3xl">{item.name}</p>
                <p className="text-xl text-black/50 mt-3 mb-5">
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
                  <li className="text-2xl">
                    {item.pastExperiences[0].position}
                  </li>
                  <div className="divider">
                    <p className="text-xl" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[0].organization}
                    </p>
                    <p className="text-xl text-black/50">
                      {item.pastExperiences[0].year}
                    </p>
                  </div>
                  <li className="text-2xl">
                    {item.pastExperiences[1].position}
                  </li>
                  <div className="divider">
                    <p className="text-xl" style={{ color: "#CC7200" }}>
                      {item.pastExperiences[1].organization}
                    </p>
                    <p className="text-xl text-black/50">
                      {item.pastExperiences[1].year}
                    </p>
                  </div>
                  <li className="text-2xl">
                    {item.pastExperiences[2].position}
                    <div style={{ marginLeft: "14.5px" }}>
                      <p className="text-xl" style={{ color: "#CC7200" }}>
                        {item.pastExperiences[0].organization}
                      </p>
                      <p className="text-xl text-black/50">
                        {item.pastExperiences[0].year}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
