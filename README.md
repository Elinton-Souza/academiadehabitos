# Academia de Hábitos — Estado do Projeto

Este repositório contém a versão inicial da interface web do projeto "Academia de Hábitos" (protótipo Figma disponível no link abaixo).

## Link do protótipo (Figma)

https://www.figma.com/design/KJbG3xprqBLzMeB17RStJj/Academia-de-H%C3%A1bitos?node-id=0-1&p=f&m=dev

## O que foi implementado até agora

- Importação de fonte: a fonte "Luckiest Guy" (Google Fonts) foi adicionada ao `index.html` e aplicada ao título principal (`.titulo`). Essa escolha foi feita pela semelhança visual com o logotipo fornecido.

- Estilização do cabeçalho (`src/App.css`):
  - Criação/ajuste de `.cabecalho-div` para exibir a logo e o `h1`.
  - Aplicação de transições e efeito de foco (hover) que afetam a imagem e o `h1` em conjunto: leve elevação (translateY/scale) e glow (text-shadow / drop-shadow) sem alterar a cor do texto.
  - Estilização da linha horizontal (`hr`) para usar a cor de destaque do projeto (`#EB7E32`) e hover com cor alternativa (`#BAD546`).

- Navegação e botões:
  - Links de navegação (`.nav-list`) com estilo e hover em cor de destaque.
  - Botões (`.nav-botoes`) com cores, borda arredondada e efeitos de hover.

- Ajustes responsivos:
  - Regras `@media` já adicionadas para telas menores (<=900px) e refinadas para <=480px, com:
    - Empilhamento de logo e título.
    - Centralização da navegação e botões.
    - Redução de tamanhos (logo, fonte do título, espaçamentos) para melhorar visual em dispositivos pequenos.


## Arquivos alterados

- `index.html` — adição do link do Google Fonts (`Luckiest Guy`).
- `src/App.css` — múltiplas atualizações de estilo: fonte, cabeçalho, hover conjunto (img + h1), `hr`, media queries para 900px e 480px.
- `src/App.jsx` — componente `App` (estrutura do header, nav e botões). Algumas alterações de layout temporárias foram aplicadas e revertidas conforme revisão.

## Como rodar localmente

1. Instale dependências:

```powershell
npm install
```

2. Inicie o servidor de desenvolvimento (Vite):

```powershell
npm run dev
```

Abra o endereço que o Vite exibir (normalmente http://localhost:5173) para visualizar as mudanças.

## Próximos passos

- Implementar um header responsivo definitivo: escolher entre empilhamento (logo acima do texto) ou layout em três colunas para desktop, com um menu hambúrguer em mobile.


