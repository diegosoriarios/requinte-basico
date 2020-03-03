import React from 'react'
import VideoBackground from '../../components/VideoBackground'

function Contato() {
    return (
        <>
            <VideoBackground title="" subtitle="" />
            <center>
            <section id="contact" class="parallax-section">
                <div class="container">
                    <div class="row">

                    <div class="col-md-12 col-sm-12">				   
                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                            <br/>
                            <h2>Entre em contato!</h2>
                            <p>Para mais detalhes ou orçamentos, preencha o formulário de contato.</p>
                    </div>
                    </div>

                    <div class="col-md-12 col-sm-12">
                    <div class="wow fadeInUp" data-wow-delay="0.4s">
                        <form id="contact-form" action="#" method="get">
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" class="form-control" name="name" placeholder="Name" required="" />
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required="" />
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <input type="produto" class="form-control" name="produto" placeholder="Produto" required="" />
                                </div>
                                <div class="col-md-9 col-sm-12">
                                    <textarea class="form-control" rows="5" name="message" placeholder="Message" required=""></textarea>
                                </div>
                                <div class="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                                    <button id="submit" type="submit" class="form-control" name="submit">Send Message</button>
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