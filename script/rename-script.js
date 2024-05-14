const fs = require('fs');
const path = require('path');

function renameFilesAndDirectories(rootDir) {
    fs.readdirSync(rootDir).forEach((entry) => {
        const entryPath = path.join(rootDir, entry);
        const entryLowerCase = entry.toLowerCase().replace(/\s+/g, '-');
        const isDirectory = fs.statSync(entryPath).isDirectory();

        let newEntryName = entryLowerCase;
        if (isDirectory) {
            // Convertendo para camelCase
            newEntryName = entryLowerCase.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());
        } else {
            // Substituindo a extensão para .mdx
            const { name } = path.parse(newEntryName);
            newEntryName = path.join(path.dirname(newEntryName), name + '.mdx');
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

const rootDirectory = '../pages/Programing'; // Substitua pelo caminho do diretório raiz
renameFilesAndDirectories(rootDirectory);
