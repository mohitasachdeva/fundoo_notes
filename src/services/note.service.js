import Note from '../models/note.model';
//create new note
export const newNote = async (body) => {
  console.log(body);
  const note = await Note.create(body);
  return note;
};
export const getAllNote = async (_id, body) => {
  console.log(body);
  const get = await Note.find();
  return get;
};
export const getNote = async (_id, body) => {
  console.log(body);
  const get = await Note.findById(_id);
  return get;
};
export const updateNote = async (_id, body) => {
  console.log(body);
  const update = await Note.findByIdAndUpdate(
    {
      _id,
    },
    body,
    {
      new: true
    }
  );
  return update;
};
export const deletenote = async (_id, body) => {
  console.log(body);
  const remove = await Note.findByIdAndDelete(_id);
  return remove;
};
export const archiveNote = async (_id) => {
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
export const trashNote = async (_id) => {
  console.log(body);
  const Hide = await Note.findByIdAndUpdate(
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
  return Hide;
};