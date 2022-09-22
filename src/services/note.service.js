import Note from '../models/note.model';
//create new note
export const newNote = async (body) => {
  console.log(body);
  const note = await Note.create(body);
  return note;
};
//getall
export const getAllNote = async (_id, body) => {
  console.log(body);
  const get = await Note.find();
  return get;
};
//getnote
export const getNote = async (_id, body) => {
  console.log(body);
  const get = await Note.findById(_id);
  return get;
};
//update note
export const updateNote = async (_id, body) => {
  const update = await Note.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return update;
};
//deletenote
export const deletenote = async (_id, body) => {
  console.log(body);
  const remove = await Note.findByIdAndDelete(_id);
  return remove;
};
//archive note
export const archiveNote = async (_id, body) => {
  console.log(body);
  const Hide = await Note.findByIdAndUpdate(
    {
      _id
    },
    {
      isArchived: true
    },
    {
      new: true
    }
  );
  return Hide;
};
//trash note
export const trashNote = async (_id, body) => {
  console.log(body);
  const remove = await Note.findByIdAndUpdate(
    {
      _id
    },
    {
      isDeleted: true
    },
    {
      new: true
    }
  );
  return remove;
};
