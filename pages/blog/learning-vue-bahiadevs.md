---
title: 'Como começar com Vue.js - Encontro Bahia Devs'
date: 2024/08/19
description: 'Estas são minhas notas de uma apresentação sobre Vue.js que tive no open-coding semanal do Bahia Devs.'
category: ['Programming', 'Vuejs', 'JavaScript', 'Frontend']
type: 'post'
author: 'Yan Fernandes'
---

## O que é Vue.js?

---

Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário. Foi projetado para ser flexível
e adotado de forma incremental, o que significa que você pode usar apenas o que precisar. É possível integrar Vue em
projetos já existentes ou usá-lo para criar aplicações completas, como SPAs (Single Page Applications).

## Contexto Histórico

---

**Criado por:** Evan You <- Mesmo criador do [Vite](https://vitejs.dev/)

**Lançado em:** Fevereiro de 2014

**Contexto:** Evan You trabalhava no Google usando AngularJS em diversos projetos. Ele sentiu a necessidade de criar
algo mais leve e flexível, pegando as partes que mais gostava do Angular e simplificando o que considerava complexo ou
pesado.

## O que faz o Vue.js ser Diferente?

---

1. **Curva de aprendizado suave:** Vue é fácil de aprender, especialmente para quem já conhece HTML, CSS e JavaScript.

2. **Flexibilidade e escalabilidade:** Você pode usar Vue para projetos pequenos ou grandes, ajustando sua arquitetura
   conforme a necessidade.

3. **Desempenho otimizado:** Vue é rápido e eficiente, com uma arquitetura reativa que garante atualizações automáticas
   da interface quando os dados mudam.

4. **Ecossistema rico, mas não opressor:** O ecossistema Vue é poderoso e inclui ferramentas como Vue Router, Vuex e o
   Vue CLI, mas você pode optar por usá-los conforme necessário.

5. **Documentação excelente:** A documentação do Vue é clara e abrangente, facilitando o aprendizado e a implementação
   de novas funcionalidades.

   ![[Pasted image 20240815200949.png]]

## API's do Vue: Options API vs. Composition API

---

Ao desenvolver componentes Vue, você pode optar por duas abordagens principais: **Options API** e **Composition API**.
Ambas são poderosas e suportam casos de uso comuns, mas possuem diferenças que influenciam a maneira como você estrutura
e organiza seu código.

### Options API

---

A **Options API** é a abordagem mais tradicional e amplamente utilizada em Vue.js, especialmente em versões anteriores à
3.0. Com essa API, você define a lógica do componente utilizando um objeto de opções, como `data`, `methods`, e
`mounted`. As propriedades definidas nas opções são expostas dentro de funções através de `this`, que faz referência à
instância do componente.

**Exemplo de Options API:**

```vue
<script>
export default {
  // Dados reativos expostos por meio de `this`
  data() {
    return {
      count: 0,
    };
  },

  // Métodos para manipulação de estado e que disparam atualizações
  methods: {
    increment() {
      this.count++;
    },
  },

  // Hooks de ciclo de vida
  mounted() {
    console.log(`O valor inicial é ${this.count}.`);
  },
};
</script>

<template>
  <button @click="increment">O valor é: {{ count }}</button>
</template>
```

**Vantagens da Options API:**

- **Facilidade de uso:** A Options API é intuitiva, especialmente para iniciantes, e organiza o código de maneira clara
  e estruturada.
- **Modelo mental OOP:** Alinha-se bem com a mentalidade orientada a objetos, sendo mais próxima de uma classe onde
  `this` faz referência à instância do componente.

**Quando usar a Options API?**

- Quando você não está usando ferramentas de build (PWAS) ou planeja usar Vue principalmente para cenários de baixa
  complexidade.
- Quando a clareza e a simplicidade na organização do código são prioridades, como em projetos pequenos ou para
  iniciantes.

### Composition API

A **Composition API** foi introduzida no Vue 3 e permite que você defina a lógica do componente usando funções
importadas. Em componentes de arquivo único (SFCs), a Composition API é frequentemente utilizada com a diretiva
`<script setup>`, que permite escrever código com menos boilerplate.

**Exemplo de Composition API com `<script setup>`:**

```vue
<script setup>
import { ref, onMounted } from 'vue';

// Estado reativo
const count = ref(0);

// Funções que manipulam o estado e disparam atualizações
function increment() {
  count.value++;
}

// Hooks de ciclo de vida
onMounted(() => {
  console.log(`O valor inicial é ${count.value}.`);
});
</script>

<template>
  <button @click="increment">O valor é: {{ count }}</button>
</template>
```

**Vantagens da Composition API:**

- **Flexibilidade:** Permite a composição de lógica de estado reativo de múltiplas funções, o que facilita a
  reutilização e organização de código complexo.
- **Poderoso para aplicações grandes:** A flexibilidade e a modularidade da Composition API a tornam ideal para projetos
  grandes e complexos.

**Quando usar a Composition API?**

- Quando você planeja construir aplicações completas com Vue, especialmente usando ferramentas de build modernas.
- Quando você precisa de padrões mais poderosos para organizar e reutilizar lógica em projetos complexos.

### Qual Escolher?

Ambas as APIs têm suas vantagens, e a escolha depende do contexto e da complexidade do seu projeto:

- **Para aprendizado:** Escolha a que parecer mais intuitiva para você. A maioria dos conceitos centrais são
  compartilhados entre as duas.
- **Para produção:**
  - Use **Options API** se você não está utilizando ferramentas de build ou se o projeto é de baixa complexidade.
  - Use **Composition API** + **Single-File Components** se você está construindo aplicações completas e complexas.

### Exemplos e Comparações

Aqui está um comparativo entre as duas APIs usando o mesmo exemplo de componente:

**Options API:**

```vue
<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverter Mensagem</button>
  </div>
</template>
```

**Composition API:**

```vue
<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');

function reverseMessage() {
  message.value = message.value.split('').reverse().join('');
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverter Mensagem</button>
  </div>
</template>
```

### Recomendações Gerais

- **Para projetos novos:** Considere iniciar com a **Composition API** se planeja escalar a aplicação. No entanto, a
  **Options API** continua sendo uma excelente escolha, especialmente para projetos menos complexos.
- **Para quem já usa Options API:** Não há necessidade de migrar imediatamente para a Composition API, mas vale a pena
  aprender e considerar seu uso em novos projetos ou quando a flexibilidade adicional for benéfica.

Esses tópicos cobrem as principais diferenças e usos das APIs do Vue, permitindo que você escolha a abordagem que melhor
se adapta ao seu projeto e nível de experiência.

## SFC (Single File Components)

---

Um dos grandes diferenciais do Vue é o conceito de **Single File Components (SFCs)**. Esses componentes combinam o
template, o script e o estilo em um único arquivo `.vue`, facilitando a modularização e a organização do código.

**Exemplo de um SFC:**

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
```

## Data Binding

---

O Vue.js permite a ligação bidirecional de dados (two-way data binding), que sincroniza automaticamente os dados do
modelo (JavaScript) com a interface (HTML).

**Exemplo:**

```html
<div id="app">
  <input v-model="message" />
  <p>{{ message }}</p>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
    },
  });
</script>
```

## Lifecycle Hooks

---

O Vue.js possui um ciclo de vida de componente que oferece hooks que permitem executar código em diferentes momentos do
ciclo de vida de um componente.

**Principais hooks:**

- `created`: Chamado após a instância ser criada.
- `mounted`: Chamado após a instância ser montada no DOM.
- `updated`: Chamado após uma atualização reativa.
- `destroyed`: Chamado após a instância ser destruída.

**Exemplo:**

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  created() {
    console.log('Componente criado!');
  },
  mounted() {
    console.log('Componente montado no DOM!');
  },
});
```

## Diretivas

---

Vue.js oferece uma série de diretivas que permitem manipular o DOM de forma declarativa.

**Algumas das principais diretivas:**

- `v-if`: Renderiza o elemento condicionalmente.
- `v-for`: Itera sobre uma coleção de dados.
- `v-bind`: Liga um atributo do HTML a uma expressão.
- `v-on`: Liga eventos DOM a métodos.
- `v-model`: Ligação bidirecional de dados.

**Exemplo:**

```html
<div id="app">
  <p v-if="isVisible">Este texto é visível.</p>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
  <input v-model="message" />
  <button v-on:click="showAlert">Mostrar Alerta</button>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      isVisible: true,
      items: ['Item 1', 'Item 2', 'Item 3'],
      message: 'Hello Vue!',
    },
    methods: {
      showAlert() {
        alert(this.message);
      },
    },
  });
</script>
```

## Reatividade

Vue.js é reativo, o que significa que ele detecta mudanças nos dados e atualiza a interface automaticamente.

**Exemplo:**

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    count: 0,
  },
});

// Atualizar count incrementa automaticamente a exibição
vm.count++;
```

## Props & Events

**Props:** São usadas para passar dados de um componente pai para um filho.

**Events:** São usados para comunicação de volta do componente filho para o pai.

**Exemplo:**

```vue
<!-- Componente Pai -->
<template>
  <div>
    <child-component :message="parentMessage" @child-event="handleEvent"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  data() {
    return {
      parentMessage: 'Hello from Parent',
    };
  },
  methods: {
    handleEvent(payload) {
      console.log('Evento recebido do filho:', payload);
    },
  },
  components: {
    ChildComponent,
  },
};
</script>

<!-- Componente Filho -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="emitEvent">Emitir Evento</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    emitEvent() {
      this.$emit('child-event', 'Hello from Child');
    },
  },
};
</script>
```

## HTTP Requests

Para fazer requisições HTTP, o Vue.js pode ser usado com bibliotecas como Axios ou a Fetch API.

**Exemplo usando Axios:**

```javascript
import axios from 'axios';

new Vue({
  el: '#app',
  data: {
    posts: [],
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.error('Erro ao buscar posts:', error);
      });
  },
});
```

## Template

O sistema de templates do Vue.js é baseado em HTML, com suporte para interpolações e diretivas.

**Exemplo:**

```html
<div id="app">
  <p>{{ message }}</p>
  <p>{{ reversedMessage }}</p>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse().join('');
      },
    },
  });
</script>
```

## Provide/Injec

---

**Provide/Inject** permite passar dados de um componente pai para um descendente profundo, evitando o encadeamento de
props.

**Exemplo:**

```javascript
Vue.component('provider', {
  provide() {
    return {
      sharedData: 'Data compartilhada',
    };
  },
  template: '<child-component></child-component>',
});

Vue.component('child-component', {
  inject: ['sharedData'],
  template: '<p>{{ sharedData }}</p>',
});

new Vue({
  el: '#app',
});
```

## Construindo Aplicações Grandes

---

Para grandes aplicações, é recomendável adotar uma arquitetura modular. Isso inclui:

1. **Organização por módulos:** Dividir a aplicação em módulos organizados por funcionalidade.

2. **Uso de Vuex ou Pinia para gerenciamento de estado:** Vuex é a solução oficial de Vue.js para gerenciamento de
   estado centralizado, ideal para aplicações maiores onde o estado precisa ser compartilhado entre muitos componentes.

3. **Roteamento com Vue Router:** O Vue Router facilita a navegação entre diferentes páginas e componentes.

4. **Componentização:** Componentes reutilizáveis ajudam a manter o código organizado e modular.

5. **Lazy loading:** Carregamento assíncrono de módulos e componentes para otimizar o desempenho.

6. **Testes:** Implementar testes unitários e de integração para garantir a qualidade do código.

7. **Uso de TypeScript (Recomendação):** TypeScript ajuda a adicionar tipagem estática, o que facilita a manutenção e
   detecção de erros.

**Exemplo de Arquitetura Modular:**

---

```plaintext
src/
  components/
    Header.vue
    Footer.vue
  modules/
    auth/
      Login.vue
      Register.vue
    dashboard/
      Dashboard.vue
      Stats.vue
  store/
    index.js
    auth.js
    dashboard.js
  router/
    index.js
```

Essa estrutura modular ajuda a manter o código organizado, reutilizável

---

[Vue.js Modular Architecture Codebase](https://github.com/DarkC0der11/vue-modular-architecture/tree/main/src/modules/cart)

[Vue.js Modular Architecture - Video Guide](https://www.youtube.com/@sanjarmirakhmedov8311)
