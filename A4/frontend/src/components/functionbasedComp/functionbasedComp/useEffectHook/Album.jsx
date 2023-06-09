import React, { useEffect, useState } from 'react'

const Album = () => {
    const[albumData, setAlbumData] = useState([]);
    const[isFetched,setFecthed] = useState(false);

    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');

                let resData = await response.json();
                setAlbumData(()=>([...resData]));
                setFecthed(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchApi();
    },[isFetched]);

    return (
        <div>
            Album
            {console.log(albumData)}
            {isFetched?<table>
                <tbody>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                    {albumData.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>:<h2>No data here..!</h2>}
        </div>
    )
}

export default Album