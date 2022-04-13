import "./Home.css";
import DoctorCard from "../Components/DoctorsCards/Cards"
import { useNavigate } from "react-router-dom"


const doctor = [
    {
        id:1,
        title:"Dr. Minati Das",
        Speciality:"Cardiologist",
        price:1500,
        image:"https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg"
    },
    {
        id:2,
        title:"Dr. Subhajit Giri",
        Speciality:"Mediciene",
        price:750,
        image:"https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg?t=st=1649838704~exp=1649839304~hmac=2760800e04eae812e50de8f7f3023e31ec9a5501c11d5ed5417c3ef403cfc4bc&w=900",
    },
    {
        id:3,
        title:"Dr. Susmita Pandit",
        Speciality:"Bone",
        price:500,
        image:"https://img.freepik.com/free-photo/confident-pretty-middle-aged-female-doctor_1262-10444.jpg?w=900",
    }
]






export default function Home(){

const neviget = useNavigate()

    return(
        <div style={{height:"100vh"}}>
            <div className="home_container">
                
            </div>
            <div className="Card_container">
                    {
                        doctor.map((dr)=>{
                            return (
                                <DoctorCard
                                key={dr.id}
                                image={dr.image}
                                title={dr.title}
                                price={dr.price}
                                Speciality={dr.Speciality}
                                handleClick={()=>neviget(`/${dr.Speciality}`)}
                                    />
                            )
                        })
                    }
                </div>
            <div>

            </div>
        </div>
    )
}