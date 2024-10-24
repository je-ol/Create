/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				'primary-dark': 'var(--primary-dark)',        // Reference the CSS variable
				'primary-light': 'var(--primary-light)',      // Component background color
				'primary-muted': 'var(--primary-muted)',      // Used in header
				'primary-input': 'var(--primary-input)',      // Background color for input fields
				'input-border': 'var(--input-border)',        // Border color for input fields when active
				'primary-subtle': 'var(--primary-subtle)',    // Subtitle grey and placeholder text color
				'off-white': 'var(--off-white)',              // Main white text color
				'button-default': 'var(--button-default)',    // Default button blue color
				'button-hover': 'var(--button-hover)',        // Button hover state blue color
				'button-active': 'var(--button-active)',      // Button active/clicked state blue color
				'button-border': 'var(--button-border)',      // Button outside border
				'error': 'var(--error)',                      // Red color for error messages
				'success': 'var(--success)',                  // Green color for success icon on toast
				'seconday-accent': 'var(--seconday-accent)',  // Primary blue accent color Gradient/Borders
				'terciary-accent': 'var(--terciary-accent)',  // Secondary pink accent color Gradient/Borders
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

