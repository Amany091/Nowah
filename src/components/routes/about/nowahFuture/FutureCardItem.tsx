import Image from 'next/image';

type Props = {
    reverse?: boolean;
    title: string;
    description: string;
    image: string
}

export default function FutureCardItem({ description, image, title, reverse }: Props) {
  return (
    <div 
    dir='rtl'
    className={`flex flex-col md:flex-row items-center gap-6 ${reverse ? 'md:flex-row-reverse' : ''} mb-3`}>
      
      {/* Image + Line */}
      <div className="relative items-center">
        
        {/* Image Card */}
        <div className="relative w-126 h-126 backdrop-blur-[53.4px] border border-white/40 bg-white/10 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover p-6.25"
          />
        </div>

        {/* Line */}
        <hr className={`w-40 md:w-48 border-2 border-green-normal md:rotate-90 absolute md:top-1/2 top-full left-[35%] ${reverse? 'md:left-[81%]' :'md:right-[81%]' } `} />
      </div>

      {/* Text */}
      <div className='text-center md:text-start'>
        <p className="text-2xl md:text-3xl font-semibold text-green-normal mb-2">
          {title}
        </p>
        <p className="text-gray-200 text-base md:text-lg font-medium font-changa">
          {description}
        </p>
      </div>
    </div>
  );
}
