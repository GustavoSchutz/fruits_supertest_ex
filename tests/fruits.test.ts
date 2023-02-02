import app from "../src/app";
import supertest from "supertest";
import faker from "@faker-js/faker";
import httpStatus from "http-status";



const api = supertest(app);

describe("POST /fruits", () => {
    it ("should return CONFLICT(409) when fruit already exists", async () => {
        const postFruitsBody = {
            name: faker.lorem.word(6),
            price: 1.65
        }
        
        const response = await api.post("/fruits").send(postFruitsBody);
        expect(response.status).toBe(httpStatus.CONFLICT);
    })
})
