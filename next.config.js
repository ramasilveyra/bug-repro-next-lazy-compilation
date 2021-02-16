module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.experiments = {
        ...config.experiments,
        lazyCompilation: {
          entries: true,
        },
      };
    }
    return config;
  },
};
