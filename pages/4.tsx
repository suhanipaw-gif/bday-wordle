import Image from 'next/image'

export default function Fourth() {
  return (
    <div className="relative w-full h-[100vh] flex flex-col gap-10 md:gap-0 items-center justify-center overflow-hidden">
      
      {/* 40% shows more of the bottom! */}
      <img
        src="https://i.postimg.cc/4dFZ7VkL/Whats-App-Image-2026-10-30-at-10-30-03-PM.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] z-[-1]"
      />

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 relative z-10">
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
        
        {/* THE NEW PINK TEXT: Custom Hex Color + Black Outline + Heavy Shadow */}
        <h1 className="text-[#FF1493] font-black text-4xl md:text-5xl max-w-[80vw] text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] [-webkit-text-stroke:1.5px_black]">
          {'happy birthday sigma:)'}
        </h1>
        
        <Image src="/cat-jump.gif" alt="" width={100} height={100} />
      </div>

      {/* THE NEW PINK PARAGRAPH */}
      <p className="text-[#FF1493] font-extrabold text-xl md:text-2xl max-w-[90vw] text-center relative z-10 px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] [-webkit-text-stroke:1px_black]">
        {
          "i hope you have a wonderful day and i can't wait to sit in between marushka and samarjit and also go to mumbai/goa/imagica and all the places that we know"
        }
      </p>
      
    </div>
  )
}
