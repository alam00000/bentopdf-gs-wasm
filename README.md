# @bentopdf/gs-wasm

Ghostscript compiled to WebAssembly for BentoPDF.

## Installation

```bash
npm install @bentopdf/gs-wasm
```

## Usage

```typescript
import { loadGhostscript } from '@bentopdf/gs-wasm';

const gs = await loadGhostscript();

// Use Ghostscript for PDF processing
```

## Features

-  Fully client-side PDF processing
- PDF/A conversion support
- No server uploads required - all processing happens in the browser

## Building

```bash
npm install
npm run build
```

## License

This project is licensed under the [AGPL-3.0](LICENSE) license.

Ghostscript is © Artifex Software, Inc. and licensed under AGPL-3.0.
