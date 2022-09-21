import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 bg-dark text-white">
    <div className="container-fluid text-start">
        <div className="row d-flex">
            <div className="col-md-4 mt-md-0 mt-3">
                <div clasNAme="d-flex">
                
                <a className="" href="#"><img src='./../insaid-white-logo.webp'/></a>
         
         
                <a href="#" class="btn btn-dark btn-lg border-light text white float-end" data-bs-toggle="modal" data-bs-target="#contactusmodal">Schedule Call</a>
            
                </div>
            
               
            </div>
            <div>  <h6 className='my-2'>International school of Data Science & AI</h6></div>
  

            <hr className="clearfix w-100 d-md-none pb-0 white"/>
            <div className="footer-copyright text-center mb-2">© 2022 INSAID. All Rights Reserved.
    </div>


        </div>
    </div>

  

</footer>
  )
}

export default Footer
