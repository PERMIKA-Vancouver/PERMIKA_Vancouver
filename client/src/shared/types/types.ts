export enum TypeEvent {
  Event = 0,
  Rantangan = 1,
}
export interface UpcomingEvent {
  name: string;
  date: string;
  rsvp: string;
  location: string;
  locationLink: string;
  type: TypeEvent;
}

export interface UpcomingWaroeng {
  date: string;
  pickup: string;
  link: string;
}

export type ScreenSizeProps = {
  isMobileView: boolean;
  isTabletPotraitView: boolean;
};

export interface PastEvent {
  year: string;
  title: string;
  date: string;
  location: string;
  images?: string[];
  description: string;
}
