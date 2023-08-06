import Notes from '../../../model/note';
import mongodbConnect from '../../../database/dbConn';

export default async function handler(req, res) {
  if (req.method !== 'DELETE'){
    return res.status(405).end();
  };

  try {
    const {id} = req.query;
    mongodbConnect();
    const deleteNote = await Notes.deleteOne({_id: id});
    res.status(200).json({ status: true, delete: deleteNote });

  } catch (error) {
    res.status(500).json({error: 'Note not Deleted!'});
    
  };
};
