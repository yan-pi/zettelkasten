const fs = require('fs');
const path = require('path');
require('dotenv').config();

function renameFilesAndDirectories(rootDir) {
  fs.readdirSync(rootDir).forEach((entry) => {
    const entryPath = path.join(rootDir, entry);
    const entryLowerCase = entry.toLowerCase().replace(/\s+/g, '-');
    const isDirectory = fs.statSync(entryPath).isDirectory();

    let newEntryName = entryLowerCase;
    if (isDirectory) {
      // Convertendo para camelCase
      newEntryName = entryLowerCase.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());
    } else if (entryPath.endsWith('.mdx')) {
      // Substituindo a extensão para .mdx se o arquivo for .md
      const { name } = path.parse(newEntryName);
      newEntryName = path.join(path.dirname(newEntryName), name + '.md');
    }

    const newEntryPath = path.join(rootDir, newEntryName);

    if (entry !== newEntryName) {
      fs.renameSync(entryPath, newEntryPath);
      console.log(`Renomeado: ${entryPath} -> ${newEntryPath}`);
    }

    if (isDirectory) {
      renameFilesAndDirectories(newEntryPath);
    }
  });
}

const rootDirectory = process.env.RENAME_SCRIPT_PATH; // Usando variável de ambiente
if (!rootDirectory) {
  console.error('A variável de ambiente RENAME_SCRIPT_PATH não está definida.');
  process.exit(1);
}
renameFilesAndDirectories(rootDirectory);
