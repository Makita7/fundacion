import NuestrasActividades from './NuestrasActividades';

function Inicio() {
    return (
          <div className="main">
              {/* make an alternative image that is only viewed in mobile and hide this one so it is only visible for tablet and pc */}
              <img alt='banner' className='img-fluid' src={require('../img/banner.png')}/>
              <div className='container padTop'>
                <h3>Quien Somos</h3>
                <div className='row'>
                    <div className='col-8'>
                        <p className='quienText'>Laboris sint laboris Lorem et elit occaecat ut veniam aliqua non. Ullamco ullamco ea labore in. Sit non quis minim pariatur sint.

                            Id ullamco reprehenderit ea nostrud commodo magna irure deserunt duis ipsum reprehenderit labore. Duis consequat nulla veniam voluptate aute. Deserunt est aliqua tempor deserunt eu mollit aliqua ipsum est minim nulla incididunt voluptate. Ullamco duis elit ut in pariatur aliqua ullamco esse dolor mollit id eu esse irure. Dolore amet reprehenderit commodo commodo nulla anim est reprehenderit veniam minim qui excepteur aute velit. Cupidatat in pariatur laborum nulla cupidatat labore occaecat pariatur ullamco aliquip et labore aliqua.</p>
                    </div>
                    
                    <div className='col-4'>
                        <img alt='quien somos' className='quienSomos' src={require('../img/logo.png')} />
                    </div>
                    <NuestrasActividades/>
                </div>
              </div>
          </div>
      );
  }
  
  export default Inicio;