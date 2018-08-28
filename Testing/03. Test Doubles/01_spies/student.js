import { validateStudent } from "./student-utils";

export default function createStudent(id, name) {
    const student = { id, name };

    if (!validateStudent(student)) {
        throw new Error("Invalid student: it doesn't have an id");
    }

    return student;
}
