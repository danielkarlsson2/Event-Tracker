const actiontypes = () => {
    return {
        events: {
            setEvents: 'SET_EVENTS',
            loading: 'EVENTS_LOADING',
            eventsFailure: 'EVENTS_FAILURE'
        },
        event: {
            setEvent: 'SET_EVENT',
            loading: 'EVENT_LOADING',
            eventFailure: 'EVENT_FAILURE'
        },
        auth: {
            loading: 'AUTH_LOADING',
            authFailure: 'AUTH_FAILURE',
            authSuccess: 'AUTH_SUCCESS',
            logout: 'LOGOUT'
          }
    }
}

export default actiontypes