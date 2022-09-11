module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['inline-react-svg', "module:react-native-dotenv"],
  };
};
