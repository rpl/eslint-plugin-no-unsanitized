/**
 * @fileoverview Helpers used in actual test files
 * @author Frederik Braun et al.
 * @copyright 2015-2017 Mozilla Corporation. All rights reserved
 */

const PATH_TO_BABEL_ESLINT = `${process.cwd()}/node_modules/@babel/eslint-parser/`;
const PATH_TO_TYPESCRIPT_ESLINT = `${process.cwd()}/node_modules/@typescript-eslint/parser/`;

const parseWithBabelFlow = {
  parser: PATH_TO_BABEL_ESLINT,
  parserOptions: { 
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-flow"],
    },
  }
};

const parseWithBabelPresetEnv = {
  parser: PATH_TO_BABEL_ESLINT,
  parserOptions: { 
    requireConfigFile: false,
    babelOptions: {
      presets: [["@babel/preset-env", { "targets": { "node": "14" } }]],
    },
    ecmaFeatures: { logicalAssignment: true },
  },
};

module.exports = {
  PATH_TO_BABEL_ESLINT,
  PATH_TO_TYPESCRIPT_ESLINT,
  parseWithBabelFlow,
  parseWithBabelPresetEnv,
};
