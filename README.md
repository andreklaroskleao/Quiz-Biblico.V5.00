# Jovens na Palavra — Desafio Bíblico JFA

App estático em HTML, CSS e JavaScript, pronto para deploy no Vercel.

## Raiz limpa

A raiz contém apenas:

- `index.html`
- `firestore.rules`
- `README.md`

O restante fica organizado em:

- `src/css/styles.css`
- `src/js/app.js`
- `src/js/sw.js`
- `src/data/questions.js`
- `assets/avatars/`
- `assets/borders/`
- `assets/icons/`
- `assets/pwa/`

## O que foi aplicado

1. Conteúdo bíblico AT + NT.
2. Banco local com 1000 perguntas únicas.
3. Estrutura pronta para sincronizar perguntas com Firestore.
4. Painel administrativo por UID em `/admins/{uid}`.
5. Reportar pergunta.
6. Campo `verseText` preparado para texto JFA licenciado/domínio público.
7. Revisão de erros com referências.
8. Jornada por livros da Bíblia.
9. Conquistas, títulos, molduras e imagens de perfil.
10. Classificação global, semanal, mensal e competitiva.
11. Salas para Desafio entre Irmãos.
12. Regras Firestore mais completas.
13. Privacidade do perfil.
14. UX responsiva desktop/mobile.
15. PWA instalável com manifest e service worker.
16. Campeonatos.
17. Identidade visual para mocidade: Jovens na Palavra / Desafio Bíblico JFA.

## Firebase

O projeto usa a configuração já inserida no `src/js/app.js`.

Ative no Firebase Console:

- Authentication → Google
- Authentication → Email/Senha
- Firestore Database

Depois publique as regras:

```bash
firebase deploy --only firestore:rules
```

## Admin

Para liberar painel admin, crie manualmente no Firestore:

```txt
admins/{UID_DO_ADMIN}
  role: "owner"
```

Depois entre no app com esse usuário. A aba Admin aparecerá.

## Perguntas

O banco inicial possui 1000 perguntas em `src/data/questions.js`.

Observação: as perguntas usam referências JFA e explicações próprias. O app está preparado para versículos completos em `verseText`, mas recomendo usar somente uma base João Ferreira de Almeida com licença adequada antes de colocar textos bíblicos completos.

## Deploy Vercel

Faça upload/import do repositório no Vercel. Como `index.html` está na raiz, o deploy funciona como site estático.

## Segurança

As regras reduzem abuso, mas para pontuação competitiva 100% forte recomendo Cloud Functions para validar respostas no servidor. O front-end já salva dados de forma organizada para evoluir nessa direção.
