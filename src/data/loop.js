import React from 'react'
import { Jumbotron, Form } from 'react-bootstrap'

export default function Operator(pakets) {
  return (
    pakets &&
    pakets.map((paket) => (
      <option
        key={paket._id}
        value={paket._id}
      >{`${paket.name} (Rp. ${paket.price})`}</option>
    ))
  )
}
