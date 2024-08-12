import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
    activeCourse, 
    points, 
    hearts, 
    hasActiveSubscription
}: Props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", width: "100%" }}>
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="shop">

      <Button className="text-orange-500" variant="ghost">
     <Image src="points.svg" height={28} width={28} alt="Points" className="mr-2" />
     {points}
      </Button>
      </Link>
      <Link href="shop">

      <Button className="text-rose-500" variant="ghost">
     <Image src="heart.svg" height={22} width={28} alt="hearts" className="mr-2" />
     {hasActiveSubscription 
     ? <InfinityIcon className="h-4 w-4 stroke-[3]" />: hearts }
      </Button>
      </Link>
    </div>
  );
};
