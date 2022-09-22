import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';


export const newNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'create new note  successfully'
    });
  } catch (error) {
    next(error);
  }
};
export const getAllNote = async (req, res, next) => {
  try {
    const data = await NoteService.getAllNote(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'getting all  note  successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const data = await NoteService.getNote(req.param._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'getting note successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const data = await NoteService.updateNote(req.param._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'note updated succefully'
    });
  } catch (error) {
    next(error);
  }
};

export const deletenote = async (req, res, next) => {
  try {
    const data = await NoteService.deletenote(req.param._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'note delete succefully'
    });
  } catch (error) {
    next(error);
  }
};
export const archiveNote = async (req, res, next) => {
  try {
    const data = await NoteService.archiveNote(req.param._id);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'data is archive successfully'
    });
  } catch (error) {
    next(error);
  }
};
export const trashNote = async (req, res, next) => {
  try {
    const data = await NoteService.trashNote(req.param._id);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'data  trash successfully'
    });
  } catch (error) {
    next(error);
  }
};

