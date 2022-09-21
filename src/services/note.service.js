import Note from '../models/note.model';
//create new note
export const newNote = async (body) => {
  console.log(body);
  const note = await Note.create(body);
  return note;
};
export const getNote = async (body) => {
  console.log(body);
  const get = await Note.findById(id);
  return get;
};
export const updateNote = async (id, body) => {
  console.log(body);
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
export const deletenote = async (id) => {
  console.log(body);
  const remove = await Note.findByIdAndDelete(id);
  return remove;
};
