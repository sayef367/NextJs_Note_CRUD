import mongoose from "mongoose";

export default async function mongodbConnect() {
  try {
    // mongoose.set("strictQuery", false);
    // Connect to the MongoDB cluster
    await mongoose.connect('mongodb://127.0.0.1:27017/nextjsNoteCRUD', { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      })
    .then(() => console.log('DB connecton successful'))
    .catch(err => console.log(err));

  } catch (e) {
    res.status(400).json({error: "could not connect"});
  };
};
