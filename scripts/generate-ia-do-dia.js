#!/usr/bin/env node
/**
 * IA do Dia — Tool Review Post Generator
 * Reads template + content data, outputs numbered HTML files
 * 
 * Usage: node scripts/generate-ia-do-dia.js
 * Output: outputs/ia-do-dia/001.html, 002.html, etc.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function makeItems(items) {
  return items.map(i => `<div class="item">${i}</div>`).join('\n      ');
}

const reviews = [
  {
    series: '#001',
    date: '07 FEV 2026',
    tool_name: 'Cursor',
    tagline: 'O VS Code com IA embutida que todo dev quer usar',
    verdict: '<span class="gold">Vale cada centavo.</span> Se você programa, é a melhor ferramenta de IA que existe hoje.',
    stat1: { value: '$20', label: '/mês' },
    stat2: { value: '4.8', label: 'rating' },
    stat3: { value: '2M+', label: 'devs' },
    pros: ['Autocomplete assustadoramente bom', 'Entende seu projeto inteiro', 'Chat integrado no editor', 'Baseado no VS Code (familiar)'],
    cons: ['Caro pra quem tá começando', 'Pode viciar (cuidado com dependência)', 'Consome muita RAM'],
    caption: '🤖 IA do Dia #001 — Cursor\n\nO editor de código que lê seu projeto inteiro e completa código como se fosse seu colega sênior.\n\nCursor é basicamente o VS Code turbinado com IA. Não é só autocomplete — ele entende o CONTEXTO do seu projeto. Refatora funções, escreve testes, explica código legado.\n\nUso todo dia e é a ferramenta que mais impacta minha produtividade.\n\nVeredito: se você programa profissionalmente, vale cada centavo dos $20/mês.\n\nSe não programa? Pula pro próximo post. 😄\n\n🔗 cursor.com\n\n#IA #Cursor #Programação #Dev #Ferramentas',
  },
  {
    series: '#002',
    date: '08 FEV 2026',
    tool_name: 'Perplexity',
    tagline: 'Google + ChatGPT tiveram um filho. Esse é o filho.',
    verdict: '<span class="gold">Matou o Google</span> pra pesquisas técnicas. Pra receitas, ainda uso o Google.',
    stat1: { value: 'Free', label: 'básico' },
    stat2: { value: '$20', label: '/mês pro' },
    stat3: { value: '100M+', label: 'buscas/mês' },
    pros: ['Respostas com fontes citadas', 'Mais rápido que Google + ChatGPT', 'Entende perguntas complexas', 'Follow-up em conversa'],
    cons: ['Versão grátis é limitada', 'Às vezes cita fontes duvidosas', 'Não substitui pesquisa profunda'],
    caption: '🤖 IA do Dia #002 — Perplexity\n\nImagina se o Google entendesse sua pergunta de verdade, buscasse as melhores fontes, e te desse a resposta mastigada com referências.\n\nÉ o Perplexity.\n\nPra pesquisas técnicas, substituiu o Google completamente no meu workflow. Pra perguntas tipo "melhor restaurante perto de mim" — ainda uso Google Maps. 😅\n\nDica: a versão grátis já é ótima. Só paga se usar pesado (10+ pesquisas/dia).\n\n🔗 perplexity.ai\n\n#IA #Perplexity #Pesquisa #Google #Ferramentas',
  },
  {
    series: '#003',
    date: '09 FEV 2026',
    tool_name: 'ElevenLabs',
    tagline: 'Clona qualquer voz em 30 segundos. Sério.',
    verdict: '<span class="gold">Assustadoramente bom.</span> A voz mais realista do mercado. Use com responsabilidade.',
    stat1: { value: '$5', label: '/mês básico' },
    stat2: { value: '29', label: 'idiomas' },
    stat3: { value: '1M+', label: 'usuários' },
    pros: ['Vozes ultrarrealistas', 'Clonagem com 30s de áudio', 'API robusta pra devs', 'Multilíngue (PT-BR incluso)'],
    cons: ['Potencial de deepfake', 'Plano grátis = 10min/mês', 'Qualidade varia por idioma'],
    caption: '🤖 IA do Dia #003 — ElevenLabs\n\nGrava 30 segundos da sua voz. A IA clona. Agora você pode "falar" em 29 idiomas sem abrir a boca.\n\nUso no dia a dia pra gerar áudios de WhatsApp, narrar vídeos, e até trollar amigos. A qualidade em português brasileiro é impressionante.\n\nO lado assustador: qualquer pessoa pode clonar qualquer voz. O potencial de golpe é real. Use com responsabilidade.\n\nDica: o plano de $5/mês é suficiente pra maioria das pessoas.\n\n🔗 elevenlabs.io\n\n#IA #ElevenLabs #Voz #TextToSpeech #Deepfake #Ferramentas',
  },
];

const template = readFileSync(join(ROOT, 'templates/ia-do-dia/template.html'), 'utf-8');
const outDir = join(ROOT, 'outputs/ia-do-dia');
mkdirSync(outDir, { recursive: true });

let captionsOut = '# IA do Dia — Captions\n\nCopy-paste ready for Instagram.\n\n';

for (const review of reviews) {
  const html = template
    .replace('{{DATE}}', review.date)
    .replace('{{TOOL_NAME}}', review.tool_name)
    .replace('{{TAGLINE}}', review.tagline)
    .replace('{{VERDICT}}', review.verdict)
    .replace('{{STAT1_VALUE}}', review.stat1.value)
    .replace('{{STAT1_LABEL}}', review.stat1.label)
    .replace('{{STAT2_VALUE}}', review.stat2.value)
    .replace('{{STAT2_LABEL}}', review.stat2.label)
    .replace('{{STAT3_VALUE}}', review.stat3.value)
    .replace('{{STAT3_LABEL}}', review.stat3.label)
    .replace('{{PROS}}', makeItems(review.pros))
    .replace('{{CONS}}', makeItems(review.cons))
    .replace('{{SERIES_NUM}}', review.series);

  const num = review.series.replace('#', '');
  writeFileSync(join(outDir, `${num}.html`), html);
  console.log(`✅ ${num}.html`);

  captionsOut += `---\n\n## ${review.series} — ${review.tool_name}\n\n${review.caption}\n\n`;
}

writeFileSync(join(outDir, 'CAPTIONS.md'), captionsOut);
console.log(`\n✅ CAPTIONS.md generated`);
