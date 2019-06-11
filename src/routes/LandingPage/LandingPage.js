import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import LandingHeader from '../../components/LandingHeader/LandingHeader'
import albumlist from '../../img/albumlist.png'
import reviewlist from '../../img/reviewlist.png'
import reviewpage from '../../img/reviewpage.png'

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <div className="landing-page-container">
        <div className="description-container">
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
          <h1 className="title">Features</h1>
        </div>
        <div className="screenshots-container">
          <div className="cell">
            <img src={albumlist} alt="albumlist-screenshot"/>
            <p>Click on an album to see its associated reviews and to listen to it on Spotify.</p>
          </div>
          <div className="cell">
            <img src={reviewlist} alt="reviewlist-screenshot"/>
            <p>Click on a review from the review list page to read the review. You can also click on the links at the top of the page to post a review or listen to the album on Spotify! Be sure to create an account or use the test credentials provided in order to post a review.</p>
          </div>
          <div className="cell">
            <img src={reviewpage} alt="reviewpage-screenshot"/>
            <p>Once on the review page, you can click on the album art to go back to the review page. You can also use the provided link to listen to the album in Spotify. </p>
          </div>
        </div>
      </div>
    </>
  )
}
