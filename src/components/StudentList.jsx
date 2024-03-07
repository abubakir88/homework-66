import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const StudentList = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    number: "",
  });

  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      number: "+998987654321",
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998991234567",
    },
  ]);

  const addToList = (e) => {
    e.preventDefault();
    setStudents([student, ...students]);
    setStudent({
      firstName: "",
      lastName: "",
      number: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={addToList} className="w-50 mx-auto">
        <div className=" d-block pt-5">
          <label className="form-label fs-3" htmlFor="firstName">
            Firstname
          </label>
          <input
            required
            className="form-control p-2 "
            type="text"
            name="firstName"
            id="firstName"
            value={student.firstName}
            onChange={(e) =>
              setStudent({
                ...student,
                firstName: e.target.value,
              })
            }
          />

          <label className="form-label pt-4 fs-3" htmlFor="lastName">
            Lastname
          </label>
          <input
            required
            className="form-control p-2"
            type="text"
            name="lastName"
            id="lastName"
            value={student.lastName}
            onChange={(e) =>
              setStudent({
                ...student,
                lastName: e.target.value,
              })
            }
          />

          <label className="form-label pt-4 fs-3" htmlFor="number">
            Number
          </label>
          <input
            required
            className="form-control p-2"
            type="text"
            name="number"
            id="number"
            placeholder="+998987654321"
            value={student.number}
            onChange={(e) =>
              setStudent({
                ...student,
                number: e.target.value,
              })
            }
          />
          <button
            type="submit"
            className=" btn bg-secondary text-white mt-5  p-3 w-25 d-block mx-auto"
          >
            Add new Student
          </button>
        </div>
      </form>
      <br />
      <div className="mt-5 text-center pb-4">Students</div>
      <div>
        <Table bordered hover className="container mx-auto">
          <thead>
            <tr>
              <th className="fs-3">No</th>
              <th className="fs-3">Firstname</th>
              <th className="fs-3">Lastname</th>
              <th className="fs-3">Number</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                {students.map((st, i) => (
                  <div key={st.id}>
                    <h4 className="mt-5">{i + 1}.</h4>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {students.map((st) => (
                  <div key={st.id}>
                    <h4 className="mt-5"> {st.firstName}</h4>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {students.map((st) => (
                  <div key={st.id}>
                    <h4 className="mt-5"> {st.lastName}</h4>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {students.map((st) => (
                  <div key={st.id}>
                    <h4 className="mt-5">{st.number}</h4>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentList;
