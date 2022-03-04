
function SomosSuyas() {
  return (
        <div className='container padTop subpages padBot main'>
            <h3 className="subpagesh3">Somos Suyas</h3>
            <img alt='banner' className='img-fluid' src={require('../img/bannerSomosSuyas.png')}/>
            <p>Ut culpa qui ut culpa in. Id est officia dolor minim consequat mollit dolor et dolor pariatur. Quis ea consectetur nulla laborum laborum elit non. Voluptate enim culpa esse adipisicing occaecat ipsum consequat sit Lorem deserunt cillum cupidatat. Eiusmod anim pariatur tempor eu exercitation aliquip minim reprehenderit occaecat anim qui. Non est mollit excepteur adipisicing nulla laborum duis consectetur dolore aliquip minim aliquip culpa.</p>

            <div className="row">
                <div className="col ">
                    <img alt='somos suyas' src={require('../img/img.png')}/>
                </div>

                <div className="col">
                    <img alt='somos suyas' src={require('../img/img.png')}/>
                </div>
                
                <div className="col">
                    <img alt='somos suyas' src={require('../img/img.png')}/>
                </div>
            </div>

            <h3 className="subpagesh3 padTop">Próximo Encuentro</h3>
            <h5 className='masinfoh5'>Fecha:</h5>
            <h5 className='masinfoh5'>Lugar:</h5>
            <h5 className='masinfoh5'>Inscripción:</h5>
        </div>
    );
}

export default SomosSuyas;
