const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    'module-resolver',
    {
      alias: {
        src: './src',
        '@assets': './src/assets',
        '@components': './src/components',
        '@constants': './src/constants',
        '@hooks': './src/hooks',
        '@navigation': './src/navigation',
        '@screens': './src/screens',
        '@services': './src/services',
        '@utils': './src/utils',
      },
    },
  ],
  ['nativewind/babel'],
];

module.exports = {
  presets,
  plugins,
};
