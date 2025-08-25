import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "baryal",
    email: "baryal@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
  {
    name: "kmw",
    email: "kmw@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

export default users;
