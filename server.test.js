const supertest = require("supertest");
const app = require("./server");
const request = supertest(app);
let authToken;

describe("Test Endpoints", () => {
  it("should return JSON data", async (done) => {
    const res = await request.get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    done();
  });
});

describe("User testing", () => {
  it("should create user", async (done) => {
    const res = await request.post("/users").send({
      name: "vineet",
      email: "vc@gmail.com",
      password: "testPassword",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.type).toEqual("application/json");
    authToken = res.body.token;
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
    done();
  });

  it("should get user details via auth token", async (done) => {
    const res = await request.get("/users/me").set("Authorization", authToken);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({ name: "vineet" });
    expect(res.body).toMatchObject({ email: "vc@gmail.com" });
    done();
  });
});
