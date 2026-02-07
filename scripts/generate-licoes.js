#!/usr/bin/env node
/**
 * Lição de IA — Post Generator
 * Reads template + content data, outputs numbered HTML files ready for screenshot → Instagram
 * 
 * Usage: node scripts/generate-licoes.js
 * Output: outputs/licao-de-ia/001.html, 002.html, etc.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// --- Content Library ---
const licoes = [
  {
    number: '#01',
    series: '#001',
    line1: 'a IA <span class="highlight">não vai roubar</span> seu emprego',
    line2: '<span class="scribble">ela vai roubar o emprego de quem não aprender a usar ela</span>',
    line2_class: '',
    line3: 'talvez roube mesmo <span class="shrug">🤷</span>',
    caption: '🤖 Lição de IA #001\n\nTodo mundo repete essa frase: "a IA não vai roubar seu emprego, quem usa IA vai."\n\nMas será?\n\nNa real, depende do emprego. Se o que você faz é repetitivo, previsível, template-based — sim, a IA já está fazendo. Não "vai fazer". Já faz.\n\nMas se você PENSA, se você toma decisões com contexto, se você entende o POR QUÊ — aí é diferente.\n\nA lição de verdade: não basta "usar a IA". Tem que entender o suficiente pra saber quando ela tá errada.\n\nSalva esse post. Semana que vem tem mais. 🦆\n\n#IA #InteligenciaArtificial #Tecnologia #Carreira #FuturoDoTrabalho',
  },
  {
    number: '#02',
    series: '#002',
    line1: 'copiar código do <span class="highlight">ChatGPT</span> não é programar',
    line2: '<span class="scribble">é como copiar receita sem saber cozinhar</span>',
    line2_class: '',
    line3: 'aprenda a pensar, não a copiar',
    caption: '🤖 Lição de IA #002\n\nEstudo da Anthropic (Jan 2026): devs que usam IA passivamente tiraram 17% MENOS em testes de competência.\n\nO problema não é usar IA. É usar sem pensar.\n\nCopiar código do ChatGPT ≠ programar. Copiar receita ≠ cozinhar. O valor tá em entender o que tá acontecendo.\n\nPergunta "por quê?" pro ChatGPT. Peça pra explicar. Não aceite a primeira resposta.\n\nA IA é um tutor fenomenal — SE você fizer as perguntas certas.\n\n#IA #Programação #Dev #ChatGPT #Aprendizado',
  },
  {
    number: '#03',
    series: '#003',
    line1: 'seu prompt é tão bom quanto <span class="highlight">sua pergunta</span>',
    line2_class: 'plain',
    line2: '"me faz um app de delivery" → lixo. sempre.',
    line3: 'contexto > criatividade',
    caption: '🤖 Lição de IA #003\n\nA galera reclama que o ChatGPT dá respostas genéricas. Spoiler: a pergunta era genérica.\n\n"Me faz um app de delivery" → lixo\n"Sou dev TypeScript com 5 anos de experiência, preciso de uma API REST com Hono + SQLite que gerencia pedidos com status tracking, pra no máximo 1000 pedidos/dia" → ouro\n\nA IA não lê mente. Quanto mais contexto, melhor o resultado.\n\nDica prática: antes de perguntar, escreva 3 linhas de contexto sobre QUEM você é, O QUE precisa, e POR QUÊ.\n\n#IA #Prompts #ChatGPT #Dicas #Produtividade',
  },
  {
    number: '#04',
    series: '#004',
    line1: 'a IA erra <span class="highlight">com confiança</span>',
    line2: '<span class="scribble">igual aquele colega que inventa no almoço</span>',
    line2_class: '',
    line3: 'confie, mas verifique 🔍',
    caption: '🤖 Lição de IA #004\n\nAlucinação: quando a IA inventa uma resposta com 100% de confiança e 0% de verdade.\n\nIsso acontece porque LLMs são máquinas de previsão de texto. Eles preveem a PRÓXIMA PALAVRA mais provável. Não verificam se é verdade.\n\nÉ tipo aquele colega que sempre tem uma resposta na hora do almoço, conta com convicção total, e 30% das vezes tá inventando.\n\nRegra de ouro: quanto mais específica a informação (datas, números, citações, código), mais você precisa verificar.\n\nNunca confie cegamente. Sempre verifique.\n\n#IA #Alucinação #ChatGPT #Dicas #FactCheck',
  },
  {
    number: '#05',
    series: '#005',
    line1: 'usar <span class="highlight">3 ferramentas de IA</span> ao mesmo tempo',
    line2_class: 'plain',
    line2: 'não te faz mais produtivo. te faz mais distraído.',
    line3: 'domine UMA antes de adicionar outra',
    caption: '🤖 Lição de IA #005\n\nChatGPT, Claude, Gemini, Copilot, Cursor, Perplexity, v0, Bolt...\n\nO FOMO de ferramentas de IA é real. Todo dia sai uma nova e você sente que tá ficando pra trás.\n\nMas a verdade é que quem domina UMA ferramenta profundamente produz mais que quem pula entre 5 superficialmente.\n\nMinha recomendação:\n1. Escolha UMA pra texto (ChatGPT ou Claude)\n2. UMA pra código (Cursor ou Copilot)\n3. Domine ambas por 30 dias\n4. Só depois avalie se precisa de mais\n\nProfundidade > amplitude. Sempre.\n\n#IA #Produtividade #Ferramentas #Dicas #Focus',
  },
];

// --- Generate ---
const template = readFileSync(join(ROOT, 'templates/licao-de-ia/template.html'), 'utf-8');
const outDir = join(ROOT, 'outputs/licao-de-ia');
mkdirSync(outDir, { recursive: true });

// Also write captions file
let captionsOut = '# Lição de IA — Captions\n\nCopy-paste ready for Instagram.\n\n';

for (const licao of licoes) {
  const html = template
    .replace('{{NUMBER}}', licao.number)
    .replace('{{SERIES_NUM}}', licao.series)
    .replace('{{LINE1}}', licao.line1)
    .replace('{{LINE2}}', licao.line2)
    .replace('{{LINE2_CLASS}}', licao.line2_class)
    .replace('{{LINE3}}', licao.line3);

  const num = licao.series.replace('#', '');
  const outPath = join(outDir, `${num}.html`);
  writeFileSync(outPath, html);
  console.log(`✅ ${num}.html`);

  captionsOut += `---\n\n## ${licao.series}\n\n${licao.caption}\n\n`;
}

writeFileSync(join(outDir, 'CAPTIONS.md'), captionsOut);
console.log(`\n✅ CAPTIONS.md generated`);
console.log(`\n📸 To screenshot: open each .html in browser at 1080x1350, screenshot, done.`);
console.log(`📱 Or use puppeteer: npx puppeteer screenshot --viewport 1080x1350 outputs/licao-de-ia/001.html`);
