import React from "react";
const GetViewportWidth = (func) => 
{
    /* El bloque de código que proporcionó utiliza el gancho `React.useEffect` 
    para agregar un detector de eventos al evento `resize` de la ventana. */
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