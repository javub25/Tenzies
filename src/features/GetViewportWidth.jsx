import React from "react";
const GetViewportWidth = (func) => 
{
    /* The code block you provided uses the `React.useEffect` hook to add an event detector to the window's `resize` event. 
    hook to add an event detector to the window's `resize` event. */
    React.useEffect(() => {
        function handleResize() {
            func(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, [window.innerWidth]);
}

export default GetViewportWidth;
