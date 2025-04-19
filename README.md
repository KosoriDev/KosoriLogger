# KosoriLogger

## What is this?

- KosoriLogger is a detailed logging library for Node.js. It's designed to be the replacement for `console.log` and `console.error`.

## Installation

```bash
npm install kosorilogger
```

## Usage

```javascript
const KosoriLogger = require('kosorilogger');
```

OR, if you use ESM

```typescript
import KosoriLogger from 'kosorilogger';
```

## Example

```javascript
import Logger from 'kosorilogger';

Logger.Log('Hello, World!');
```

Results in:

```bash
ℹ️  Sat, 4 Jun 1989 00:00:00 GMT | Hello, World!
```