import React from 'react'
import "../Styles/Home.css"
import img1 from "../Images/home1.png"
import img2 from "../Images/home2.svg"
import img3 from "../Images/home3.png"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section>
        <div className="container">
          <div className='row align-items-center'>
            <div className='col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0'>
              <img src={img1} className='img-fluid' alt="..." />
            </div>
            <div className='col-12 col-lg-7 col-xl-6 order-lg-1'>
              <h6 className='border rounded-pill px-3 py-2 text-muted d-inline-block'>
                <span className='badge badge-pill badge-primary mr-3'>New</span>
                "Say Hello to all"
              </h6>
              <h1 className='display-4 mt-3'>
                "Rediscover"
                <span className='text-primary font-w-5'>Your Lost</span>
                "Items"
              </h1>
              <p class="lead text-muted">Lost Items, Found Connections: Your College's Item Reunion Center</p>
              <Link to="/missing" class="btn btn-primary mr-1">Missing</Link>
              <Link to="/found" class="btn btn-primary mr-2">FoundIt</Link>
              {/* <a class="btn btn-primary mr-1" href="/">Missing</a>
              <a class="btn btn-primary ml-2" href="/">FoundIt</a> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className='tab-content mt-8'>
                <div className='tab-pane fade show active'>
                  <div className='row align-items-center justify-content-between mb-10'>
                    <div className='col-12 col-lg-6 mb-6 mb-lg-0'>
                      <img src={img3} alt="..." className='img-fluid'/>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h4 class="mt-3">FoundIt: Rediscover Treasures, Reunite Belongings</h4>
                        <p class="lead">FoundIt is your campus's dedicated space for discovered treasures. Browse through a curated showcase of items waiting to be reunited with their owners and join the effort to bring lost belongings back to their rightful homes.</p>
                        <p class="mb-0">FoundIt: Explore recovered treasures waiting to reunite with owners on campus. Join the effort to bring lost belongings back home.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className='tab-content mt-8'>
                <div className='tab-pane fade show active'>
                  <div className='row align-items-center justify-content-between mb-10'>
                    <div className='col-12 col-lg-6 mb-6 mb-lg-0'>
                      <img src={img2} alt="..." className='img-fluid'/>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h4 class="mt-3">Lost: Navigating Rediscovery Through Shared Experiences</h4>
                        <p class="lead">Lost & Seek: Report Your Misplaced Items and Begin the Journey to Rediscovery. Navigate the Lost Zone, Share Details, and Let the Campus Community Help You Find What's Missing.</p>
                        <p class="mb-0">Lost & Seek: Your Hub for Misplaced Items. Report the details, navigate the Lost Zone, and empower the campus community to help you reclaim what's missing—one shared experience at a time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home