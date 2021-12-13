const bcrypt = require('bcryptjs');
const db = require('../data/database');

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    this.address = {
      street,
      postal,
      city,
    };
  }
  async signup() {
    // const hashedpassword = await bcrypt.hash(this.password, 12);
    await db.getDb().collection('users').insertOne({
      email: this.email,
      password: this.password,
      fullname: this.fullname,
      address: this.address,
    });
  }
}
module.exports = User;
