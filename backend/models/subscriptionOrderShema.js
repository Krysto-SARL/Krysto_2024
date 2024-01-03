import mongoose from 'mongoose'

const subscriptionOrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    subscription: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Subscription',
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    totalAmount: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: {
      type: Date,
    },
    isActivated: { type: Boolean, required: true, default: false },
    activatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const SubscriptionOrder = mongoose.model(
  'SubscriptionOrder',
  subscriptionOrderSchema,
)

export default SubscriptionOrder
