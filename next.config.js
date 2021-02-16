module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.experiments = {
        ...config.experiments,
        lazyCompilation: {
          imports: true,
        },
      };
    }
    return config;
  },
};
