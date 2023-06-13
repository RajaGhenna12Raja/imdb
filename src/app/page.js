import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image src='/favicon.png' alt='logo' height={30} width={30}/>
      <h1>HOME</h1> 
    </>
     
  )
}