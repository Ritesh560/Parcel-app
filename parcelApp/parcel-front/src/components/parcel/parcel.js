import React, { useState } from "react"

import "./parcel.css"
import AddParcel from "../addParcel/AddParcel"

const Parcel = ({ setLoginUser }) => {
  const [parcels, setParcels] = useState([])

  return (
    <>
      <AddParcel setParcels={setParcels} setLoginUser={setLoginUser} />
      <div>
        {parcels.map((parcel) => (
          <div class="container">
            <div class="box">
              <div class="parcel">
                Parcel Info: <b>{parcel.parcelInfo}</b>
              </div>
              <div class="parcel">
                Parcel Cost: <b>{parcel.parcelCost}</b>
              </div>
              <div class="parcel">
                Parcel Address: <b>{parcel.parcelAddress}</b>
              </div>
            </div>
            <div class="box">
              <div class="parcel">
                Sender's Name: <b>{parcel.senderName}</b>
              </div>
              <div class="parcel">
                Sender's Address: <b>{parcel.senderAddress}</b>
              </div>
              <div class="parcel">
                Sender's Ph: <b>{parcel.senderPhone}</b>
              </div>
            </div>
            <div class="box">
              <div class="parcel">
                Receiver Name: <b>{parcel.receiverName}</b>
              </div>
              <div class="parcel">
                Receiver Address: <b>{parcel.receiverAddress}</b>
              </div>
              <div class="parcel">
                Receiver Ph: <b>{parcel.receiverPhone}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Parcel
