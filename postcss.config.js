import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
    plugins: [
        tailwindcss,
        autoprefixer,
        purgecss({
            content: ['./src/**/*.html', './src/**/*.tsx'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ],
};
