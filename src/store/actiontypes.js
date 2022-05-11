const actiontypes = () => {
    return {
        events: {
            setEvents: 'SET_EVENTS',
            loading: 'LOADING',
            eventsFailure: 'EVENTS_FAILURE'
        },
        event: {
            setEvent: 'SET_EVENT',
            loading: 'LOADING',
            eventFailure: 'EVENT_FAILURE'
        }
    }
}

export default actiontypes