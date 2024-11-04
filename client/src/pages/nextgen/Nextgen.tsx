import { LandingComponent } from "./components/LandingComponent";
import { Rundown } from "./components/Rundown";
import { Panelist } from "./components/Panelist";
import { PanelistDetail } from "./components/PanelistDetail";
// *** HIDDEN FOR TIER 3  ***
// import { Delegates } from "./components/Delegates";
// import { DelegatesDetail } from "./components/DelegatesDetail";

export const Nextgen = () => {
  return (
    <>
      <LandingComponent />
      <Rundown />
      <Panelist />
      <PanelistDetail />
      {/* *** HIDDEN FOR TIER 3 *** */}
      {/* <Delegates /> */}
      {/* <DelegatesDetail /> */}
    </>
  );
};
