import { useEffect, useState } from "react"
import Card from "../components/phoneCard"
import axios from "axios";


function MainPage(props) {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5005/phones`)
            .then((response) => {
                setPhones(response.data);
                console.log(response.data);
              })
              .catch((err) => console.log("There is an error", err));
          }, []);
    

    return(
        <div>
            <h1>Check our Phones!</h1>
            {phones.map((allPhones) => {
                return(
                    <div>
                    <Card 
                        key={allPhones.id}
                        price={allPhones.price}
                        manufacturer={allPhones.manufacturer}
                        image={allPhones.imageFileName}
                    />
                    </div>
                )
            })}

        </div>
    )
}

export default MainPage