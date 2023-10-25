import app from './app';

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});