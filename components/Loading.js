import {Circle} from "better-react-spinkit"
import Image from "next/image"

const Loading = () => {
    return (
        <center style = {{ display : "grid" , placeItems : "center" , height : "100vh"}}>
            <div>
                <Image src="/assets/whatsapp.png"
                alt=""
                style = {{ marginBottom:10}}
                height ={200} />
                <Circle color="#3CBC28" size={60}/>
            </div>      
        </center>
    )
}

export default Loading



