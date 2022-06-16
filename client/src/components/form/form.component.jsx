import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './form.styles.scss'

import { airportData } from '../../data/airportData'

const FormComponent = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [selectedAirport, setAirport] = useState();
    const [quote, setQuote] = useState(0);

    const setAirportPassengerQuote = noOfPassengers => {
        airportData.forEach(airport => {
            if (airport.name === selectedAirport) {
                if (noOfPassengers <= 4) {
                    setQuote(airport.min)
                } else if (noOfPassengers > 4 && noOfPassengers < 6) {
                    setQuote(airport.for6)
                } else if (noOfPassengers >= 6 <= 8) {
                    setQuote(airport.for8)
                } else {
                    return
                }
            }
        })

    }

    const checkPostcode = postcode => {
        const btn = document.getElementById('book-button');
        if (postcode[0] === 'S' || 's') {
            if (isNaN(postcode[1])) {
                console.log('this is invalid')
                btn.classList.add('disabled')
            } else {
                btn.classList.remove('disabled')
                console.log('This is in Sheffield!')
            }
        }
    }

    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="postcode" className="form-label">Postcode</label>
                    <input type="text" className="form-control" id="postcode"
                        onChange={e => checkPostcode(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="airport" className="form-label">Destination</label>
                    <select id="airport" className="form-select" onChange={e => setAirport(e.target.value)}>
                        <option>Choose...</option>
                        {airportData.map((airport, key) => <option key={key}>{airport.name}</option>)}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="numberPassengers" className="form-label">Number of Passengers</label>
                    <input type="number" className="form-control" id="numberPassengers" onChange={e => {
                        setAirportPassengerQuote(e.target.value)
                    }} />
                </div>
                <div className="col-12">
                    <button id='book-button' type="submit" className="btn btn-primary">Book now for £{quote}</button>
                </div>
            </form>
        </div>

    )
}

export default FormComponent