import postcssImport from 'postcss-import';
import tsconfigPaths from 'postcss-tsconfig-paths';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    postcssImport,
    tsconfigPaths,
    tailwindcss('./tailwind.config.ts'),
    autoprefixer,
  ],
};

export default config;
