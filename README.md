# 🚀 Bun FFI Example

A sample project demonstrating integration between Rust and JavaScript using FFI (Foreign Function Interface) with the Bun runtime.

- 🇧🇷 Procurando algo em Português? Veja este [README](https://github.com/dark1zinn/bun-ffi/blob/main/README_pt-BR.md).

## 📋 Description

This project shows how to:
- 🦀 Use Rust code in JavaScript
- ⚡ Leverage Bun's power for FFI
- 🔧 Compile native libraries
- 🧪 Test the integration

## 🛠️ Prerequisites

- [Bun](https://bun.sh) installed
- [Rust](https://www.rust-lang.org/tools/install) installed
- Cargo (comes with Rust)

## 📥 Installation

```bash
bun install
```

## 🎯 Available Scripts

| Command | Description |
|---------|-----------|
| `bun dev` | 🔄 Updates dependencies and runs tests |
| `bun build-rs` | 🦀 Compiles Rust code |
| `bun up` | 🏗️ Executes complete build (Rust + JS) |

## 🚀 How to Use

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Run complete build:
```bash
bun up
```

4. For development:
```bash
bun dev
```

## 🏗️ Project Structure

```
📦 bun-ffi
 ┣ 📂 rust          # Rust code
 ┣ 📂 src           # TypeScript code
 ┣ 📂 dist          # Compiled files
 ┗ 📜 bun_build.js  # Build script
```

## 🤝 Contributing

Feel free to open issues and pull requests!

## 📝 License

[MIT](https://github.com/dark1zinn/bun-ffi?tab=MIT-1-ov-file)

---
⭐ If this project was helpful to you, consider giving it a star!