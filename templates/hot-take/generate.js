// Hot Take generator — produces ready-to-screenshot HTML posts
// Usage: node generate.js

const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

const takes = [
  {
    num: '001',
    stat: '90%',
    take: 'Se você <span class="hot">precisa de IA</span> pra escrever um e-mail de 3 linhas, o problema <span class="gold">não é produtividade</span>.',
    takeClass: '',
    context: 'O gap de comunicação não se resolve com autocomplete. Se resolve com <strong>clareza de pensamento</strong>.',
    caption: `🔥 Hot Take #001

Se você precisa de IA pra escrever um e-mail de 3 linhas, o problema não é produtividade.

O gap de comunicação não se resolve com autocomplete. Se resolve com clareza de pensamento.

A IA é uma ferramenta incrível — mas ela amplifica o que você já tem. Se o pensamento é confuso, o output também vai ser.

Concorda ou discorda? Comenta aí 👇

#IA #InteligenciaArtificial #Produtividade #Tech #HotTake`
  },
  {
    num: '002',
    stat: '17%',
    take: 'Devs que usam <span class="hot">IA passivamente</span> sabem <span class="gold">17% menos</span> que devs que não usam.',
    takeClass: '',
    context: 'Estudo da Anthropic (Jan 2026): usar IA pra <em>copiar código</em> atrofia. Usar pra <strong>entender código</strong> não.',
    caption: `🔥 Hot Take #002

Devs que usam IA passivamente sabem 17% MENOS que devs que não usam.

Não é a IA que é o problema — é como você usa.

Estudo real da Anthropic (Jan 2026) com 52 devs: quem usou IA pra copiar e colar teve performance pior em debugging e compreensão de código.

Mas quem usou pra PERGUNTAR "por quê?" manteve o mesmo nível.

A diferença: IA como muleta vs IA como professor.

Qual dos dois você é? 🤔

#IA #Programação #Dev #Coding #HotTake`
  },
  {
    num: '003',
    stat: '$0',
    take: 'O melhor curso de IA custa <span class="gold">R$0</span> e se chama <span class="hot">"abrir o ChatGPT e tentar"</span>.',
    takeClass: '',
    context: 'Nenhum certificado substitui 30 dias usando a ferramenta <strong>no seu trabalho real</strong>.',
    caption: `🔥 Hot Take #003

O melhor curso de IA custa R$0 e se chama "abrir o ChatGPT e tentar".

Sério — parem de gastar R$2.000 em cursos de "prompt engineering".

Nenhum certificado substitui 30 dias usando a ferramenta no seu trabalho real. Todo dia. Nos seus problemas reais.

A IA é uma skill prática, não teórica. Você aprende fazendo, errando, e refinando.

Economiza o dinheiro do curso e investe na assinatura da ferramenta 😉

#IA #Carreira #Produtividade #HotTake #ChatGPT`
  },
  {
    num: '004',
    stat: '5x',
    take: 'Devs seniors ganham <span class="gold">5x mais produtividade</span> com IA que juniors.',
    takeClass: '',
    context: 'IA amplifica competência, <strong>não substitui</strong>. Quanto mais você sabe, mais a ferramenta entrega.',
    caption: `🔥 Hot Take #004

Devs seniors ganham 5x mais produtividade com IA que juniors.

Dado real do Opsera Benchmark 2026 (250K+ devs, 60+ empresas).

Por quê? Porque IA amplifica competência, não substitui. Se você sabe o que perguntar, sabe validar a resposta, e sabe quando o output tá errado — a IA é um superpoder.

Se você não sabe... ela é uma fábrica de bugs confiantes.

Investir em fundamentos > investir em prompts.

#IA #Dev #Programação #Carreira #HotTake`
  },
  {
    num: '005',
    stat: '89%',
    take: '<span class="hot">89%</span> dos family offices <span class="gold">não tocam em crypto</span>.',
    takeClass: '',
    context: 'Pesquisa JPMorgan (Fev 2026): a narrativa de "instituições estão vindo" precisa de <strong>nuance</strong>.',
    caption: `🔥 Hot Take #005

89% dos family offices NÃO tocam em crypto.

Pesquisa JPMorgan (Fev 2026, 333 family offices): apenas 11% alocam, só 17% planejam nos próximos 12 meses.

A narrativa de "instituições estão vindo" existe há 5 anos. Os ultra-ricos continuam sentados do lado de fora.

Isso não significa que crypto é ruim — significa que o mercado institucional é mais conservador do que o CT quer admitir.

Bullish on crypto, bearish on hype narratives 📉

#Crypto #Bitcoin #Investimentos #HotTake`
  }
];

// Generate individual HTML files
takes.forEach(t => {
  let html = template
    .replace('{{STAT}}', t.stat)
    .replace('{{TAKE}}', t.take)
    .replace('{{TAKE_CLASS}}', t.takeClass)
    .replace('{{CONTEXT}}', t.context)
    .replace('{{SERIES_NUM}}', t.num);
  
  const filename = `hot-take-${t.num}.html`;
  fs.writeFileSync(path.join(__dirname, filename), html);
  console.log(`✅ Generated ${filename}`);
  
  // Save caption
  const captionFile = `hot-take-${t.num}-caption.txt`;
  fs.writeFileSync(path.join(__dirname, captionFile), t.caption);
  console.log(`   📝 Caption: ${captionFile}`);
});

console.log(`\n🔥 Generated ${takes.length} hot takes!`);
console.log('Open any .html file in browser at 1080x1350 to screenshot.');
