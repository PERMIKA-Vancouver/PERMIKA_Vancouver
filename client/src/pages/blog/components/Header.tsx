import React, { CSSProperties, ReactNode, useState, useEffect } from "react";

type HeaderProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const defaultStyles: CSSProperties = {
  backgroundColor: "#DADADA",
  borderRadius: "20px",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Header: React.FC<HeaderProps> = ({
  className = "",
  style,
  children,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value based on current screen width

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={style} className={`${className}`}>
      <div className="flex grid grid-cols-5 grid-flow-col gap-4">
        <div
          className="col-start-1 row-start-1"
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "100px" : "150px",
          }}
        >
          1
        </div>
        <div
          className="col-start-2 row-start-1 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "100px" : "150px",
          }}
        >
          2
        </div>
        <div
          className="col-start-3 row-start-1 row-span-2 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "70%" : "85%",
          }}
        >
          3
        </div>
        <div
          className="col-start-4 row-start-1 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "100px" : "150px",
          }}
        >
          4
        </div>
        <div
          className="col-start-5 row-start-1 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "100px" : "150px",
          }}
        >
          5
        </div>
        <div
          className="col-start-1 row-start-2 col-span-2 "
          style={{
            ...defaultStyles,
            width: "95%",
            height: isSmallScreen ? "160px" : "200px",
          }}
        >
          6
        </div>
        <div
          className="col-start-4 row-start-2 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "190px" : "220px",
          }}
        >
          7
        </div>
        <div
          className="col-start-5 row-start-2 row-span-2 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "220px" : "300px",
          }}
        >
          8
        </div>
        <div
          className="col-start-4 row-start-3 "
          style={{
            ...defaultStyles,
            height: isSmallScreen ? "190px" : "220px",
          }}
        >
          9
        </div>
        <div
          className="col-start-5 row-start-3 "
          style={{
            ...defaultStyles,
            marginTop: isSmallScreen ? "30px" : "80px",
            height: isSmallScreen ? "190px" : "220px",
          }}
        >
          10
        </div>
        <div className="hidden lg:block col-start-1 row-start-3 col-span-3">
          <h1>insert: catchy blog name</h1>
          <p className="mt-3" style={{ color: "#A6A6A6", fontSize: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>
      <div className="block lg:hidden mt-8">
        <h1>insert: catchy blog name</h1>
        <p className="mt-3" style={{ color: "#A6A6A6", fontSize: "20px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>
    </div>
  );
};
