import React, { useState, useEffect } from 'react'
import VideoBackground from '../../components/VideoBackground';
import { Item, ItemImage, Grid } from './styles'
import { Link } from 'react-router-dom';

export default function Produto({ name, produto }) {
    const [currentImage, setCurrentImage] = useState('')

    useEffect(() => {
		if (produto.images.big > 0) {
			setCurrentImage(produto.images.big[0])
		}
	}, [])
	
	function changeImage(index) {
		console.log(produto.images.big[index])
		setCurrentImage(produto.images.big[index])
	}

    return (
        <>
            <VideoBackground title={`Linha ${name}`} subtitle="" />
            
			<div className="custom-container">
				<div className="container mt-0 description-box">
					<div className="row title">
						<span className="title-text">
							MESA
							<span id="strong" class="text-uppercase">
								{` ${produto.name}`}
							</span>
						</span>
					</div>
					<div className="row">
						<div className="underline-black"></div>
					</div>
					<p>
                    	{
                        	produto.descricao.map(descricao => (
                            	(<>{descricao}<br /></>)
                        	))
                    	}
					</p>
				</div>

				<div className="image-box">
					<img className="bigger" id="main-mesa" src={currentImage} alt="mesa1" />
					<ul className="colors text-center small">
                		{
							produto.images.small.map((img, i) => (
								<Item key={i} className="inline-block float-left" id="table-1" data-img="1" url={img} onClick={() => changeImage(i)}>
									<ItemImage className="bg" url={img} />
								</Item>  
							))
						}
					</ul>
				</div>
			</div>

			<div className="main-bottom">
				<div className="grid-6 clearfix">
				<h4 className="secondary-text">CORES</h4>
		        	<div className="float-left dimensions-box">
			        	<h5 className="light upper">Tecido</h5>
			        	<img src="http://www.globilhares.com.br/r/w20-h20/color_bg/3_1.png" alt="cor" />
			        	<img src="http://www.globilhares.com.br/r/w20-h20/color_bg/1_1.png" alt="cor" /><br />
			        	<img src="http://www.globilhares.com.br/r/w20-h20/color_bg/5_1.png" alt="cor" />
			        	<img src="http://www.globilhares.com.br/r/w20-h20/color_bg/4_1.png" alt="cor" /><br />
			        	<img src="http://www.globilhares.com.br/r/w20-h20/color_bg/6_1.png" alt="cor" />
			        	<img src="http://www.globilhares.com.br/r/w20-h20/color_bg/2_1.png" alt="cor" /><br />
		        	</div>
				</div>

				<div className="grid-6 clearfix dimensions">
					<h4 className="light upper secondary-text">MEDIDAS</h4>
					<Grid>
						{
							produto.medidas.map(m => (
								<>
									<div className="float-left dimensions-box">
										<h5 className="light upper secondary-text">Tam. Externo</h5>
										<p>{m.externo}</p>
									</div>
									<div className="float-left dimensions-box">
										<h5 className="light upper secondary-text">Tam. Interno</h5>
										<p>{m.interno}</p>
									</div>
								</>
							))
						}
		        	</Grid>
				</div>

				<div className="clearfix accessories">
					<div className="grid-5 accessories">
			        	<h4 className="light upper secondary-text">ACESSÓRIOS</h4>
		            	<p className="acessorios-desc">
			            	Suporte de Tacos <br />Triângulo e Jogo de Bolas <br />Giz Profissional <br />
						</p>
		        	</div>
					<Link to="/contato" className="float-right color-white text-center bg-red transition-100 budget">Peça o orçamento</Link>
				</div>
			</div>

        </>
    )
}