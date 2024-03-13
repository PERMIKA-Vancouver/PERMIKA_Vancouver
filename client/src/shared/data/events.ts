import { UpcomingEvent } from '../types/types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Layar Tancap',
    date: '2024-02-25 15:30',
    rsvp: 'https://docs.google.com/forms/d/e/1FAIpQLSfNU-Kzv4o9DghHdbPy2gHbUcN4WfDunveQZ4bFdRlDNjYvYA/viewform?fbclid=PAAaal5I7bo-ImSEFuZtU_zb0DU7qS6ye5otyOK6Lo_sopvULzudB8ArWhC7w_aem_AWZfi3c1bckgDwibFaHHLQK1ECM7DH2ROvizBHV5YO79IDWc75_mGe-w-58NNumXTSE',
    location: 'KJRI, 1630 Alberni St',
    locationLink: 'https://maps.app.goo.gl/A3vNgBUN2oPrKRYk6',
    type: 0,
  },
  {
    name: 'Waroeng Nasi Ayam Gulai',
    date: '2024-03-17 00:00',
    rsvp: 'https://docs.google.com/forms/d/e/1FAIpQLSdM6hEo8mEIgaB_lvBwwqHw3OWddqowRVWUNwkzzDpXq5upJQ/viewform',
    location: '',
    locationLink: '',
    type: 1,
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'No Upcoming Events',
  date: '0000-00-00 00:00',
  rsvp: '',
  location: '',
  locationLink: '',
  type: 0,
};

const EVENT_DESCRIPTION = 'Save yourself a seat for the event below!';
const EVENT_BUTTON = 'RSVP';

const RANTANGAN_DESCRIPTION =
  "Savor the flavor, seize the moment, order Waroeng before they're all gone!";
const RANTANGAN_BUTTON = 'Pre-order';

export {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
  EVENT_DESCRIPTION,
  EVENT_BUTTON,
  RANTANGAN_DESCRIPTION,
  RANTANGAN_BUTTON,
};
