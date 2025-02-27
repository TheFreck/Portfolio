import ReactGA from 'react-ga4';

export const EventTracker = (category) => {
    const eventTracker = (action,label) => {
        ReactGA.event({category,action,label});
    }
    return eventTracker;
}

export default EventTracker;