import { LandingComponent } from './components/LandingComponent';
import { Map } from './components/Map';
import { Rundown } from './components/Rundown';
import { Panelist } from './components/Panelist';
import { PanelistDetail } from './components/PanelistDetail';
import { Delegates } from './components/Delegates';
import { DelegatesDetail } from './components/DelegatesDetail';
import { Hero } from './components/Hero';
import { Sponsors } from './components/Sponsors';

export const Nextgen = () => {
  return (
    <>
      <LandingComponent />
      <Map />
      <Rundown />
      <Hero />
      <Panelist />
      <PanelistDetail />
      <Delegates />
      <DelegatesDetail />
      <Sponsors />
    </>
  );
};
