export const validateStudent = student => {
    return Boolean(student.id && student.id > 0);
}
