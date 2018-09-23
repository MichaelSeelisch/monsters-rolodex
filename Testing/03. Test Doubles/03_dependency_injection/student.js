import { validateStudent, fetchStudent } from "./student-utils";

export default function createStudent(id, name, fetchStudent) {
    const student = { id, name };

    if (!validateStudent(student)) {
        throw new Error("Invalid student: it doesn't have an id");
    }

    // Add the fetch function before returning the object
    student.fetch = () => fetchStudent(student.id);

    return student;
}