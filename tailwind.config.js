/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.html',
    './views/**/*.pug',
  ],
  theme: {
    extend: {
      colors: {
        'colorNavy': '#212832',
        'colorCoral': '#DF6951',
        'colorSlate': '#5E6282',
        'colorMidnightBlue': '#181E4B',
        'colorGoldenrod': '#F1A501',
        'colorPalePeach': '#FFF1DA',
        'colorLavender': '#DFD7F9',
        'colorWhite': '#FFFFFF',
  
        'colorPrimary': '#55c57a',
        
        'colorTitleBig': '#212832',
        'colorTitleSmall': '#5E6282',
        'colorParagraphPrimary': '#5E6282',
      },
    },
  },
  plugins: [],
}

