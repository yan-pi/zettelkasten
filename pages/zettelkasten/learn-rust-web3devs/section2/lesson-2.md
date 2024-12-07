---
title: 'Learn Rust with Web3 Devs - Tornando o sistema funcional'
date: 2024/11/24
description: 'Section 2 - Lesson 2'
tags: ['Zettelkasten', 'Rust', 'Web3', 'Blockchain']
type: 'post'
author: 'Yan Fernandes'
---

## Tornando o sistema funcional

Na seção anterior criamos o modulo `System`, que é responsável por gerenciar a parte de sistema da nossa blockchain. Agora vamos tornar o sistema funcional.

### Número do Bloco

O numero de bloco é um valor que representa a posição de um bloco na blockchain. O `System` é responsável por gerenciar o numero de bloco da nossa blockchain. Vamos adicionar um método que retorna o numero de bloco atual.


```Rust
// src/system.rs

use std::collections::BTreeMap;

pub struct Pallet {
    block_number: u32,
    nonce: BTreeMap<String, u32>,
}

impl Pallet {
    pub fn new() -> Self {
        Self {
            block_number: 0,
            nonce: BTreeMap::new(),
        }
    }

    pub fn block_number(&self) -> u32 {
        self.block_number
    }

    pub fn inc_block_number(&mut self) {
        self.block_number += 1;
    }
}
```

### Nonce

O `nonce` é um valor que é utilizado para garantir a ordem de execução das transações. O `System` é responsável por gerenciar o `nonce` da nossa blockchain. Nesse contexto, cada usuário tem um `nonce` que é incrementado a cada transação que ele faz. Lembrando que Blockchain são redes descentralizadas, então cada usuário tem um `nonce` diferente.

Para isso podemos utilizar um `BTreeMap` que é uma estrutura de dados que armazena os dados em ordem de inserção. Vamos adicionar um método que retorna o `nonce` de um usuário e um método que incrementa o `nonce` de um usuário.

```Rust


```


### Matemática Segura

A matemática segura é um conceito que é utilizado para garantir que as operações matemáticas são seguras. O `System` é responsável por garantir que as operações matemáticas são seguras. Impossibilitando que um usuário faça uma operação matemática que resulte em `overflow` ou `underflow`.

Para isso podemos fazer com que os itens de armazenamento `block_number` e `nonce` so forneçam APIs para incrementar em um. No nosso sistema, ambos essesnúmeros são representados por `u32`, então precisariamos de pelo menos `2^32` operações para causar um `overflow` ou `underflow`.

> Assumindo que um usuário faça uma transação a cada bloco e que um novo bloco seja gerado a cada 6 segundos, levaria mais de 800 anos para que ocorresse um overflow. Então, nesta situação, estamos preferindo uma API que não requer tratamento de erros em vez de uma que o faça.
