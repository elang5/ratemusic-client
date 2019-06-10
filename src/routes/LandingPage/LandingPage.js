import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import SearchForm from '../../components/SearchForm/SearchForm'

export default function LandingPage() {
  return (
    <>
      <SearchForm/>
      <div className="landing-page-container">
        <h1 className="title">Welcome to Rate Music!</h1>
        <p>This was an app that I built inspired by my love for music and music reviews. I have always used music review services to find music and I have always wished there was an option to listen to an album directly from a review that has been posted.</p>
        <p>RateMusic allows you to search for any album and post reviews for it. An aggragated score is created based on the total amount of reviews that have been submitted. </p>
        <p>Click on an album to see its reviews and create a review yourself! You can also click on the link at the top to listen to it on Spotify!</p>
        <p>In order to post a review, please create an account on the registration page in the navigation menu on the left. You will then be redirected to log in and from here you can post reviews. A testing account is provided within the input fields as placeholders if you would prefer to not create account.</p>
        <div className="btn-container">
        <button className="homepage-btn">
          <Link className="homepage-link" to={"/albums"}>Check it out here!</Link>
        </button>
        </div>

      </div>
    </>
  )
}
