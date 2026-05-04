# Jovens na Palavra - Desafio Bíblico JFA

Aplicativo estático em HTML, CSS e JavaScript para quiz bíblico da mocidade, com foco na João Ferreira de Almeida, Antigo e Novo Testamento, perfil, missões, classificação, amigos, molduras, títulos e salas para Desafio entre Irmãos.

## Estrutura da raiz

A raiz foi deixada limpa para deploy:

- `index.html`
- `firestore.rules`
- `README.md`

Os demais arquivos ficam organizados em:

- `src/css/styles.css`
- `src/js/app.js`
- `assets/avatars/`
- `assets/borders/`
- `assets/icons/`

## Deploy no Vercel

1. Envie a pasta do projeto para um repositório GitHub.
2. Importe o repositório no Vercel.
3. Framework preset: `Other`.
4. Build command: deixe vazio.
5. Output directory: deixe vazio ou `.`.
6. Faça o deploy.

O `index.html` já está na raiz, então o Vercel servirá o app corretamente.

## Firebase

O arquivo `src/js/app.js` já contém o `firebaseConfig` informado.

No console Firebase, ative:

1. Authentication > Sign-in method > Google.
2. Authentication > Sign-in method > Email/Password.
3. Firestore Database.

Depois publique as regras do arquivo `firestore.rules` em:

Firestore Database > Rules > cole o conteúdo > Publish.

## Observação sobre JFA

O app está preparado com foco em João Ferreira de Almeida e mostra referências bíblicas JFA com explicações próprias. Para evitar problemas de direitos autorais, esta versão não inclui textos longos completos da Bíblia. Se você tiver uma base JFA em domínio público ou licenciada, adicione o campo `verseText` nas perguntas em `src/js/app.js` e exiba esse campo no feedback.

## Recursos incluídos

- Login com Google.
- Cadastro e login por e-mail/senha.
- Perfil do usuário.
- Foto Google, avatar predefinido ou opção sem foto.
- Molduras desbloqueáveis.
- Títulos por nível.
- Missões.
- Classificação global.
- Quiz solo com AT + NT.
- Referência bíblica e explicação a cada resposta.
- Jornada por livros.
- Sistema de amigos por convite.
- Criação e entrada em salas.
- Estrutura pronta para expandir competição em tempo real.

## Próximo passo recomendado

Para competição real com anti-trapaça forte, use Cloud Functions para validar respostas, tempo e pontuação no servidor. Em apps somente HTML/JS, o usuário avançado consegue manipular dados no navegador, então as regras ajudam, mas não substituem validação server-side.
