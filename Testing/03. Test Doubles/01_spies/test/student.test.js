import createStudent from "../student";

describe("Student", () => {
    it("can create a student passing an id and name", () => {
        const student = createStudent(2);
        expect(student.id).toBe(2);
    });

    it("throws an error if id is not passed", () => {
        expect(() => createStudent()).toThrow();

        // You can be more specific
        expect(() => createStudent()).toThrow(Error);
        const msg = "Invalid student: it doesn't have an id";
        expect(() => createStudent()).toThrow(msg);
      });
});
