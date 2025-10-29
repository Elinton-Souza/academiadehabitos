# Academia de Hábitos — Estado do Projeto

Este repositório contém a versão inicial da interface web do projeto "Academia de Hábitos" (protótipo Figma disponível no link abaixo).

## Link do protótipo (Figma)
https://www.figma.com/design/KJbG3xprqBLzMeB17RStJj/Academia-de-H%C3%A1bitos?node-id=0-1&p=f&m=dev

## Link da página do protótipo (vercel)
https://academiadehabitos.vercel.app/

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

# Academia de Hábitos

Uma plataforma de gamificação para ajudar crianças e adolescentes a desenvolverem rotinas (tarefas domésticas e atividades escolares) de forma lúdica, com acompanhamento dos pais e geração de recompensas.

> Transforme tarefas em missões. Valorize o esforço, desenvolva hábitos.

---

## Visão geral

Academia de Hábitos é um aplicativo/web que combina gestão de rotinas familiares e reforço escolar em um ambiente gamificado. Pais criam rotinas e recompensas; crianças completam missões e acumulam pontos para resgate — com foco tanto no resultado quanto no esforço.

---

## Sobre Nós

Bem-vindos à Academia de Hábitos! Somos uma plataforma dedicada a transformar o dia a dia de crianças e adolescentes, incentivando responsabilidade, disciplina e autonomia por meio da gamificação e do aprendizado interativo.

Nossa missão é transformar tarefas rotineiras e estudos em uma jornada divertida e recompensadora. Combinamos controles parentais simples e uma interface lúdica para o público jovem, valorizando o empenho (pontos de esforço) e o desempenho (pontos de resultado).

Priorizamos segurança e proteção de dados (conformidade com LGPD) e uma arquitetura escalável, pensada para uso familiar e integração com ambientes escolares.

---

## Recursos implementados (resumo técnico)

- Importação da fonte "Luckiest Guy" (Google Fonts) e aplicação no título principal.
- Header com logo e título, efeitos de hover sincronizados (drop-shadow e leve elevação) aplicados ao conjunto imagem + h1.
- Estilização de navegação (`.nav-list`) e botões (`.nav-botoes`) com cores do projeto (#EB7E32 / #BAD546).
- Linha horizontal (`hr`) estilizada com cor do projeto.
- Media queries: comportamentos responsivos já implementados para <=900px e refinados para <=480px (logo/título empilhados, nav e botões centralizados, redução de gaps).
- Estrutura inicial do componente `App` em `src/App.jsx` com marcação para logo, título, navegação e botões.

---

## Funcionalidades planejadas (curto/médio prazo)

- Banco de Recompensas personalizável (recompensas em tokens, privilégios ou valor monetário definido pela família).
- Geração de atividades escolares a partir de tópicos/disciplina (via banco de questões ou IA controlada).
- Sistema de pontuação dividido: Pontos de Resultado (prova) e Pontos de Esforço (cumprimento de prazos, consistência).
- Profiling: perfis por faixa etária, dashboards para pais e interface gamificada para crianças.
- Opções de cooperação familiar e desafios escolares (eventos, rankings anônimos).

---

<!-- ## Tecnologias recomendadas / usadas

- Frontend: React + Vite (atual) — alternativa: Flutter / React Native para mobile.
- Backend: Node.js + Express (sugestão) / Python + Django.
- Banco de dados: PostgreSQL (transações) / MongoDB (flexibilidade).
- Autenticação: Firebase Auth ou Auth0.
- IA (opcional): OpenAI / Google Gemini (para geração de atividades escolares controladas). -->

---

<!-- ## Boas práticas e próximos passos técnicos

- Consolidar cores e valores em variáveis CSS (`:root { --accent: #EB7E32; }`).
- Separar estilos críticos em módulos e componentes reutilizáveis.
- Adicionar testes unitários para cálculo de pontos e integração (API) mínima.
- Planejar políticas de privacidade e conformidade com LGPD desde o design. -->

---
