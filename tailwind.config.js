/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            backgroundImage: {
                'blob-pattern': "url('/src/media/blob.svg')",
                
              },
            colors: {
                "background-color": "var(--background-color)",
                "foreground-color": "var(--foreground-color)",
                "accent-color": "var(--accent-color)",
                "white-outline": "rgba(133,125,112,255)",
                'bg-color': '#0B0C0D',
        "accent-color": "#B00B11",
            },
            boxShadow: {
                "tallBox": "3px 3px 15px 2px black !important",
            },
            backgroundImage: {
                'peaks-background': "url('/media/peaks.svg')",
                'tall-peaks-background': "url('/media/tall_peaks.svg')",
                'gradient-background': "url('/media/gradient.svg')",
               
              },
              fontFamily: {
                hack: ["hack"],
                monocraft: ["monocrafted"]
              },
        },
    },
    
}
