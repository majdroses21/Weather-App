import { Settings, Bell, User, Calendar, Star, MessageSquareWarning  } from "lucide-react";
import ThemeModal from "@/components/modals/ThemeModal";

// Input Search
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
const MainHeader = ({ logo }) => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between h-16">
        {/* Left Side - Logo & App Name */}
        <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <a href="/">
            <img
              src={logo}
              alt="no logo"
              className="h-8 w-auto md:h-10 lg:h-12 object-contain"
            />
          </a>
          <h1 className="text-xl font-bold text-primary-foreground">Hawaa</h1>
        </div>
         {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-primary-foreground hover:text-3xl  transition-colors font-medium"
            >
              <Calendar className="w-4 h-4" /> 
              <span>التوقعات</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-primary-foreground hover:text-3xl transition-colors font-medium"
            >
              <Star className="w-4 h-4" />
              <span>المفضلة</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-primary-foreground hover:text-3xl transition-colors font-medium"
            >
              <MessageSquareWarning className="w-4 h-4" />
              <span>حول</span>
            </a>
          </nav>
        </div>

        {/* Right Side - Search & Icons */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="relative">
            <Field>
              <ButtonGroup>
                <Input
                  id="input-button-group"
                  placeholder="Type to search..."
                  className="text-primary-foreground placeholder:text-secondary dark:placeholder:text-gray-400"
                />
                <Button variant="outline" className="">Search</Button>
              </ButtonGroup>
            </Field>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full transition-colors hover:bg-[rgba(0,0,0,0.18)]"
            >
              <Bell className="w-5 h-5 text-primary-foreground" />
            </button>
            <ThemeModal>
              <button
                className="p-2 rounded-full transition-colors hover:bg-[rgba(0,0,0,0.18)]"
              >
                <Settings className="w-5 h-5 text-primary-foreground" />
              </button>
            </ThemeModal>
            <button
              className="p-2 rounded-full transition-colors hover:bg-[rgba(0,0,0,0.18)]"
            >
              <User className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
