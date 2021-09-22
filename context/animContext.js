import React, { createContext } from "react";

const animContext = createContext({
    windowProps: {},
    setWindowProps: () => {},
    scrollToAnim: () => {},
});

export default animContext;
