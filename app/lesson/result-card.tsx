
import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = { 
value: number;
variant: "points" | "hearts";
};

export const ResultCard = ({value, variant}: Props) => {
const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

    return (
        <div
        className={cn(
            "rounded-2xl border-2 w-full",
            variant === "points" && "bg-purple-400 border-purple-600",
            variant === "hearts" && "bg-rose-400 border-rose-600",
        )}>
            <div className={cn(
            "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
            variant === "hearts" && "bg-rose-600",
            variant === "points" && "bg-purple-600",
            )}>
                {variant === "hearts" ? "Hearts Left" : "Total XP"}

            </div>
            <div
            className={cn(

                "rounded-xl bg-white items-center flex justify-center p-6 font-bold text-lg",
                variant === "hearts" && "text-rose-600",
                variant === "points" && "text-purple-600",
            )}>
                <Image
                alt="icon"
                src={imageSrc}
                height={30}
                width={30}
                className="mr-1.5"
                />
                {value}

            </div>

        </div>
    );
};