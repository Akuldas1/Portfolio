import { FaArrowCircleRight,FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
const Footer = () => {
    return (
        <>
            <div className="bg-pink-950 p-10 w-screen" id="contactme">
                <hr></hr>
                <br></br>
                <h1 className="text-5xl text-center text-teal-500 font-semibold">Contact Me</h1>
               <span className="text-center text-white flex gap-3 text-xl font-semibold p-5 items-center justify-center">Get in touch with me <FaArrowCircleRight/>akuldas651@gmail.com</span>
                <h1 className="text-xl text-center font-semibold text-teal-500">Or find me on:</h1>
                <div className="space-x-10 font-semibold text-teal-500 text-xl p-5 flex gap-11 place-content-center">
                <a href='https://www.linkedin.com/in/p-g-akuldas-61116b233'><FaLinkedinIn/></a>
                <a href='https://github.com/Akuldas1'><FaGithub/></a>
                   <a href="https://www.instagram.com/akul_das?igsh=bmdtMDFzd20zbmxz"> <FaInstagram/></a>
                </div>
            </div>
        </>
    )
}

export default Footer