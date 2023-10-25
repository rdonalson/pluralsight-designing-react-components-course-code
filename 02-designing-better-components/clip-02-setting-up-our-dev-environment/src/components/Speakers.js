import { useState } from "react";

import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ theme, setTheme }) {
    const [showSessions, setShowSessions] = useState(true);

    return (   // return fragment vs div
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme} 
                showSessions={showSessions}
                setShowSessions={setShowSessions}
            />
            <SpeakersList 
                showSessions={showSessions}
            />
        </>
    )
}

export default Speakers;