import { useState } from "react";
import { IStudent } from "../types";
import { validateStudent } from "../utils/validation";


const useAddForm = (initial: IStudent, onSubmit: (std:IStudent) => void) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorsList, setErrorsList] = useState<string[]>([]);
  const [student, setStudent] = useState(initial);

  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  };

  const handleSubmit = () => {
    const newStudent = { ...student, id: Date.now().toString() };

    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
    }
  };

  const handleClear = () => {
    setStudent(initial);
  };

  const handleCoursesChange = (list: string[]) => {
    setStudent({ ...student, coursesList: list });
  };

  return {
    isOpen,
    errorsList,
    student,
    setIsOpen,
    setErrorsList,
    setStudent,
    handleClear,
    handleChange,
    handleSubmit,
    handleCoursesChange,
  };
};

export default useAddForm;
