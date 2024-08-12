"use client";


import { Button } from "@/components/ui/button";
import { point } from "drizzle-orm/pg-core";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { POINTS_TO_REFILL } from "@/constants";

import { MousePointerSquareDashed } from "lucide-react";
import Image from "next/image";
import { refillHearts } from "@/actions/user-progress";
import { start } from "repl";

import { createStripeUrl } from "@/actions/user-subscription";


type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ 
    hearts, 
    points, 
    hasActiveSubscription 
}: Props) => {
    const [pending, startTransition] = useTransition();

    const onRefillHearts =() => {
        if(pending || hearts === 5 || points < POINTS_TO_REFILL){
            return;
        }
        startTransition(() => { 
             refillHearts().catch(()=>toast.error("Failed to refill hearts"));
        });
    };

    const onUpgrade = () => {
        startTransition(() => {
            createStripeUrl()
            .then((response)=> {
                 if (response.data) {
                     window.location.href = response.data;
                    }
            })
            .catch(()=>toast.error("Something went wrong"));
        });
     };






  return (
    <ul className="w-full ">

      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="heart.svg" alt="Heart" height={120} width={120} />
        <div className="flex-1 ">
          <p className="text-neutral-700 text-base lg:text-2xl font-bold">Refill Hearts</p>
        </div>
        <Button
        onClick={onRefillHearts}
            disabled={
                pending
                ||hearts === 5 
                ||points < POINTS_TO_REFILL 
            } 
        >
            {hearts === 5
            ?"full"
            :(
            <div className="flex items-center">
                <Image 
                src="points.svg"
                alt="Points"
                height={30}
                width={30}
            />
            <p>
                {POINTS_TO_REFILL}
            </p>
            </div>
            
  )

  }
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 boreder-t-2">
        <Image 
        src="/unlimited.svg"
        alt="Unlimited"
        height={120}
        width={120}
        />
        <div className="flex-1">
            <p className="text-neutral-700 text-base lg:text-2xl font-bold">
                Unlimited Hearts
            </p>
        </div>
        <Button
        onClick={onUpgrade}
        disabled={pending}
        >
            {hasActiveSubscription? "settings" : "Upgrade"}
        </Button>
      </div>
    </ul>
  );
};
