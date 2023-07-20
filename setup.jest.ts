import 'jest-preset-angular/setup-jest';

const config = {
  transform: {
    '^.+\\.ts?$': ['ts-jest', {}],
  },

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};

module.exports = config;
