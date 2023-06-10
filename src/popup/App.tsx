import React, {useEffect, useState} from "react";

function getStorage () {
    if (typeof browser === "undefined") {
        console.log("rolling with chrome")
        // @ts-ignore
        return chrome.storage.local;
    }
    return browser.storage.local;
}
const storage = getStorage()

export const App: () => React.JSX.Element = () => {
    const [enabled, setEnabled] = useState(true)
    useEffect(() => {
        storage.get().then(({enabled = true}) => {
            console.log("init with", enabled)
            setEnabled(enabled);
        })
    }, [])

    const handleClick = () => {
        const toggled = !enabled
        setEnabled(toggled)
        storage.set({enabled: toggled})
        console.log("Setting", toggled)
    }

    return (
        <div>
            <h1>MoneyRounder</h1>
            <button onClick={handleClick}>{enabled ? "disable" : "enable"}</button>
        </div>
    );
}
