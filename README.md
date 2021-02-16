# Bug repro of next.js issue with webpack 5 lazy compilation

When lazy compilation is enabled with next.js you need to request the page 3 times in order to be rendered properly.

## Background

Lazy compilation is a new feature of webpack 5, added recently with this PR: https://github.com/webpack/webpack/pull/12469.

`lib/some-module.js` has a syntax error on purpose, to be able to realize faster if the module was compiled or not.

```
error - ./lib/some-module.js:3:33
Syntax error: Unterminated template

  1 | export const someNumber = 5;
  2 |
> 3 | console.log('Module loaded');asd`
    |                                  ^
  4 |
```

## Current behavior

1. Execute `yarn dev`.
1. Open home page http://localhost:3004/.
1. Request of home page is never responded.
1. Log `Hot Module Replacement is not enabled. Waiting for process restart...` appears 3 times.
1. Request again the home page.
1. Blank empty page is loaded.
1. Request again the home page.
1. Home page is properly loaded.

## Expected behavior

1. Execute `yarn dev`.
1. Open home page http://localhost:3004/.
1. Home page is properly loaded.
