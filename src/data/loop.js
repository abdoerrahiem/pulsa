import React from 'react'
import convert from '../utils/convert'

export default function Operator(pakets) {
  return (
    pakets &&
    pakets.map((paket) => (
      <option key={paket._id} value={paket._id}>{`${paket.name} (Rp. ${convert(
        paket.price
      )})`}</option>
    ))
  )
}
