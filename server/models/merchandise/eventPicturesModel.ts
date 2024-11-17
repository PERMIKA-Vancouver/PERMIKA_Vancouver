export interface Event {
    title: string; // Title for the event
    images: string[]; // List of image URLs for the event
}

// Define an interface for the Images model
export interface Images {
    term: string; // Default term for the event pictures
    events: Event[]; // List of events
}

