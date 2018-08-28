import createStudent from "../student";
import * as utils from "../student-utils";

describe("Student", () => {
    const spy = jest.spyOn(utils, "validateStudent");

    afterEach(() => {
        spy.mockClear();
    });

    it("calls the validateStudent function", () => {
        jest.spyOn(utils, "validateStudent");
        createStudent(1, "Aaron");

        expect(utils.validateStudent).toBeCalled();
        expect(utils.validateStudent).toBeCalledWith({ id: 1, name: "Aaron" });
        expect(utils.validateStudent).toHaveBeenCalledTimes(1);

        afterEach(() => {
            spy.mockClear();
        });
    });

    it("calls the validateStudent function", () => {
        createStudent(1, "Aaron");
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it("calls the validateStudent function", () => {
        createStudent(2, "Peep");
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
