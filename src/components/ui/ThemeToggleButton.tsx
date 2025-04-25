"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="cursor-pointer"
        >
          <Sun className="dark:hidden" />
          <MoonStar className="not-dark:hidden dark:flex" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme}
          className="*:cursor-pointer"
        >
          <DropdownMenuRadioItem
            value="light"
            onSelect={() => setTheme("light")}
          >
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="dark"
            onSelect={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="system"
            onSelect={() => setTheme("system")}
          >
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleButton;
