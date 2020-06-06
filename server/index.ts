import express from 'express';
import morgan from 'morgan';
import parser from 'body-parser';
import path from 'path';
import router from './router';

const app = express();

app.use(express.static(path.join(__dirname, '..')));
app.use(parser.json());
app.use(morgan('dev'));
app.use(router);

const port = process.env.PORT || 1666;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
