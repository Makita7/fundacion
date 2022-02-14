
const socialElement = (props) => {
    return(
        <li className="">{props.name}
            <img alt={props.name} href={props.site}/>
        </li>
    );
}

const Socialmedia = (props) => {
    return(
        <ul>
            <socialElement to="https://www.instagram.com/" name="instagram" />
        </ul>
    );
}

function Footer() {
    return (
          <footer>
              <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1>Footer</h1>
                        
                    </div>

                    <div className="column">
                        <Socialmedia/>
                    </div>
                </div>
              </div>
          </footer>
      );
  }
  
  export default Footer;
  