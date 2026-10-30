import Image from 'next/image'

export default function Fourth() {
  return (
    <div className="relative w-full h-[100vh] flex flex-col gap-10 md:gap-0 items-center justify-center overflow-hidden">
      
      {/* This is your background image using the standard HTML img tag */}
      <img
        src="https://i.postimg.cc/4dFZ7VkL/Whats-App-Image-2026-10-30-at-10-30-03-PM.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 relative z-10">
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
        <h1 className="text-white font-bold text-3xl max-w-[80vw] text-center">
          {'happy birthday sigma:)'}
        </h1>
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
      </div>

      <p className="text-white font-semibold text-xl max-w-[90vw] text-center relative z-10 px-4">
        {
          "i hope you have a wonderful day and i can't wait to sit in between marushka and samarjit and also go to mumbai/goa/imagica and all the places that we know we're never reaching"
        }
      </p>
      
    </div>
  )
}
