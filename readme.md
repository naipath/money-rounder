# Money rounder

This browser extension rounds money.

To prevent you from being influenced by deceptive price adjustments, this browser plugin rectifies the prices shown.

For example:

![before](before.png)
![after](after.png)

| Input | Output    |
|-------|-----------|
| 4.99  | € 5.00    |
| 9.99  | € 10.00   |
| 99    | € 100.00  |
| 239   | € 240.00  |
| 1999  | € 2000.00 |

## Getting started

```shell
npm run start
```

Then load the dist package in your browser.

## Current supported websites

- [https://www.coolblue.nl](https://www.coolblue.nl)
- [https://tweakers.net/](https://tweakers.net/)
- [https://www.bol.com](https://www.bol.com)
- [https://www.logitech.com](https://www.logitech.com)

## Building

```shell
npm run build:firefox
npm run build:chrome
```

## Testing

```shell
npm run test
```

## Installing in the browser

### Firefox

1. Go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
2. Click "Load temporary Add-on..."
3. Select the file `./manifest.json`

### Chrome

1. Go to [extensions](chrome://extensions/)
2. Click "Load unpacked"
3. Select the folder for this project.
