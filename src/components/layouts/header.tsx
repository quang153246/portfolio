import { Bot, Check } from "lucide-react";
import { NAVBARS } from "../../constants/navbar";
import ThreeDots from "../common/three-dots";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";
import { LANGUAGES } from "@/constants/language";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState<string>("en");
  const [activeLink, setActiveLink] = useState<string>("home");

  return (
    <div className="z-20 rounded-2xl h-20 bg-gray-900 px-4 flex fixed left-3 right-3 top-3 md:left-5 md:right-5 md:top-5 border border-purple-400/50 shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all">
      <div className="m-auto w-full">
        <div className="flex items-center gap-3">
          <ThreeDots size={2} />
          <div className="text-sm font-light text-gray-100 leading-0 hidden md:block">
            quangvo@portfolio:~$
          </div>
          <nav className="flex gap-2 md:gap-4 grow">
            {NAVBARS.map((item) => (
              <button
                key={item.key}
                className={`cursor-pointer flex items-center gap-1 px-1 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg border border-blue-300  hover:bg-blue-600/50 transition-all duration-300
                    ${
                      activeLink === item.key
                        ? "bg-violet-300"
                        : "bg-transparent"
                    }
                    `}
                onClick={() => setActiveLink(item.key)}
              >
                <span className="w-4 h-4 md:w-4 md:h-4 text-white">
                  {item.icon}
                </span>
                <span className="text-sm leading-0 font-light text-white hidden md:block">
                  {t(`common.header.${item.key}`)}
                </span>
              </button>
            ))}
          </nav>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="icon"
              className="size-9 md:size-10 rounded-full bg-transparent border border-violet-600"
            >
              <Bot className="size-5 text-violet-600" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center outline-0">
                <Button className="bg-transparent hover:bg-violet-100 border border-gray-300 px-2 md:px-3">
                  <img src={`src/assets/${language}.png`} className="w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Ngôn ngữ</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.key}
                    className="flex items-center gap-1 outline-0 hover:bg-violet-100 rounded-sm px-3"
                    onClick={() => {
                      setLanguage(lang.key);
                      i18n.changeLanguage(lang.key);
                    }}
                  >
                    <img src={`src/assets/${lang.key}.png`} className="w-8" />
                    <div className="text-sm font-medium text-gray-700 ml-2">
                      {lang.label}
                    </div>
                    {language === lang.key && (
                      <Check className="text-blue-600 w-4 h-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
