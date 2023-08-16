/** @type {import('tailwindcss').Config} */ 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        "background-shine": "background-shine 500ms linear"
      },
      colors:{
        // ----------------light mode------------------
        'bg': "#ffffff",
        'navigation-effect': '#000000',
        'navigation-link-hover': "#ffffff",
        'border-color': "#ddd",
        'form-input-bg': "#eee",
        'primary': "#111", // text color
        'secondary': "#666", // text color

        //--------------------- dark mode-------------
        'bg-dark': "#000000",
        'navigation-effect-dark': '#ffffff',
        'navigation-link-hover-dark': "#000000",
        'border-color-dark': "#1f2123",
        'form-input-bg-dark': "#0a0a0a",
        'primary-dark': "#eaeaea", // text color
        'secondary-dark': "#93989d", // text color

        //------------------ whatsapp playground colors-----------------
        //whatsapp
        "whatsapp-bg": "#fff",

        // sidebar
        "sidebar-bg": "#fff",
        "sidebar-header": "#01bfa5",
        "sidebar-header-icons-color": "#fff",
        "sidebar-chat-active": "#f0f2f5",
        "sidebar-chat-hover": "#f5f6f6",

        // contentHeader
        "content-header-bg": "#ededed",

        // content
        "content-message-container-bg": "#efeae2",
        "content-message-user-bg": "#dcf8c6",
        "content-message-bot-bg": "#fefefe",

        // contentFooter
        "content-footer-bg": "#ededed",
        "content-footer-input-bg": "#fff",
        "content-footer-icons-color": "#aaa",

        //--------------- whatsapp playground dark colors----------------
        //whatsapp
        "whatsapp-bg-dark": "#111b21",

        // sidebar
        "sidebar-bg-dark": "#111b21",
        "sidebar-header-dark": "#202c33",
        "sidebar-header-icons-color-dark": "#aebac1",
        "sidebar-chat-active-dark": "#2a3942",
        "sidebar-chat-hover-dark": "#202c33",

        // contentHeader
        "content-header-bg-dark": "#202c33",

        // content
        "content-message-container-bg-dark": "#111b21",
        "content-message-user-bg-dark": "#005c4b",
        "content-message-bot-bg-dark": "#1f2b32",

        // contentFooter
        "content-footer-bg-dark": "#202c33",
        "content-footer-input-bg-dark": "#2a3942",
        "content-footer-icons-color-dark": "#aebac1",

      }
    }
  },
  darkMode: 'class',
  plugins: [],
}

