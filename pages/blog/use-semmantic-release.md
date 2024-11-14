---
title: 'Notes to use semantic release'
date: 2024/11/13
description: Annotations from how to use and create a semantic release versioning
tags: ['Blog Post', 'Semantic Release']
type: 'post'
author: 'Yan Fernandes'
---

## Introdução. 

Este documento deve servir de base para o versionamento semantico e de releases utilizado nos projetos da FESF. Entretanto, é importante ressaltar que o versionamento semantico é uma prática que pode ser utilizada em qualquer projeto, independente do tamanho ou complexidade.

## O que é o versionamento semântico?
> Versionamento Semântico, em inglês “Semantic Versioning”, é um padrão de regras para manter um acompanhamento de versões no desenvolvimento de códigos. Um modelo geral que todas as pessoas usuárias podem entender e utilizar.

## Regras do versionamento semântico

### Formato do Número de Versão

O número de versão **DEVE** seguir o formato `vX.Y.Z`, onde:
- **X** = versão principal
- **Y** = versão secundária
- **Z** = versão de correção

Cada parte **DEVE** aumentar numericamente, sem zeros à esquerda.

### Tipos de Versão

- **Versão de Correção (Z):** Incrementada para correções compatíveis com versões anteriores.
- **Versão Secundária (Y):** Incrementada para novas funcionalidades compatíveis com versões anteriores ou obsolescência de funcionalidades.
- **Versão Principal (X):** Incrementada para mudanças incompatíveis com versões anteriores.

### Versões Pré-Lançamento

Podem ser indicadas com um hífen após a versão de correção, e têm precedência inferior à versão normal. **Exemplos:** `v1.0.0-alpha`, `v1.0.0-alpha.1`.

### Metadados de Construção

Podem ser adicionados após a versão, precedidos por um sinal de mais. Não afetam a precedência. **Exemplo:** `v1.0.0-alpha+001`.

### Precedência de Versão

A precedência **DEVE** ser calculada com base na comparação numérica dos identificadores da versão (principal, secundária, de correção e pré-lançamento). Versões pré-lançamento têm precedência inferior à versão normal.

**Exemplos:**
- `v1.0.0 < 2.0.0`
- `v1.0.0-alpha < 1.0.0`

## Criando uma Nova Release no GitHub

### 1. Navegue até o Repositório
- No GitHub, acesse a `página principal` do repositório.
- À direita da lista de arquivos, clique em `Releases`.

### 2. Inicie uma Nova Release
- Na parte superior da página, clique em `Draft a new release`.

### 3. Escolha uma Tag para a Release
- Clique no menu suspenso `Choose a tag`:
  - Para usar uma `tag existente`, clique na tag desejada.
  - Para criar uma `nova tag`, digite um número de versão para a release e clique em
 `Create new tag`.
- Se você criou uma nova tag, selecione o menu `Target` e clique na branch que contém o projeto que você deseja lançar.

### 4. Defina a Tag Anterior (Opcional)
- Acima do campo de descrição, selecione o menu suspenso `Previous tag`  e clique na tag que identifica a release anterior.

### 5. Preencha o Título da Release
- No campo `Release title`, insira um título para a sua release.

### 6. Gere Notas de Release
- Acima do campo de descrição, clique em `Generate release notes`.
- Verifique as notas geradas para garantir que elas incluam todas (e somente) as informações desejadas.

### 7. Incluir Arquivos Binários (Opcional)
- Para incluir arquivos binários, como programas compilados, arraste e solte ou selecione manualmente os arquivos na caixa `binaries`.

### 8. Caso seja uma versão Beta/Alpha deve-se marcar como Pré-Release.
- Para avisar aos usuários que a release não está pronta para produção e pode ser instável, selecione `This is a pre-release`.

### 9. Definir como Última Release (Opcional)
- Selecione `Set as latest release`. Caso não selecione, o rótulo será atribuído automaticamente com base no versionamento semântico.

### 11. Publicar ou Salvar Rascunho da Release
- Para publicar sua release, clique em `Publish release`.
- Para trabalhar na release mais tarde, clique em `Save draft`.

> **Nota:** Após salvar ou publicar, você pode visualizar suas releases no feed de releases do repositório.

Para mais informações, consulte [Viewing your repository's releases and tags](#).

## Bookmarks

[Semantic Release](https://semantic-release.gitbook.io/semantic-release/)

[Semantic Versioning](https://semver.org/)
