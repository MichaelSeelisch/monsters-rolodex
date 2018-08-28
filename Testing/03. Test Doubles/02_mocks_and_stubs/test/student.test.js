import createStudent from "../student";

describe("student.fetch", () => {
    it("returns data", async () => {
        const student = createStudent(1);
        const data = await student.fetch();
        expect(data.username).toBe("Bret");
    });
});
