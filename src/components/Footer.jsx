
export default function Footer({ darkMode }) {
  return (
    <footer
      className={`
        py-12 text-center transition-colors duration-300
        ${darkMode
          ? 'bg-gray-950 text-gray-400 border-t border-gray-800'
          : 'bg-gray-100 text-gray-600 border-t border-gray-200'}
      `}
    >
      <p>
        © {new Date().getFullYear()} Joy Kuro. All rights reserved.
      </p>
    </footer>
  );
}