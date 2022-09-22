import express from 'express';
import { newNoteValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as noteController from '../controllers/note.controller';

const router = express.Router();
//route to get all users
router.get('', userAuth, noteController.getAllNote);

//route to create new note
router.post('/note', newNoteValidator, userAuth, noteController.newNote);

// route to create get note
router.get('/:_id', userAuth, noteController.getNote);

//route to create update note
router.put('/:_id', userAuth, noteController.updateNote);

//route to create delete note
router.delete('/:_id', userAuth, noteController.deletenote);

//route to create archive note
router.put(
  '/isarchive/:_id',
  newNoteValidator,
  userAuth,
  noteController.archiveNote
);

//route to create delete note
router.put(
  '/isdelete/:_id',
  newNoteValidator,
  userAuth,
  noteController.trashNote
);
export default router;
