import React from "react";

function Cards(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card_img"/>
                <div className="card__info">
                    <span className="card_categoty">
    A Netflix Originals
                    </span>
                    <h3 className="card_title">
                       {props.title} 
                    </h3>
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TC42Sy-pyI43YPRiSUksygYARsQGiQ&q=dark&rlz=1C1ONGR_enIN997IN997&oq=da&gs_lcrp=EgZjaHJvbWUqCQgBEC4YJxiKBTIMCAAQIxgnGOMCGIoFMgkIARAuGCcYigUyBggCEEUYOzIGCAMQRRhAMgYIBBBFGDkyDQgFEAAYgwEYsQMYgAQyCggGEAAYsQMYgAQyCggHEAAYsQMYgATSAQkyNjE1ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank">
                        <button>Watch Now</button>
                    </a>
    
                </div>
            </div>
    
        </div>
        
        
        
        
        
        </>
    );
}
export default Cards;
