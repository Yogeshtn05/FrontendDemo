import React from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
  return (
    <div>
    <form>
    <br/><br/>
        <label>Name</label>
        <input type="text"/>
        <br/><br/>
        <label>Email</label>
        <input type="email"/>
        <br/><br/>
        <label>Address</label>
        <input type="text"/>
        <br/><br/>
        <button>Update</button>
        <button>
              <Link to = "/"> Home</Link>
              </button>
    </form>
</div>
  )
}

export default UpdateUser