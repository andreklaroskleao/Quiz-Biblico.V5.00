# Jovens na Palavra — Desafio Bíblico JFA

App web estático para Vercel com UX responsiva, Firebase Auth e Firestore.

## Estrutura

Na raiz ficam somente:

- `index.html`
- `firestore.rules`
- `README.md`

Pastas:

- `src/css/styles.css`
- `src/js/app.js`
- `src/js/sw.js`
- `src/data/questions.js` com 1000 perguntas
- `assets/avatars/`
- `assets/borders/`
- `assets/icons/`
- `assets/pwa/`

## Recursos incluídos

- Login Google
- Cadastro/login por e-mail e senha
- Perfil público com privacidade
- Foto Google, sem foto ou imagens predefinidas
- Molduras e títulos com requisitos bloqueados
- Quiz Solo em modal
- Resposta, explicação e referência JFA após cada questão
- Revisão de perguntas erradas
- Missões diárias, semanais e permanentes
- Jornada por testamento e livros
- Classificação global, semanal, mensal e desafios vencidos
- Amigos e convites
- Desafio entre Irmãos em modal
- Sala com código, líder, adicionar/remover membros, transferir liderança e fechar grupo
- Campeonatos com criação e participação
- Admin para sincronizar perguntas e revisar reportes
- PWA instalável

## Deploy no Vercel

1. Envie a pasta do projeto para um repositório.
2. Importe no Vercel.
3. Configure como projeto estático padrão.
4. Publique as regras do Firestore usando o arquivo `firestore.rules`.

## Observações importantes

- O banco usa referências JFA e explicações próprias. Não há textos longos da Bíblia copiados dentro do app.
- Para anti-trapaça forte e pontuação 100% validada no servidor, a próxima evolução recomendada é usar Cloud Functions.
- Para liberar o painel admin, crie um documento `admins/{UID_DO_ADMIN}` no Firestore.

## Verificações desta versão

- Estrutura da raiz limpa
- Assets sem símbolo de cruz
- Banco com 1000 perguntas
- Enunciados e IDs únicos
- `app.js` com sintaxe validada
- Links locais verificados
- Layout responsivo para mobile e desktop
