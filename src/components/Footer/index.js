import React from 'react'

function Footer() {
    return (
        <footer>
	        <div className="container-fluid pt-5 pb-5 bg-dark text-light">
		        <div className="container">
			        <div className="row">					
				        <div className="col-md-3">
					        <div className="row">
						        <h5>REDES SOCIAIS</h5>
					        </div>
					        <div className="row mb-4">
						        <div className="underline bg-light"></div>
					        </div>
					        <div className="row">
						        <div className="col-md-3 col-sm-3">
							        <a href="https://instagram.com/requintebasicobrasil?igshid=1uia5q2gwn7pd" target="_blank"><img src={require('../../assets/img/instagram.png')} className="social-icon" /></a>
						        </div>
						        <div className="col-md-3 col-sm-3">
							        <a href="https://www.facebook.com/requintebasicobrasil/" target="_blank"><img src={require('../../assets/img/facebook.png')} className="social-icon" /></a>
						        </div>
						        <div className="col-md-3 col-sm-3">
							        <a href="https://api.whatsapp.com/send?phone=5554997064410" target="_blank"><img src={require('../../assets/img/whatsapp.png')} className="social-icon" /></a>
						        </div>
					        </div>
				        </div>

        				<div className="col-md-3"></div>

    				    <div className="col-md-3"></div>

				    <div className="col-md-3">
					    <div className="row">
    						<h5>© DEMI INC.</h5>
					    </div>
					    <div className="row mb-4">
    						<div className="underline bg-light"></div>
					    </div>
					    <div className="row">
    						<div className="col-md-3 col-sm-3">
	    						<a href="#"><img src={require('../../assets/img/demi.png')} className="social-icon" /></a>
		    				</div>
			    		</div>
				    </div>
			    </div>
		    </div>
	    </div>
	    <div className="container-fluid bg-dark text-light">
    		<center> Requinte Básico</center>
    	</div>
    </footer>
    )
}

export default Footer