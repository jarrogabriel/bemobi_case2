const readline = require('readline');
const { createReadStream } = require('fs');
const readFile = require('./readFile');
const fileWriter = require('./fileWriter');
const { on } = require('stream');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question("Qual o caminho arquivo de LOG que se deseja abrir?\n", function(filePath) {
    console.log(`\nSeu caminho ${filePath} foi encontrado com sucesso e seu arquivo será gerado dentro da pasta log com o nome de resultado.txt`);

    const rl = readline.createInterface({
        input: createReadStream(filePath)
    });
    
    readFile(rl);
    

    leitor.close();
    

});


