import { LandingComponent } from './components/LandingComponent';
import { Map } from './components/Map';
import { Rundown } from './components/Rundown';
import { Panelist } from './components/Panelist';
import { PanelistDetail } from './components/PanelistDetail';
import { Delegates } from './components/Delegates';
import { DelegatesDetail } from './components/DelegatesDetail';
import { Sponsors } from './components/Sponsors';
import { Networking } from './components/Networking';

export const Nextgen = () => {
  return (
    <>
      <LandingComponent />
      <Map />
      <Rundown />
      <Networking />
      <Panelist />
      <PanelistDetail />
      <Delegates />
      <DelegatesDetail />
      <Sponsors />
    </>
  );
};
