import React from 'react'
import { Jumbotron, Form } from 'react-bootstrap'

export default function Operator(operator) {
  return operator.map((op) => (
    <option
      key={op.id}
      value={`${op.name} (Rp. ${op.price})`}
    >{`${op.name} (Rp. ${op.price})`}</option>
  ))
}
