import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profpic from "../../public/images/profile/developer-pic-2.png";
import AnimatedText from '@/components/AnimatedText';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center justify-center text-dark w-full min-h-screen '>
      <Layout  className='pt-0'>
       <div class = "flex items-center justify-center w-full">
       <div className='w-1/2'>
        <Image src = {profpic} alt ="CodeBucks" className='h-50 w-auto ' />
       </div>
       <div className='w-1/2  flex flex-col items-center self-center '>
        <AnimatedText text= "Turning Vision Into Reality With Code And Design" className='!text-8xl'/>
      <p> 
        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
        my latest projects and articles, showcasing my expertise in Metaverse and web 
        development </p>
      </div>
      </div>
      </Layout>
      </main>
    </>
  )  
}
