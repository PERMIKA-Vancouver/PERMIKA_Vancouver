export enum TypeEvent {
  Event = 0,
  Rantangan = 1,
}
export interface UpcomingEvent {
  name: string;
  date: string;
  rsvp: string;
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
