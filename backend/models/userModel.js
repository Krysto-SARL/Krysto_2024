import mongoose from 'mongoose'

const userShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vous devez ajouter un nom d'utilisateur"],
    },
    email: {
      type: String,
      required: [true, 'Vous devez entrer une adresse email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Vous devez entrez un mot de passe'],
      minlength: 6,
      select: false,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isResseler: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const User = mongoose.model('User', userShema)
export default User
