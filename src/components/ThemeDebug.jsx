import { useTheme } from '../context/ThemeContext';

export default function ThemeDebug() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 rounded-lg p-3 shadow-lg">
      <div className="text-sm font-semibold">
        <span className="text-gray-700 dark:text-gray-300">Current Theme: </span>
        <span className="text-blue-600 dark:text-blue-400">{theme}</span>
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {theme === 'dark' ? '🌙 Dark Mode Active' : '☀️ Light Mode Active'}
      </div>
    </div>
  );
}
