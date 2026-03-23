/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1a237e', // Deep authority, trust-building foundation - indigo-900
        'primary-50': '#e8eaf6', // Light primary shade - indigo-50
        'primary-100': '#c5cae9', // Light primary shade - indigo-100
        'primary-200': '#9fa8da', // Medium-light primary shade - indigo-200
        'primary-500': '#3f51b5', // Medium primary shade - indigo-500
        'primary-600': '#303f9f', // Medium-dark primary shade - indigo-600
        'primary-700': '#283593', // Dark primary shade - indigo-700
        'primary-800': '#1a237e', // Darker primary shade - indigo-800
        'primary-900': '#0d47a1', // Darkest primary shade - indigo-900

        // Secondary Colors
        'secondary': '#4527a0', // Innovation signal, quantum inspiration - deep-purple-700
        'secondary-50': '#ede7f6', // Light secondary shade - deep-purple-50
        'secondary-100': '#d1c4e9', // Light secondary shade - deep-purple-100
        'secondary-200': '#b39ddb', // Medium-light secondary shade - deep-purple-200
        'secondary-500': '#673ab7', // Medium secondary shade - deep-purple-500
        'secondary-600': '#5e35b1', // Medium-dark secondary shade - deep-purple-600
        'secondary-700': '#4527a0', // Dark secondary shade - deep-purple-700
        'secondary-800': '#311b92', // Darker secondary shade - deep-purple-800
        'secondary-900': '#1a237e', // Darkest secondary shade - deep-purple-900

        // Accent Colors
        'accent': '#00e5ff', // Breakthrough moments, interactive highlights - cyan-400
        'accent-50': '#e0f7fa', // Light accent shade - cyan-50
        'accent-100': '#b2ebf2', // Light accent shade - cyan-100
        'accent-200': '#80deea', // Medium-light accent shade - cyan-200
        'accent-300': '#4dd0e1', // Medium accent shade - cyan-300
        'accent-400': '#00e5ff', // Primary accent shade - cyan-400
        'accent-500': '#00bcd4', // Medium-dark accent shade - cyan-500
        'accent-600': '#0097a7', // Dark accent shade - cyan-600

        // Background Colors
        'background': '#fafafa', // Clean canvas, premium whitespace - gray-50
        'surface': '#ffffff', // Content elevation, subtle depth - white
        'deep-space': '#0B1426', // Deep space blue for quantum backgrounds
        'quantum-blue': '#1E3A5F', // Quantum blue for secondary backgrounds

        // Text Colors
        'text-primary': '#212121', // Extended reading, maximum clarity - gray-900
        'text-secondary': '#616161', // Clear hierarchy, supporting information - gray-600
        'text-muted': '#6B7280', // Neutral gray for hierarchy - gray-500

        // Status Colors
        'success': '#00c853', // Progress confirmation, positive reinforcement - green-400
        'success-50': '#e8f5e8', // Light success shade - green-50
        'success-100': '#c8e6c9', // Light success shade - green-100
        'success-500': '#4caf50', // Medium success shade - green-500

        'warning': '#ff6f00', // Attention without alarm, status updates - orange-600
        'warning-50': '#fff3e0', // Light warning shade - orange-50
        'warning-100': '#ffe0b2', // Light warning shade - orange-100
        'warning-500': '#ff9800', // Medium warning shade - orange-500

        'error': '#d32f2f', // Helpful guidance, constructive concern - red-700
        'error-50': '#ffebee', // Light error shade - red-50
        'error-100': '#ffcdd2', // Light error shade - red-100
        'error-500': '#f44336', // Medium error shade - red-500

        // Brand Colors
        'plasma-orange': '#FF6B35', // Cultural heritage accent - orange-500
        'quantum-purple': '#7C3AED', // Call-to-action color - violet-600
        'quantum-white': '#FAFBFC', // Premium background canvas - slate-50
        'deep-charcoal': '#1A1D23', // Text hierarchy primary - gray-900

        // Border Colors
        'border': '#e0e0e0', // Functional borders - gray-300
        'border-light': '#f5f5f5', // Light borders - gray-100
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Source Sans Pro', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '13': '3.25rem', // 52px - golden ratio multiplier
        '21': '5.25rem', // 84px - golden ratio multiplier
        '34': '8.5rem', // 136px - golden ratio multiplier
        '55': '13.75rem', // 220px - golden ratio multiplier
        '89': '22.25rem', // 356px - golden ratio multiplier
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(11, 20, 38, 0.1), 0 4px 6px rgba(11, 20, 38, 0.05)',
        'elevation': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'primary': '0 4px 20px rgba(26, 35, 126, 0.1)',
        'glow': '0 0 20px rgba(0, 229, 255, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 229, 255, 0.4), 0 0 40px rgba(0, 229, 255, 0.2)',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      animation: {
        'quantum-pulse': 'quantum-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        'quantum-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.02)',
            opacity: '0.8',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'glow': {
          'from': {
            'box-shadow': '0 0 20px rgba(0, 229, 255, 0.3)',
          },
          'to': {
            'box-shadow': '0 0 30px rgba(0, 229, 255, 0.4), 0 0 40px rgba(0, 229, 255, 0.2)',
          },
        },
      },
      transitionTimingFunction: {
        'quantum': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}