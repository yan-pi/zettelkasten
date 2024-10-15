---
title: 'Learn Rust with Web3 Devs - Criando primeiro Modulo: Balances'
date: 2024/08/12
description: 'Section 1 - Lesson 1'
tags: ['Zettelkasten', 'Rust', 'Web3', 'Blockchain']
type: 'post'
author: 'Yan Fernandes'
---

## Criando primeiro Modulo: Balances

### Lição 1 - Balances Pallet

Dentro da Polkadot utilizamos o conceito de modulos para organizar o código. O primeiro módulo que iremos criar é o
`Balances`, que será responsável por gerenciar os saldos das contas.

Podemos verificar essa abordagem olhando para o
[repositorio da polkadot-SDK](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame), onde temos a
estrutura de diretórios e arquivos organizados em modulos dos `Pallets` da Polkadot.

```shell
touch balances.rs
```

```rust
// balances.rs
pub struct Pallet {}
```

podemos importar o modulo da seguinte maneira:

```rust
// main.rs
mod balances;
```

> Rodando o codigo com `cargo run` teremos um warning, pois não estamos utilizando o modulo `balances` ainda.

```shell
➜  learn-rust-web3 git:(main) ✗ cargo run
   Compiling learn-rust-web3 v0.1.0 (/home/yan/Documentos/Repository/learn-rust-web3)
warning: struct `Pallet` is never constructed
 --> src/balances.rs:1:12
  |
1 | pub struct Pallet {}
  |            ^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: `learn-rust-web3` (bin "learn-rust-web3") generated 1 warning
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.21s
     Running `target/debug/learn-rust-web3`
Hello, world!
``

```