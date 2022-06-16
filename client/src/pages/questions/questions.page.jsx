import React, { useState } from 'react'
import './questions.styles.scss'
import { airportData } from '../../data/airportData'
import { cities } from '../../data/gb'
import Layout from '../../components/Layout'

const QuestionsPage = () => {

    const [toFrom, setToFrom] = useState()
    const [location, setLocation] = useState()
    const [getAirport, setAirport] = useState()
    const [getCity, setCity] = useState()


    return (

        <Layout>
            <div className='container full-height'>
                <div className="row justify-content-around">

                    <div className="col-6">
                        <div className="row ">


                            <div className="col-12">

                                <label htmlFor="toFrom" className="form-label">Are you travelling to or from Sheffield?</label>
                                <select id="toFrom" className="form-select" onChange={e => {
                                    setToFrom(e.target.value)
                                    console.log(toFrom)
                                }}>
                                    <option>Choose...</option>
                                    <option>To</option>
                                    <option>From</option>
                                </select>

                            </div>

                            {
                                toFrom !== null && (
                                    <div className="col-12">

                                        <label htmlFor="location" className="form-label">{`Where are you travelling ${toFrom === 'To' ? ' from?' : 'to?'}`}</label>
                                        <select id="location" className="form-select" onChange={e => {
                                            setLocation(e.target.value)
                                            console.log(e.target.value)
                                        }}>
                                            <option>Choose...</option>
                                            <option>Airport</option>
                                            <option>Another city</option>
                                            <option>Somewhere in Sheffield</option>
                                            <option>Transporting goods</option>
                                        </select>

                                    </div>
                                )
                            }


                            {
                                location === "Airport" && (
                                    <div className="col-12">

                                        <label htmlFor="airport" className="form-label">Which airport?</label>
                                        <select id="airport" className="form-select" onChange={e => setAirport(e.target.value)}>
                                            <option>Choose...</option>
                                            {airportData.map((airport, key) => <option key={key}>{airport.name}</option>)}
                                        </select>

                                    </div>
                                )
                            }

                            {
                                location === "Another city" && (
                                    <div className="col-12">

                                        <label htmlFor="city" className="form-label">Which city?</label>
                                        <select id="city" className="form-select" onChange={e => setCity(e.target.value)}>
                                            <option>Choose...</option>
                                            {cities.map((city, key) => <option key={key}>{city.city}</option>)}
                                        </select>

                                    </div>
                                )
                            }

                            <div className="row">
                                <div className="col-3">

                                    <a href='/booking'><button className="btn btn-primary">Next</button></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>

    )
}

export default QuestionsPage