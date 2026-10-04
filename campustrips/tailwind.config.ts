import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#10131A', cream:'#F7F5EF', lime:'#C9F65A', violet:'#7257FF', orange:'#FF7048' }, boxShadow:{soft:'0 20px 60px rgba(16,19,26,.10)'} } }, plugins: [] };
export default config;
