import app from '../app';

const DEFAULT_PORT = 5000;
const parsePortNumber = (): number => {
    try {
        if (process.env.PORT) {
            return Number(process.env.PORT);
        }
        return DEFAULT_PORT
    } catch (err) {
        return DEFAULT_PORT;
    }
}

const PORT = parsePortNumber();

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
});