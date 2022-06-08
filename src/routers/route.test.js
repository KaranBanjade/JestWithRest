
const request = require('supertest');
const app = require('../index.js');
// const request = supertest(app)
describe('Health Test', () => {
    test('Health', async () => {
        let response = await request(app).get("/health")
        expect(response.statusCode).toBe(200);
    })
})

describe("Insert Data Test", () => {
    test("Insert", async () => {
        let response = await request(app)
            .post("/insert")
            .send(
                {
                    "topic": "Test Blog",
                    "author": "Test user",
                    "description": "This is the test blog that we can create",
                    "tags": "test, this, blog, first"
                }
            )
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Data Added Successfully");
    })
})

describe("Get Data Test", () => {
    test("Get", async () => {
        let response = await request(app)
            .get("/get/1")
        expect(response.statusCode).toBe(200);
        let respJson = JSON.parse(response.text);
        for (data in respJson) {
            expect(respJson[data]).Not.toBeNull();
            expect(respJson[data]).toBeDefined();
        }
    })
})

describe("Update Data Test", () => {
    test("Update", async () => {
        let response = await request(app)
            .put("/update/2")
            .send(
                {
                    "topic": "Test Blog updated",
                    "author": "Test user updated",
                    "description": "This is the test blog that we can create updated",
                    "tags": "test, this, blog, second, updated"
                }
            )
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Data Updated Successfully");
    })
})

describe("Delete Data Test", () => {
    test("Delete", async () => {
        let response = await request(app)
            .delete("/delete/3")
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("Data Deletd Successfully")
    })
})

describe("Filter Data Test", () => {
    test("Filter", async () => {
        let response = await request(app)
            .get("/filter")
            .send(
                {
                    "field": "tags",
                    "queryString": "test"
                }
            )
        let resJson = JSON.parse(response.text);
        resJson.forEach((res)=>{
            expect(res).toBeDefined();
            expect(res).not.toBeNull();
            for (dat in res) {
                expect(res[dat]).toBeDefined();
                expect(res[dat]).not.toBeNull();
            }
        })
    })
})
