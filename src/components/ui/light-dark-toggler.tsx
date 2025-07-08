"use client"; // useTheme hook requires javascript
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme(); //resolvedTheme gets the system set theme
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          <Button variant="outline">
            <SunIcon className="block dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-primary text-primary-foreground px-2 py-1 rounded">
          <span className="hidden dark:inline">Enable Light Mode</span>
          <span className="inline dark:hidden">Enable Dark Mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
