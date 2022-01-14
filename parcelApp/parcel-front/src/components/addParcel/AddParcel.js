import React, { useState } from "react"
import "./AddParcel.css"

function AddParcel({ setParcels, setLoginUser }) {
  const [parcel, setParcel] = useState({
    parcelInfo: "",
    parcelCost: "",
    parcelAddress: "",
    senderName: "",
    senderAddress: "",
    senderPhone: "",
    receiverName: "",
    receiverAddress: "",
    receiverPhone: "",
  })

  const [show, setShow] = useState("")

  const handelChange = (e) => {
    const { name, value } = e.target

    setParcel({
      ...parcel,
      [name]: value,
    })
  }

  const handelSubmit = () => {
    const { parcelInfo, parcelCost, parcelAddress, senderName, senderAddress, senderPhone, receiverName, receiverAddress, receiverPhone } = parcel

    if (parcelInfo && parcelCost && parcelAddress && senderName && senderAddress && senderPhone && receiverName && receiverAddress && receiverPhone) {
      setParcels((prev) => prev.concat({ parcelInfo, parcelCost, parcelAddress, senderName, senderAddress, senderPhone, receiverName, receiverAddress, receiverPhone }))

      setShow("")
    } else {
      alert("All fields are compulsory")
    }
  }

  function logOut() {
    setLoginUser()
  }
  function showForm() {
    setShow("show")
  }

  return (
    <div>
      <div className="nevbar">
        <ul>
          <li>
            <button className="btn" id="btn1" onClick={showForm}>
              +Add Parcel
            </button>
          </li>
          <li className="last">
            <button className="btn" id="btn2" onClick={logOut}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
      {show ? (
        <div className="login" id="login">
          <h3>Parcel Info</h3>
          <input className="input" type="text" placeholder="Parcel Info" name="parcelInfo" onChange={handelChange} />
          <input className="input" type="text" placeholder="Parcel Cost" name="parcelCost" onChange={handelChange} />
          <input className="input" type="text" placeholder="Address1" name="parcelAddress" onChange={handelChange} />
          <h3>Sender's Details</h3>
          <input className="input" type="text" placeholder="senders name" name="senderName" onChange={handelChange} />
          <input className="input" type="text" placeholder="senders address" name="senderAddress" onChange={handelChange} />
          <input className="input" type="number" placeholder="senders phone" name="senderPhone" onChange={handelChange} />
          <h3>Receiver's Details</h3>
          <input className="input" type="text" placeholder="Receiver Name" name="receiverName" onChange={handelChange} />
          <input className="input" type="text" placeholder="Receiver address" name="receiverAddress" onChange={handelChange} />
          <input className="input" type="number" placeholder="Receiver phone" name="receiverPhone" onChange={handelChange} />
          <div className="button" onClick={handelSubmit}>
            Add Parcel
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default AddParcel
