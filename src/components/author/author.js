import ProfilePic from "../../assets/profilepic.jpg";
import "./author.css";


function Author() {

   
        return (
            <div className="author-block">
               <div className="author-block-left-column">
                    <div className="author-block-name"><h4>Auteur</h4></div>
                    <div className="author-block-pp">
                        <img src={ProfilePic} alt="author-avatar" />
                    </div>
                </div>
                <div className="author-block-right-column">
                    <div className="author-bio">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget consequat libero, ut facilisis magna. Praesent faucibus hendrerit nisi eu pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at orci vitae lorem pellentesque tempor.</p>
                    </div>
                    <div className="author-social"></div>
                </div> 
            </div>
        )
    }

    


export default Author;