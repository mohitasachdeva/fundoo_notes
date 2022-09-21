import express from 'express';
import { newNoteValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as noteController from '../controllers/note.controller';

const router = express.Router();

//route to create new note
router.post('/note', newNoteValidator, userAuth, noteController.newNote);
// route to create get note
router.get('/:_id', newNoteValidator, userAuth, noteController.getNote);
//route to create update note
router.put('/:_id', newNoteValidator, userAuth, noteController.updateNote);
//route to create delete note
router.delete('/:_id', newNoteValidator, userAuth, noteController.deletenote);

export default router;
