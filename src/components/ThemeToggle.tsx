import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
          : 'bg-gradient-to-r from-indigo-600 to-purple-700'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="テーマを切り替え"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-white" />
        ) : (
          <Moon className="w-6 h-6 text-yellow-200" />
        )}
      </motion.div>
    </motion.button>
  );
};
export default ThemeToggle;