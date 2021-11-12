import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4500/myorder`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])
 

    const handleDelete = id => {
        const url = `http://localhost:4500/myorder/${id}`
        const procced = window.confirm('are you sure??')
        if (procced) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        
                        alert('deleted')
                        const availableUser = order.filter(booking => booking._id !== id)
                        setOrder(availableUser)
                    }

                })
        }
    }
    return (
        <div>
            <ul>
                {
                    order.map(booking => <li className='d-flex justify-content-between border-1 border border-secondary m-3 w-50' key={booking._id}>

                        {booking?.product}
                        {booking ?
                            <button className='btn-info' onClick={() => handleDelete(booking._id)}>delete</button>
                            : <p></p>}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageOrder;