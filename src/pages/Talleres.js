

function Talleres() {
    return (
        <div className='container padTop subpages padBot main'>
            <h3 className="subpagesh3">A tu Alcance</h3>
            <p>Ut culpa qui ut culpa in. Id est officia dolor minim consequat mollit dolor et dolor pariatur. Quis ea consectetur nulla laborum laborum elit non. Voluptate enim culpa esse adipisicing occaecat ipsum consequat sit Lorem deserunt cillum cupidatat. Eiusmod anim pariatur tempor eu exercitation aliquip minim reprehenderit occaecat anim qui. Non est mollit excepteur adipisicing nulla laborum duis consectetur dolore aliquip minim aliquip culpa.</p>

            <div className="row">
                <div className="col ">
                    <img alt='talleres' src={require('../img/img.png')}/>
                </div>

                <div className="col">
                    <img alt='talleres' src={require('../img/img.png')}/>
                </div>
                
                <div className="col">
                    <img alt='talleres' src={require('../img/img.png')}/>
                </div>
            </div>
            {/* Poner el proximo taller  y el link al formulario para poder inscribirse */}
        </div>
      );
  }
  
  export default Talleres;