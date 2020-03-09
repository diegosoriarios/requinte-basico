import React from 'react'
import VideoBackground from '../../components/VideoBackground'

function Contato() {
    return (
        <>
            <VideoBackground title="" subtitle="" display="40vh"/>
            <center>
            <section id="contact" className="parallax-section">
                <div className="container">
                    <div className="row">

                    <div className="col-md-12 col-sm-12">				   
                    <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                            <br/>
                            <h2>Entre em contato!</h2>
                            <p>Para mais detalhes ou orçamentos, preencha o formulário de contato.</p>
                    </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                    <div className="wow fadeInUp" data-wow-delay="0.4s">
                        <form id="contact-form" action="#" method="get">
                                <div className="col-md-6 col-sm-6">
                                    <input type="text" className="form-control" name="name" placeholder="Name" required="" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <input type="email" className="form-control" name="email" placeholder="Email" required="" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <input type="produto" className="form-control" name="produto" placeholder="Produto" required="" />
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <textarea className="form-control" rows="5" name="message" placeholder="Message" required=""></textarea>
                                </div>
                                <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                                    <button id="submit" type="submit" className="form-control" name="submit">Send Message</button>
                                </div>
                            </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
            </center>
        </>
    )
}

export default Contato