---
title: 'Learn Rust with Web3 Devs - Criando o system pallet'
date: 2024/11/24
description: 'Section 2 - Lesson 1'
tags: ['Zettelkasten', 'Rust', 'Web3', 'Blockchain']
type: 'post'
author: 'Yan Fernandes'
---

## Criando o system pallet
Na section anterior criamos o modulo que a maioria dos usuarios vai interagir, o `Balances`. Agora vamos criar o `System`, que é o modulo que gerencia a parte de sistema da nossa blockchain.

### O que é o System pallet?

O `System` é um pallet que gerencia a parte de sistema da nossa blockchain. Ele é responsável por gerenciar a parte de sistema da nossa blockchain, como por exemplo, a parte de identificação de contas, a parte de armazenamento de dados, a parte de gerenciamento de eventos, a parte de gerenciamento de extrinsecos e a parte de gerenciamento de armazenamento de dados. 

primeiro vamos criar um arquivo dentro de `src/system.rs` que contem:

```shell
use std::collections::BTreeMap;

pub struct Pallet {
    block_number: u32,
    nonce: BTreeMap<String, u32>,
}

impl Pallet {
    pub fn new() -> Self {
        Pallete {
            block_number: 0,
            nonce: BTreeMap::new(),
        }
    }
}
```
