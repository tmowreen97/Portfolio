import Projects from "../components/Projects";
import NavBar from "../components/NavBar";
import Projects_Second from "../components/Projects_Second";

const MyProjects = () => {
  return (
    <div className='w-screen min-h-screen bg-cover bg-center custom-img bg-fixed bg-repeat'>
      <NavBar/>
      <Projects_Second/>
    </div>
  )
}

export default MyProjects;