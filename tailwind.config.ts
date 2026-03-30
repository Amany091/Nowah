import {Config} from 'tailwindcss'

const config: Config = {
     content:[
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,tsx,jsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                // Alias: brand green tokens
                "green-lighter":        "#bdfab4",   // rgb(189,250,189)
                "green-light":          "#f0fef0",   // rgb(240,254,240)
                "green-light-hover":    "#e9fde9",   // rgb(233,253,233)
                "green-light-active":   "#d1fcd1",   // rgb(209,252,209)
                "green-normal":         "#6cf46c",   // rgb(108,244,108)
                "green-normal-hover":   "#5ccf5c",   // rgb(92,207,92)
                "green-normal-active":  "#56c356",   // rgb(86,195,86)
                "green-dark":           "#51b751",   // rgb(81,183,81)
                "green-dark-hover":     "#419241",   // rgb(65,146,65)
                "green-dark-active":    "#316e31",   // rgb(43,110,43)
                "green-darker":         "#285528",   // rgb(38,85,38)

                "midnight-light":          "#e7e8eb",   // rgb(231,232,235)
                "midnight-light-hover":    "#dadce0",   // rgb(218,220,224)
                "midnight-light-active":   "#b3b7c3",   // rgb(179,183,195)
                "midnight-normal":         "#09162e",   // rgb(9,22,46) — deep navy
                "midnight-normal-hover":   "#09162e",   // rgb(9,22,46)
                "midnight-normal-active":  "#081329",   // rgb(8,19,41)
                "midnight-dark":           "#081220",   // rgb(8,18,38)
                "midnight-dark-hover":     "#060e1f",   // rgb(6,14,31)
                "midnight-dark-active":    "#050b17",   // rgb(5,11,23)
                "midnight-darker":         "#040812",   // rgb(4,8,18)

                "mustard-light":          "#fffcef",
               "mustard-light-hover":    "#fff5e6",
               "mustard-light-active":   "#fff5cc",
               "mustard-normal":         "#ffdf5a",   // rgb(255,223,90)
               "mustard-normal-hover":   "#e6c861",   // rgb(230,200,81)
               "mustard-normal-active":  "#c8b248",   // rgb(204,178,72)
               "mustard-dark":           "#bfa744",   // rgb(191,167,68)
               "mustard-dark-hover":     "#998036",   // rgb(153,128,54)
               "mustard-dark-active":    "#796428",   // rgb(115,100,40)
               "mustard-darker":         "#594e1f",   // rgb(88,78,31)

               "black-pear-light":          "#e6e7e8",
               "black-pear-light-hover":    "#d9dadc",
               "black-pear-light-active":   "#b1b3b7",
               "black-pear-normal":         "#030b16",   // rgb(3,11,22)
               "black-pear-normal-hover":   "#030914",   // rgb(3,9,20)
               "black-pear-normal-active":  "#020812",   // rgb(2,8,18)
               "black-pear-dark":           "#020811",   // rgb(2,8,17)
               "black-pear-dark-hover":     "#02060d",   // rgb(2,6,13)
               "black-pear-dark-active":    "#01050a",   // rgb(1,5,10)
               "black-pear-darker":         "#010408",   // rgb(1,4,8)

               "baby-blue-light":          "#eefaff",
               "baby-blue-light-hover":    "#e6faff",
               "baby-blue-light-active":   "#cbf9ff",
               "baby-blue-normal":         "#57ebff",   // rgb(87,235,255)
               "baby-blue-normal-hover":   "#4ed4e6",   // rgb(78,212,230)
               "baby-blue-normal-active":  "#46bccc",   // rgb(70,188,204)
               "baby-blue-dark":           "#41b0bf",   // rgb(65,176,191)
               "baby-blue-dark-hover":     "#348d99",   // rgb(52,141,153)
               "baby-blue-dark-active":    "#276a73",   // rgb(39,106,115)
               "baby-blue-darker":         "#1e5259",   // rgb(30,82,89)

               "gray-400": '#9CA3AF',
               "gray-dark": "#2F2F2F",
               "gray-500": "#6B7280"
            },

            backgroundImage: {
                // White → Lime Green → Midnight Navy  (gradient 1)
                "gradient-green-to-midnight":
                "linear-gradient(to right, #ffffff, #6cf46c, #09162e)",

                // Midnight Navy → Slate Green  (gradient 2)
                "gradient-midnight-to-sage":
                "linear-gradient(to right, #09162e, #4a6b5a)",

                // Midnight Navy → Medium Green  (gradient 3)
                "gradient-midnight-to-green":
                "linear-gradient(to right, #09162e, #5ccf5c)",
            },

            container: {
                center: true,
                padding: '1rem',
                screens: {
                    xl: "1232px"
                }
            },

            spacing: {},

            borderRadius: {},

            fontSize: {
                64: '64px',
                48: '48px',
                40: '40px',
                32: '32px',
                24: '24px',
                20: '20px',
                18: '18px',
                16: '16px',
                14: '14px',
                12: '12px'
            },

            fontWeight: {
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700
            },

            fontFamily: {
                // Primary typeface: Changa
                sans: ["var(--font-changa)", "sans-serif"],
                changa: ["var(--font-changa)", "sans-serif"],
            },

            boxShadow: {
                primary: '0px 0px 15.52px 0px #316E31',
                innerShadow: 'inset 0px 0px 15.52px 0px #316E31',
            },

            keyframes: {
            'line-move': {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' },
            }
            },
            animation: {
                'line-move': 'line-move 3s linear infinite',
            }
        }
    },
    plugins: []
}

export default config