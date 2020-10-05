import React from 'react'

export default funtion Detail ({ params }) {
    console.log(params.id)
    return <h1> GIF con id { params.id }</h1>
}