import createStudent from "../student";

describe("student.fetch", () => {
    const fetchStudent = () => Promise.resolve({ username: "Bret" });

    it("returns data", async () => {
        const student = createStudent(1, "", fetchStudent);
        const data = await student.fetch();
        expect(data.username).toBe("Bret");
    });
});
