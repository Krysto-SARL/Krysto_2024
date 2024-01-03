import mongoose from 'mongoose'

const wasteSchema = mongoose.Schema(
  {
    wasteCategory: {
      type: String,
      enum: [
        'Aluminium',
        'Plastique',
        'Papier',
        'Carton',
        'Déchets alimentaire',
        'Papier confidentiel',
        'Verre',
        'Capsule',
      ],
      required: [true, "Merci d'ajouter un type de dechets"],
      default: 'Plastique',
    },
    plasticType: {
      type: String,
      enum: ['PET', 'PP', 'HDPE', 'PEHD', 'PS', 'PVC', 'PLA', 'Autres', 'MIX'],
    },
    image: {
      type: String,
      required: [true, "Merci d'ajouter une image"],
    },
    description: {
      type: String,
      required: [true, "Merci d'ajouter une description"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const Waste = mongoose.model('Waste', wasteSchema)

export default Waste
