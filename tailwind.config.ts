import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Pixel art neon colors
				neon: {
					green: 'hsl(var(--neon-green))',
					blue: 'hsl(var(--neon-blue))',
					pink: 'hsl(var(--neon-pink))',
					purple: 'hsl(var(--neon-purple))',
					yellow: 'hsl(var(--neon-yellow))',
					cyan: 'hsl(var(--neon-cyan))',
					orange: 'hsl(var(--neon-orange))'
				},
				pixel: {
					gray: 'hsl(var(--pixel-gray))',
					dark: 'hsl(var(--pixel-dark))',
					light: 'hsl(var(--pixel-light))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				pixel: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace']
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'pixel': 'var(--shadow-pixel)'
			},
			backgroundImage: {
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-scan': 'var(--gradient-scan)',
				'gradient-pastel-header': 'var(--gradient-pastel-header)',
				'gradient-pastel-footer': 'var(--gradient-pastel-footer)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'color-cycle': {
					'0%': { color: 'hsl(var(--primary))' },
					'25%': { color: 'hsl(var(--secondary))' },
					'50%': { color: 'hsl(var(--accent))' },
					'75%': { color: 'hsl(var(--neon-pink))' },
					'100%': { color: 'hsl(var(--primary))' }
				},
				'subtle-glow': {
					'0%': { textShadow: '0 0 5px hsl(var(--primary) / 0.5)' },
					'50%': { textShadow: '0 0 20px hsl(var(--primary) / 0.8), 0 0 30px hsl(var(--primary) / 0.4)' },
					'100%': { textShadow: '0 0 5px hsl(var(--primary) / 0.5)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-pulse': 'pixel-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'scan-line': 'scan-line 2s linear infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite alternate',
				'color-cycle': 'color-cycle 4s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
