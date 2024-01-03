import mongoose from 'mongoose'

const subscriptionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    subscriptionPlan: {
      annualPrice: {
        type: Number,
        required: true,
      },
      monthlyPrice: {
        type: Number,
        required: true,
      },
    },

    subscriptionImage: {
      type: String,
      required: true,
    },

    subscriptionCategory: {
      type: String,
      enum: ['pro', 'particulier', 'association'],
      default: 'particulier',
    },

    subscriptionType: {
      type: String,
      enum: ['Villa', 'Appartement', 'Maison', 'Terrain', 'Local commercial'],
      default: 'Appartement',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const Subscription = mongoose.model('Subscription', subscriptionSchema)

export default Subscription
