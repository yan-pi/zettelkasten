---
title: 'Learn Rust with Web3 Devs - Transferencia De Saldo'

description: 'Section 1 - Lesson 5'
tags: ['Zettelkasten', 'Rust', 'Web3', 'Blockchain']
type: 'post'
author: 'Yan Fernandes'
---

## Transferencia de saldos

A transferência de saldo* precisa, necessariamente, de um entendimento de como a blockchain funciona e de como essas transferências utilizam matemática segura para realizar as operações.

Tive alguns problemas com o código em si. Acho que posso ter me perdido em algum momento, mas acredito que o código abaixo esteja correto.

Como mencionei no arquivo index dessas anotações, estou aprendendo Rust e tendo meu primeiro contato com a linguagem. Este Zettelkasten tem o objetivo de mostrar meu aprendizado e armazenar as notas, e não apenas repostar o tutorial da Web3Devs.

## Exercícios

1. Crie uma função de transferência segura e simples no seu Pallet de Saldos.
2. Crie um teste mostrando que tudo está funcionando conforme o esperado, incluindo o tratamento de erros.

No `balances.rs`:

```rust
impl Pallet {
    /// ... código anterior.

    /// Transfere `amount` de uma conta para outra.
    /// Esta função verifica se `caller` tem pelo menos `amount` de saldo para transferir,
    /// e se não ocorrem overflow/underflow matemáticos.
    pub fn transfer(
        &mut self,
        caller: String,
        to: String,
        amount: u128,
    ) -> Result<(), &'static str> {
        /* TODO:
            - Obter o saldo da conta `caller`.
            - Obter o saldo da conta `to`.
            - Usar matemática segura para calcular um `new_caller_balance`.
            - Usar matemática segura para calcular um `new_to_balance`.
            - Inserir o novo saldo de `caller`.
            - Inserir o novo saldo de `to`.
        */

        Ok(())
    }
}
```

Tambem no `balances.rs`:

```rust
mod tests {
     /// ... código anterior.

    #[test]
    fn transfer_balance() {
        /* TODO: Crie um teste que verifique o seguinte:
            - Que `alice` não pode transferir fundos que ela não possui.
            - Que `alice` pode transferir fundos para `bob` com sucesso.
            - Que o saldo de `alice` e `bob` esteja atualizado corretamente.
        */
    }
}
```

Meu codigo pessoalmente ficou da seguinte forma: 

A função `transfer` é o coração do sistema de transferências dentro dessa simulação de blockchain. Ela usa várias características do Rust, como controle de erros, manipulação segura de valores e imutabilidade, para garantir que as transferências de saldo entre contas sejam feitas corretamente e sem riscos de bugs comuns, como estouro de valores (`overflow`) ou subtração abaixo de zero. Vou detalhar como essa função explora o Rust para garantir uma implementação eficiente e segura.

### Estrutura da Função `transfer`

A função `transfer` recebe três parâmetros:

- `caller`: A conta que está enviando o saldo.
- `to`: A conta que está recebendo o saldo.
- `amount`: O valor a ser transferido.

A lógica da função verifica se o saldo do `caller` é suficiente e atualiza os saldos de ambas as contas, enquanto evita erros de overflow e underflow.

#### Assinatura da Função

```rust
pub fn transfer(
    &mut self, 
    caller: String,
    to: String,
    amount: u128,
) -> Result<(), &'static str>
```

- **`&mut self`**: A função modifica o estado interno do `Pallet`, ou seja, os saldos das contas. Por isso, recebe uma referência mutável para `self`.
- **Retorno**: Usa o tipo `Result<(), &'static str>`, que é uma maneira comum em Rust de indicar sucesso (`Ok(())`) ou erro (`Err`), com uma mensagem de erro associada.

### Passos da Função

#### 1. Obtenção dos Saldos das Contas

Primeiro, a função obtém os saldos das contas de `caller` e `to` usando o método `get_balance`, que retorna `0` se a conta ainda não existir no mapa.

```rust
let caller_balance = self.get_balance(caller.clone());
let to_balance = self.get_balance(to.clone());
```

O uso de `clone()` é necessário aqui porque `caller` e `to` são strings, e strings em Rust não implementam a trait `Copy` (não são tipos de dados triviais como inteiros), então precisamos cloná-los para que os valores possam ser reutilizados mais tarde.

#### 2. Verificação de Saldos com Segurança

Aqui usamos duas verificações importantes:

- **Subtração segura (`checked_sub`)**: A função verifica se o saldo do `caller` é suficiente para cobrir o valor da transferência. Se a subtração resultar em um valor negativo, a função retorna um erro de "Saldo Insuficiente".
  
- **Adição segura (`checked_add`)**: A função verifica se o saldo da conta receptora pode ser atualizado sem ocorrer overflow (estouro de capacidade). Se a adição resultar em um valor maior do que o `u128` pode armazenar, retorna um erro de "Overflow".

```rust
let new_caller_balance = caller_balance.checked_sub(amount).ok_or("Insufficient balance")?;
let new_to_balance = to_balance.checked_add(amount).ok_or("Overflow")?;
```

Esses métodos (`checked_sub` e `checked_add`) são funções embutidas nos tipos numéricos do Rust que retornam uma `Option`. Se a operação for bem-sucedida, retorna `Some(resultado)`. Se falhar (por exemplo, por underflow ou overflow), retorna `None`. Usando a função `ok_or()`, podemos transformar o `None` em um erro com uma mensagem específica.

#### 3. Atualização dos Saldos

Se as verificações forem bem-sucedidas, a função atualiza o saldo de `caller` e `to` no `BTreeMap`.

```rust
self.balances.insert(caller, new_caller_balance);
self.balances.insert(to, new_to_balance);
```

Aqui, estamos atualizando o mapa de saldos inserindo os novos valores calculados.

#### 4. Retorno

Se tudo der certo, a função retorna `Ok(())` para indicar que a transferência foi realizada com sucesso.

```rust
Ok(())
```

### Exploração do Rust na Função `transfer`

- **Segurança de Subtração e Adição**: A utilização das funções `checked_sub` e `checked_add` é uma boa prática em Rust, pois evita problemas de overflow e underflow. Esses tipos de verificações automáticas garantem que o código seja mais seguro, sem a necessidade de tratamentos de erros manuais complexos.
  
- **Sistema de Tipagem Rigoroso**: Rust tem um sistema de tipos forte e rígido. Usar `u128` para os saldos garante que possamos representar grandes valores (até 340 undecilhões) sem nos preocuparmos com o estouro, a não ser que isso seja explicitamente verificado com `checked_add` e `checked_sub`.

- **Gerenciamento de Erros com `Result`**: O uso de `Result` permite que a função expresse claramente os possíveis resultados: sucesso (`Ok`) ou erro (`Err`). Em Rust, isso evita o uso de exceções e torna o fluxo de controle mais explícito e previsível.

- **Imutabilidade por Padrão**: Em Rust, as variáveis são imutáveis por padrão. O uso de `&mut self` garante que a função possa modificar o estado interno, mas esse comportamento é explícito. Sem a mutabilidade, a função não conseguiria alterar os saldos no `BTreeMap`.

### Testes

Os testes garantem que a função `transfer` funcione conforme esperado.

#### 1. Teste de Transferência Simples

```rust
#[test]
fn transfer_balance() {
    let mut balances = Pallet::new();
    balances.set_balance("Yan".to_string(), 20);

    assert_eq!(
        balances.transfer("Yan".to_string(), "Bruna".to_string(), 10),
        Ok(())
    );
    assert_eq!(balances.get_balance("Yan".to_string()), 10);
    assert_eq!(balances.get_balance("Bruna".to_string()), 10);
}
```

Aqui, o teste verifica:

- Se a função `transfer` retorna `Ok(())` quando a transferência é bem-sucedida.
- Se o saldo do `caller` (Yan) foi devidamente reduzido.
- Se o saldo do `to` (Bruna) foi atualizado corretamente.

#### 2. Testes de Condições de Erro

Podemos adicionar testes para garantir que os erros sejam tratados adequadamente, como quando a conta `caller` não tem saldo suficiente ou quando ocorre um overflow.

```rust
#[test]
fn transfer_insufficient_balance() {
    let mut balances = Pallet::new();
    balances.set_balance("Yan".to_string(), 5);

    assert_eq!(
        balances.transfer("Yan".to_string(), "Bruna".to_string(), 10),
        Err("Insufficient balance")
    );
}

#[test]
fn transfer_overflow() {
    let mut balances = Pallet::new();
    balances.set_balance("Yan".to_string(), u128::MAX);
    balances.set_balance("Bruna".to_string(), u128::MAX);

    assert_eq!(
        balances.transfer("Yan".to_string(), "Bruna".to_string(), 1),
        Err("Overflow")
    );
}
```

### Conclusão

A função `transfer` é uma ótima demonstração das capacidades do Rust em lidar com problemas comuns de sistemas financeiros, como overflow, underflow e gestão de erros, de forma segura e eficiente. O sistema de tipos do Rust, junto com suas funções de verificação seguras (`checked_sub`, `checked_add`), tornam a implementação robusta e menos propensa a bugs. O uso de `Result` para manipulação de erros também torna o código mais fácil de seguir e testar.