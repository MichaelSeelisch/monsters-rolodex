const baseUrl = "https://jsonplaceholder.typicode.com/users/";

export const fetchStudent = async id => {
    const student = await fetch(baseUrl + id);
    return student.json();
};

export const validateStudent = student => {
    return Boolean(student.id && student.id > 0);
}