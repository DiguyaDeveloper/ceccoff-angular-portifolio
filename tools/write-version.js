const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../src/index.html');
const { version } = require('../package.json');

const metaTag = `<meta name="app-version" content="${version}">`;

// Lê o index.html original
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Evita inserir a meta mais de uma vez
if (!indexContent.includes('name="app-version"')) {
  indexContent = indexContent.replace(/<head[^>]*>/i, (match) => `${match}\n  ${metaTag}`);

  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`✅ Meta tag da versão ${version} adicionada ao <head> do index.html.`);
} else {
  console.log('⚠️ Meta tag da versão já existe no index.html, nenhuma alteração feita.');
}
