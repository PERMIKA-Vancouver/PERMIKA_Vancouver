export interface UpcomingEvent {
  name: string;
  date: string;
  rsvp: string;
  location: string;
  locationLink: string;
}

export type ScreenSizeProps = {
  isMobileView: boolean;
  isTabletPotraitView: boolean;
};
