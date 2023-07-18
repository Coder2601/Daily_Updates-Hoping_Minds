import React from 'react'

const FormData = ({users,setSubmitted}) => {
    return (
        <div>
            <h2>FormData</h2>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <th>S.No </th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Rating</th>
                    </tr>

                    {users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.designation}</td>
                                <td>{item.rating}</td>
                                <hr />
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={()=>setSubmitted(false)}>Go Back</button>
        </div>
    )
}

export default FormData