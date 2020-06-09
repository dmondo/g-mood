import { Router } from 'express';
import path from 'path';
import { getPuzzle, getPuzzles, postPuzzle } from './controllers/puzzles';
import { postAuth, postUser } from './controllers/users';
import auth from './middleware/auth';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

router.get('/puzzles', auth, getPuzzles);

router.get('/puzzles/:uuid', auth, getPuzzle);

router.post('/puzzles', auth, postPuzzle);

router.post('/auth', postAuth);

router.post('/users', postUser);

export default router;
