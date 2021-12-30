const app = require("../server");
const UserModel = require("../models/User");
const mongoose = require("mongoose");
const supertest = require("supertest");
const config = require('config');
const db = config.get('mongoURI_Test');

beforeAll((done) => {
  mongoose.connect(db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterAll((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

test("Signup for new User", async () => {
  const data = {
    name: "Mohammed Refaat",
    email: "mohrefaat98@gmail.com",
    password: "#Mr12345"
  };
  await supertest(app).post("/api/users/Signup")
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body.newUser._id).toBeTruthy();
      expect(response.body.newUser.name).toBe(data.name);
      expect(response.body.newUser.email).toBe(data.email);

      // Check data in the database
      const post = await UserModel.findOne({ _id: response.body.newUser._id });
      expect(post).toBeTruthy();
      expect(post.title).toBe(data.title);
      expect(post.content).toBe(data.content);
    });
});

test("Login for new User", async () => {
  const data = {
    name: "Mohammed Refaat",
    email: "mohrefaat98@gmail.com",
    password: "#Mr12345"
  };
  await supertest(app).post("/api/users/Login")
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body.status).toBe("OK");
    });
});
