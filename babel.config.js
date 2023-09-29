const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@constants': './src/constants',
        '@hooks': './src/hooks',
        '@navigation': './src/navigation',
        '@screen': './src/screen',
        '@services': './src/services',
        '@utils': './src/utils',
        '@types': './src/types',
      },
    },
  ],
  ['nativewind/babel'],
];

module.exports = {
  presets,
  plugins,
};
