# Jovens na Palavra — Desafio Bíblico JFA

Aplicativo estático para Vercel com Firebase Auth + Firestore, criado para quiz bíblico da mocidade, com Antigo e Novo Testamento, perfil, missões, classificação, amigos, campeonatos, salas e painel administrativo.

## Estrutura

A raiz do deploy contém:

- `index.html`
- `firestore.rules`
- `README.md`
- `src/`
- `assets/`

O `index.html` está na raiz, conforme exigido pelo Vercel.

## Principais recursos

- Login com Google
- Cadastro/login por e-mail e senha
- Banco local com **1500 perguntas** em `src/data/questions.js`
- Perguntas com dificuldade, testamento, livro, categoria, referência, resposta e explicação
- Painel administrativo para cadastrar novas perguntas
- Sincronização das 1500 perguntas para a coleção `questions` do Firestore
- Menu com nomes mais claros
- Menu lateral com barra de rolagem
- Sistema de notificações internas
- Pedido de amizade com aceitar/recusar
- Notificação de pedido de amizade
- Notificação de conquista desbloqueada
- Notificação de missão cumprida
- Perfil com imagem predefinida, foto Google ou sem foto
- Molduras e títulos bloqueados por requisitos
- Classificação global/semanal/mensal/desafios
- Missões diárias, semanais e permanentes
- Desafio entre Irmãos com sala, líder, adicionar/remover membros, transferir liderança e fechar grupo
- Campeonatos com criação e entrada
- PWA instalável
- Layout responsivo para desktop e mobile

## Configuração do Firebase

O app já usa o `firebaseConfig` informado no código. No Firebase Console, habilite:

1. Authentication > Sign-in method
   - Google
   - Email/Password

2. Firestore Database
   - Criar banco em modo produção ou teste temporário
   - Publicar as regras do arquivo `firestore.rules`

3. Para liberar o painel admin
   - Crie a coleção `admins`
   - Crie um documento com o UID do usuário administrador
   - Exemplo: `admins/SEU_UID`
   - Pode deixar qualquer campo, como `role: "admin"`

## Cadastrar perguntas pelo app

Entre com uma conta admin e acesse:

`Administração > Painel de perguntas e revisão`

Você pode cadastrar perguntas por formulário ou colar JSON.

Formato recomendado:

```json
{
  "id": "custom-joao-001",
  "difficulty": "facil",
  "testament": "NT",
  "book": "João",
  "category": "Evangelhos",
  "question": "Quem disse: Eu sou o caminho, e a verdade e a vida?",
  "options": ["Pedro", "Paulo", "Jesus", "João Batista"],
  "answer": "Jesus",
  "reference": "João 14:6",
  "explanation": "Jesus declarou ser o caminho, a verdade e a vida.",
  "version": "JFA",
  "mode": "multipla",
  "verseText": "",
  "active": true
}
```

## Observação sobre JFA

O app usa referências JFA e explicações próprias. Não foram incluídos textos longos completos da Bíblia para evitar problemas de licença. O campo `verseText` já está preparado caso você utilize uma base bíblica licenciada ou de domínio público.

## Deploy no Vercel

1. Suba todos os arquivos para um repositório.
2. Importe o projeto no Vercel.
3. Framework: Other / Static.
4. Output/build: não precisa build.
5. Publique.

## Recomendação técnica futura

Para multiplayer competitivo com anti-trapaça forte, use Cloud Functions para validar respostas e pontuação no servidor. A versão atual é estática e usa Firestore diretamente pelo cliente.
