import fs from 'fs';


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateJsonFile() {
    const data = {};
    for (let i = 0; i < 10000; i++) {
        data[`random_${i}`] = generateRandomString(400);
    }
    fs.writeFile('output.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File successfully written!');
    });
}

generateJsonFile();