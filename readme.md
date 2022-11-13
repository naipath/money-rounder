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

## Current supported websites

- [https://www.coolblue.nl](https://www.coolblue.nl)
- [https://tweakers.net/](https://tweakers.net/)
- [https://www.bol.com](https://www.bol.com)
- [https://www.logitech.com](https://www.logitech.com)

## Building

```shell
npm run build
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
