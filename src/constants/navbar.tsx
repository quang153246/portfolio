import { Earth, FolderGit, House, SquareStar, User } from "lucide-react";

export const NAVBARS = [
  {
    key: "home",
    icon: <House className="w-full h-full text-inherit" />,
  },
  {
    key: "about",
    icon: <User className="w-full h-full text-inherit" />,
  },
  {
    key: "projects",
    icon: <FolderGit className="w-full h-full text-inherit" />,
  },
  {
    key: "experience",
    icon: <SquareStar className="w-full h-full text-inherit" />,
  },
  {
    key: "contact",
    icon: <Earth className="w-full h-full text-inherit" />,
  },
];
