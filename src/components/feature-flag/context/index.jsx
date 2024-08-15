import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({}); // Initialize with an empty object

    async function fetchFeatureFlags() {
        setLoading(true);
        try {
            const res = await featureFlagsDataServiceCall();
            setEnabledFlags(res);
            console.log(enabledFlags)
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
            throw new Error(e);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}
