import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  registroAcademico: {
    type: String,
    required: true,
    unique: true,
  },
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
