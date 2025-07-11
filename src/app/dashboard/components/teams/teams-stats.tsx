import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import cm from "../../../../../public/images/cm.jpg";
import tf from "../../../../../public/images/tf.jpg";
import rl from "../../../../../public/images/rl.jpg";
import { UsersIcon, ListCheckIcon, StarIcon, PieChartIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View more</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex justify-between">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500"></StarIcon>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((tl) => {
              return (
                <TooltipProvider key={`${tl.firstName}${tl.lastName}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar>
                        {tl.avatar ? (
                          <Image
                            src={tl.avatar}
                            alt={`${tl.firstName} ${tl.lastName}`}
                          />
                        ) : (
                          <AvatarFallback>
                            {tl.firstName[0]}
                            {tl.lastName[0]}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {tl.firstName} {tl.lastName}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-base">
              <CardTitle className="text-base flex justify-between">
                <span>Team distribution</span>
                <PieChartIcon></PieChartIcon>
              </CardTitle>
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="grow">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <ListCheckIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResolved></SupportTicketsResolved>
        </CardContent>
      </Card>
    </>
  );
}
