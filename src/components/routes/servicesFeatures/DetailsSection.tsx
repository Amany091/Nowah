import DetailsCard from './DetailsCard';
import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper';

type Props = {
    steps: {
        title: React.ReactNode|undefined;
        image: string;
        description: string;
    }[]
}

export default async function DetailsSection({steps}: Props) {
  return (
    <NoisBackgroundWrapper>
        <section className="relative py-20 overflow-hidden">
        <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-linear-to-b from-white via-green-normal to-midnight-normal" />

            <div className="container mx-auto flex flex-col gap-16 relative z-10">
                {steps.map((step, index) => {
                const isLeft = index % 2 !== 0;

                return (
                    <DetailsCard
                        key={index}
                        step={step}
                        isLeft={isLeft}
                    />
                )
            })}
            </div>
        </div>
    </section>
    </NoisBackgroundWrapper>
  )
}