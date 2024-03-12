import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { DataSelector } from './Store/DataSelector'

import './style.css'
function StaticsFinals() {
  const statics = useSelector(DataSelector);



  var sum = 0;
  var moy = 0;

statics.map((data) => {
    sum += parseInt(data.Prayer)
    moy = sum * 100 / 150
})




  return (<>

    <div className="row mx-0" >


      <div className="col-lg-6 mb-2">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary"> All Statics  </h6>
          </div>
          <div className="card-body">

            <h2 className="small font-weight-bold"> prayers : {sum} </h2>
            <span className="float-right">   {moy.toFixed(2)} %</span>
            <div className="progress mb-4">
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: moy + "%" }}
                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> {sum} /150</div>
            </div>

          </div>
        </div>


        {statics.map((data) => {
          return <>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Statics Day {data.Day} </h6>
              </div>
              <div className="card-body">

                <h2 className="small font-weight-bold"> prayers : {data.Prayer} </h2>
                <h3 className="small font-weight-bold"> Hizeb Memorized {data.Hizeb_Memorized}</h3>
                <h4 className="small font-weight-bold">Soraa Memorized : {data.Soraa_Memorized} </h4>
                <h5 className="small font-weight-bold"> Hizeb Readed : {data.Hizeb_Readed}</h5>


              </div>
            </div>
          </>
        })


        }



      </div>

      <div className="col-lg-6 mb-4">

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                src="http://localhost/ecomm/admin/img/undraw_posting_photo.svg" alt="..." />
            </div>
            <p>Add some quality, svg illustrations to your project courtesy ounDraw, a
              constantly updated collection of beautiful svg images that you can use
              completely free and without attribution!</p>
            Browse Illustrations on
            unDraw &rarr;
          </div>
        </div>


        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
          </div>
          <div className="card-body">
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
              CSS bloat and poor page performance. Custom CSS classes are used to create
              custom components and custom utility classes.</p>
            <p className="mb-0">Before working with this theme, you should become familiar with the
              Bootstrap framework, especially the utility classes.</p>
          </div>
        </div>

      </div>
    </div>

  </>
  )
}

export default StaticsFinals