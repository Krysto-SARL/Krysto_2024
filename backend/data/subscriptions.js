const subscriptions = [
  {
    subscriptionPlan: {
      annualPrice: 10000,
      monthlyPrice: 1000,
    },
    subscriptionImage: '/images/sample.png', // Lien vers l'image de l'abonnement
    subscriptionCategory: 'pro', // Catégorie de l'abonnement
    subscriptionType: 'Local commercial', // Type de l'abonnement
  },
  {
    subscriptionPlan: {
      annualPrice: 25000,
      monthlyPrice: 2500,
    },
    subscriptionImage: '/images/sample.png',
    subscriptionCategory: 'particulier',
    subscriptionType: 'Maison',
  },
  {
    subscriptionPlan: {
      annualPrice: 12000,
      monthlyPrice: 1200,
    },
    subscriptionImage: '/images/sample.png',
    subscriptionCategory: 'association',
    subscriptionType: 'Appartement',
  },
]

export default subscriptions
