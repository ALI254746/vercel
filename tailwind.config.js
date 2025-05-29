/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js app papkasi
    "./components/**/*.{js,ts,jsx,tsx}", // Komponentlar papkasi
    "./pages/**/*.{js,ts,jsx,tsx}", // Agar pages papkasi ishlatilsa
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
        // boshqalar ham qo'shishingiz mumkin
      },
    }, // Agar o‘zingizning ranglar, o‘lchamlar yoki boshqa sozlamalarni qo‘shmoqchi bo‘lsangiz
  },
  plugins: [], // Agar Tailwind pluginlari ishlatilsa bu yerga qo‘shiladi
};
