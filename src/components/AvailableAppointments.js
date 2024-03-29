import React from 'react'
import { useState} from 'react'





    const AvailableAppointments = ({
        appointments,
        deleteAppointment,
        editAppointment,
        clearAppointments,
    }) => {
        const [editedIndex, setEditedIndex] = useState(null);
        const [editedName, setEditedName] = useState("");
        const [editedDate, setEditedDate] = useState("");
     
        const handleEdit = (index) => {
            setEditedIndex(index);
            setEditedName(appointments[index].name);
            setEditedDate(appointments[index].date);
        };
     
        const handleSaveEdit = (index) => {
            editAppointment(index, editedName, editedDate);
            setEditedIndex(null);
            setEditedName("");
        };
     
        const handleCancelEdit = () => {
            setEditedIndex(null);
            setEditedName("");
        };
     
        return (
            <div className="container1">
                <h1>Appointment List</h1>
                <table id="list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {editedIndex === index ? (
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) =>
                                                setEditedName(e.target.value)
                                            }
                                        />
                                    ) : (
                                        appointment.name
                                    )}
                                </td>
                                <td>
                                    {editedIndex === index ? (
                                        <input
                                            type="date"
                                            value={editedDate}
                                            onChange={(e) =>
                                                setEditedDate(e.target.value)
                                            }
                                        />
                                    ) : (
                                        appointment.date
                                    )}
                                </td>
                                <td>
                                    {editedIndex === index ? (
                                        <>
                                            <button id="buton"
                                                onClick={() =>
                                                    handleSaveEdit(index)
                                                }
                                            >
                                                Save
                                            </button>
                                            <button onClick={handleCancelEdit}>
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleEdit(index)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteAppointment(index)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={clearAppointments}>Clear All Appointments</button>
                <button onClick={() => alert("Your appointment has been scheduled!")}>Send</button>
            </div>
        );
    };
    export default  AvailableAppointments;