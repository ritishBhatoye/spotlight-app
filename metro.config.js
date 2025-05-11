/* eslint-env node */
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const baseConfig = getDefaultConfig(__dirname);

const config = withNativeWind(baseConfig, {
  input: "./global.css", // or wherever your NativeWind styles are
});

module.exports = config;
