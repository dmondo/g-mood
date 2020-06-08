import { Router } from 'express';
import path from 'path';
import { getPuzzle, getPuzzles, postPuzzle } from './controllers/puzzles';
import { getUser, postUser } from './controllers/users';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

router.get('/puzzles', getPuzzles);

router.get('/puzzles/:uuid', getPuzzle);

router.post('/puzzles', postPuzzle);

router.get('/users', getUser);

router.post('/users', postUser);

export default router;
