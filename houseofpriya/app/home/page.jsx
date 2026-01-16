import Image from 'next/image'

const page = () => {
  return (
    <div className="relative h-screen w-full">
      
      <Image
        src="/images/PRIYA GIF.gif"
        alt="background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex items-center justify-center h-full text-white">
  
      </div>

    </div>
  )
}

export default page
