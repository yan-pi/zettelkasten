#content

### Introdução

---

Essa anotação abordará o conceito do [[useState]] hook em React, sua utilização para gerenciar o estado de componentes
funcionais e a atualização de valores de estado.

### Revisão de conceitos

---

- **Estado:** Representa os dados com os quais o aplicativo está trabalhando em um determinado momento.
- **Componente funcional:** Um componente React que é definido como uma função JavaScript.
- **Radiação de estrutura (Destructuring):** Uma técnica para extrair valores individuais de uma matriz ou objeto.

### useState hook

---

O `useState` hook permite gerenciar o estado em componentes funcionais. Ele retorna um array de dois elementos:

1. O valor atual do estado.
2. Uma função para atualizar o estado.

### Exemplo de uso

---

JavaScript

```js
const [restaurantName, setRestaurantName] = useState("Lemon");

const updateRestaurantName = () => {
  setRestaurantName("Little Lemon");
};

<button onClick={updateRestaurantName}>Atualizar nome do restaurante</button>
<h1 id="restaurant-name">{restaurantName}</h1>
```

Neste exemplo, `restaurantName` armazena o nome do restaurante e `setRestaurantName` é a função usada para atualizá-lo.
O botão dispara a função `updateRestaurantName`, que por sua vez chama `setRestaurantName` para alterar o valor do
estado e atualizar o título da página.

### Atualização do estado

---

O estado só pode ser atualizado usando a função de atualização de estado. Tentativas de modificar o valor diretamente
não terão efeito.

### Convenções

---

- Nomenclatura da função de atualização: Camel case, iniciando com "set" seguido do nome da variável de estado.
- Desestruturação do array retornado pelo `useState`:
  Utilizar `const [stateVariable, setStateFunction] = useState(initialValue);`

### Recursos adicionais

- Documentação oficial
  do `useState` hook: [https://legacy.reactjs.org/docs/state-and-lifecycle.html](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
- Tutorial sobre
  desestruturação: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Conclusão

O `useState` hook é uma ferramenta fundamental para gerenciar o estado em componentes funcionais React. Compreender seu
funcionamento e as práticas recomendadas é importante para o desenvolvimento de aplicativos React eficientes e robustos.
