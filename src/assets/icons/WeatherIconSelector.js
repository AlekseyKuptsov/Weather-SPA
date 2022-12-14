const WeatherIconSelector = ({id}) => {
    switch (id) {
        case 'loading':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <defs>
                        <linearGradient id="a" x1="21.97" y1="14.63" x2="42.03" y2="49.37" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#d4d7dd"/>
                            <stop offset="0.45" stop-color="#d4d7dd"/>
                            <stop offset="1" stop-color="#bec1c6"/>
                            <animateTransform attributeName="gradientTransform" type="rotate" values="0 32 32; 360 32 32" dur="1s" repeatCount="indefinite"/>
                        </linearGradient>
                    </defs>
                    <path d="M43,32A11,11,0,1,1,32,21,11,11,0,0,1,43,32ZM25,14.61l-.48,1a33.68,33.68,0,0,0-3.42,17.82h0M39,49.39l.48-1a33.68,33.68,0,0,0,3.42-17.82h0" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke="url(#a)">
                        <animateTransform attributeName="transform" type="rotate" values="360 32 32; 0 32 32" dur="1s" repeatCount="indefinite"/>
                    </path>
                </svg>
            );
        case "clear sky":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <defs>
                        <linearGradient id="a" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#fbbf24"/>
                            <stop offset="0.45" stop-color="#fbbf24"/>
                            <stop offset="1" stop-color="#f59e0b"/>
                        </linearGradient>
                    </defs>
                    <circle cx="32" cy="32" r="10.5" stroke="#f8af18" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
                    <path d="M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29" fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
                        <animateTransform attributeName="transform" dur="45s" values="0 32 32; 360 32 32" repeatCount="indefinite" type="rotate"/>
                    </path>
                </svg>
            );
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M26.1,24.08a.83.83,0,0,1,.16.56V38.12a.59.59,0,0,1-.72.71h-1.2a.75.75,0,0,1-.69-.35l-5.14-7.6a11.62,11.62,0,0,1-.85-1.5c-.28-.57-.49-1.05-.64-1.43s-.23-.59-.23-.6h-.13s0,.23.12.66.15,1,.23,1.64a18,18,0,0,1,.11,1.88v6.59a.77.77,0,0,1-.16.56.79.79,0,0,1-.55.15H15.3a.85.85,0,0,1-.57-.15.76.76,0,0,1-.17-.56V24.64a.78.78,0,0,1,.17-.56.85.85,0,0,1,.57-.15h1.19a.81.81,0,0,1,.7.33l5.1,7.56a13,13,0,0,1,.89,1.56c.27.55.48,1,.63,1.41s.23.59.24.6h.13s0-.25-.12-.67-.15-1-.23-1.63a16.11,16.11,0,0,1-.11-1.94V24.64a.83.83,0,0,1,.15-.56.82.82,0,0,1,.56-.15h1.11A.82.82,0,0,1,26.1,24.08Z" fill="#374151"/>
                    <path d="M30.47,40a1,1,0,0,1-.54.12H28.76c-.24,0-.4-.05-.46-.14a.43.43,0,0,1,0-.44l5.58-15a1.16,1.16,0,0,1,.33-.46.94.94,0,0,1,.53-.12H36c.24,0,.39.05.45.14a.5.5,0,0,1,0,.44l-5.59,15A1.06,1.06,0,0,1,30.47,40Z" fill="#374151"/>
                    <path d="M48.89,38.83H47.8a2.4,2.4,0,0,1-.91-.12.78.78,0,0,1-.39-.51l-1-2.7H39.74l-1,2.7a.78.78,0,0,1-.39.51,2.4,2.4,0,0,1-.91.12h-1q-.73,0-.48-.69l5.25-13.65a1.07,1.07,0,0,1,.33-.47,1,1,0,0,1,.55-.11h1.11a1.06,1.06,0,0,1,.57.11.9.9,0,0,1,.32.45l5.24,13.67Q49.63,38.83,48.89,38.83Zm-6-11.13c-.09-.43-.14-.76-.17-1l0-.36h-.15a7.73,7.73,0,0,1-.46,2.54l-1.62,4.45H44.8L43.2,28.9A10,10,0,0,1,42.89,27.7Z" fill="#374151"/>
                </svg>
            );
    }
}
 
export default WeatherIconSelector;