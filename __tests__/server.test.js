const { server } = require("../src/server"); // destructing assignment
const supertest = require("supertest");
const mockRequest = supertest(server);
const { db } = require("../src/models/index"); //  db: sequelize from index,

// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe("test end point", () => {
  test("strang end point should give 404 error", async () => {
    const response = await mockRequest.get("/foo");
    expect(response.status).toBe(404);
  });
  test("can add new clothes", async () => {
    const response = await mockRequest.post("/clothes").send(
      {
        type: "jeckat",
        color: "blue",
      },
      10000
    );
    expect(response.status).toBe(201);
  });
  test("if can get all clothes ", async () => {
    const response = await mockRequest.get("/clothes");
    expect(response.status).toBe(200);
  });
  test("if can get one clothes ", async () => {
    const response = await mockRequest.get("/clothes/1");
    expect(response.status).toBe(200);
  });

  test("if can get delete clothes ", async () => {
    const response = await mockRequest.delete("/clothes/1");
    expect(response.status).toBe(204);
  });
  it("if can get update clothes ", async () => {
    const response = await mockRequest.put("/clothes/1");
    expect(response.status).toBe(201);
  });

  ///////foooood
  test("can add new clothes", async () => {
    const response = await mockRequest.post("/clothes").send(
      {
        type: "jeckat",
        color: "blue",
      },
      10000
    );
    expect(response.status).toBe(201);
  });
  test("if can get all food ", async () => {
    const response = await mockRequest.get("/food");
    expect(response.status).toBe(200);
  });
  test("if can get one food ", async () => {
    const response = await mockRequest.get("/food/1");
    expect(response.status).toBe(200);
  });

  test("if can get delete food ", async () => {
    const response = await mockRequest.delete("/food/1");
    expect(response.status).toBe(204);
  });
  it("if can get update food ", async (done) => {
    const response = await mockRequest.put("/food/0");
    expect(response.status).toBe(201);
  });
});
