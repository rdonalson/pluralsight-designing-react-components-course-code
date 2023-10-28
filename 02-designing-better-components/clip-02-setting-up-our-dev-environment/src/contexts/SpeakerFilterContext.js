import React, { createContext } from 'react';
import userSpeakerFilter from '../hooks/useSpeakerFilter';

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({
    children,
    startingShowSessions = false,
    startingEvenYear = "2019",

}) {

    const {
        showSessions, setShowSessions,
        eventYear, setEventYear,
        searchQuery, setSearchQuery,
        EVENT_YEARS
    } = userSpeakerFilter(startingShowSessions, startingEvenYear);

    return (
        <SpeakerFilterContext.Provider value={
            {
                showSessions, setShowSessions,
                eventYear, setEventYear,
                searchQuery, setSearchQuery,
                EVENT_YEARS
            }
        }>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterContext, SpeakerFilterProvider };