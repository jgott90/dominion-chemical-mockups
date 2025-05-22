// postcss.config.js
import postcssImport from 'postcss-import';
import tailwindcss from '@tailwindcss/postcss7-compat';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
    plugins: [
        postcssImport,
        tailwindcss,
        autoprefixer,
        ...(typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? [cssnano({ preset: 'default' })] : [])
    ],
};
