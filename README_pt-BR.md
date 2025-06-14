# 🚀 Bun FFI Example

Este é um projeto de exemplo que demonstra a integração entre Rust e JavaScript usando FFI (Foreign Function Interface) com o runtime Bun.

- 🇺🇸 Looking for somenthing in english? See this [README](https://github.com/dark1zinn/bun-ffi/blob/main/README.md).

## 📋 Descrição

Este projeto mostra como:
- 🦀 Usar código Rust em JavaScript
- ⚡ Aproveitar o poder do Bun para FFI
- 🔧 Compilar bibliotecas nativas
- 🧪 Testar a integração

## 🛠️ Pré-requisitos

- [Bun](https://bun.sh) instalado
- [Rust](https://www.rust-lang.org/tools/install) instalado
- Cargo (vem com Rust)

## 📥 Instalação

```bash
bun install
```

## 🎯 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `bun dev` | 🔄 Atualiza dependências e roda os testes |
| `bun build-rs` | 🦀 Compila o código Rust |
| `bun up` | 🏗️ Executa o build completo (Rust + JS) |

## 🚀 Como Usar

1. Clone o repositório
2. Instale as dependências:
```bash
bun install
```

3. Execute o build completo:
```bash
bun up
```

4. Para desenvolvimento:
```bash
bun dev
```

## 🏗️ Estrutura do Projeto

```
📦 bun-ffi
 ┣ 📂 rust          # Código Rust
 ┣ 📂 src           # Código TypeScript
 ┣ 📂 dist          # Arquivos compilados
 ┗ 📜 bun_build.js  # Script de build
```

## 🤝 Contribuindo

Sinta-se à vontade para abrir issues e pull requests!

## 📝 Licença

[MIT](https://github.com/dark1zinn/bun-ffi?tab=MIT-1-ov-file)

---
⭐ Se este projeto foi útil para você, considere dar uma estrela!