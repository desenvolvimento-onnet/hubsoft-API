import { createConnection } from 'typeorm';

createConnection().then(() => {
    console.log('Conectado no banco com sucesso!');
});