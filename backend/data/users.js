import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    isResseler: false,
  },
  {
    name: 'John Doe',
    email: 'john@mail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    isResseler: true,
  },
  {
    name: 'Jane Doe',
    email: 'jane@mail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    isResseler: false,
  },
]

export default users
