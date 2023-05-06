import { Link } from "react-router-dom"

function PhoneCard({name, price, manufacturer, image}) {
    return(
        <div>

                    <div>
                        {name}
                    </div>
                    <div>
                        {price}
                    </div>
                    <div>
                        {manufacturer}
                    </div>
                    <img src={image} alt="phone-img" />
                    <Link><button>Read More</button></Link>

        </div>
    )
}

export default PhoneCard;