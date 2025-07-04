import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from './router/router.js';
const port = process.env.PORT || 4000

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(join(__dirname, 'public')));
app.listen(3000);
console.log("Server corriendo en el puerto 3000");

