import React from 'react'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../utils/api'
import { useQuery } from 'react-query'

const Property = () => {
    const {pathname} = useLocation()
    const id = pathname.split("/").splice(-1)[0]
    const {data, isLoading, isError} = useQuery(["resd", id], ()=>getProperty(id))
    console.log(data)
  return (
    <div>
        this a valid property
    </div>
  )
}

export default Property