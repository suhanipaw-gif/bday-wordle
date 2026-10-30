import Image from 'next/image'

export default function Fourth() {
  return (
    <div className="relative w-full h-[100vh] flex flex-col gap-10 md:gap-0 items-center justify-center overflow-hidden">
      
      {/* Dropped from 20% to 10% for more bottom */}
      <img
        src="https://i.postimg.cc/4dFZ7VkL/Whats-App-Image-2026-10-30-at-10-30-03-PM.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] z-[-1]"
      />

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 relative z-10">
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
        
        {/* Changed to Hot Pink and Extrabold */}
        <h1 className="text-pink-500 font-extrabold text-4xl max-w-[80vw] text-center drop-shadow-lg">
          {'happy birthday sigma:)'}
        </h1>
        
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
      </div>

      {/* Changed paragraph to Hot Pink and Bold */}
      <p className="text-pink-500 font-bold text-xl max-w-[90vw] text-center relative z-10 px-4 drop-shadow-lg">
        {
          "i hope you have a wonderful day and i can't wait to sit in between marushka and samarjit and also go to mumbai/goa/imagica and all the places that we know we're never reaching"
        }
      </p>
      
    </div>
  )
}
