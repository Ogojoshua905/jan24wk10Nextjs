import Image from "next/image"
import pic from './ghost.jpg'
import back from './components/styles.module.css'


export default function Home() {

  const user = 'joshua'

  return (
    <>
    <div className={back.home}>
      <div className="grid grid-cols-3 ">


    <Image src='/COD.png' alt="Call of DUTY" width='100' height='100'/>
    <Image src={pic} alt="Call Of Duty" width="100" height="100"/>
    <Image src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg' alt="Call Of Duty" width="100" height="100"/>
    </div>

    <section>
  

    <p>This is the first test by {user} </p>
    <p>This is the second test by {user} </p>
    
    </section>
      </div>
    </>
  )
}