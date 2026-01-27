//
import {
  Settings,
  Bell,
  MessageSquareWarning,
  Menu,
  X,
  Home,
  Calendar,
  Star,
} from "lucide-react";

// Input Search
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// Logo placeholder
import { useState } from "react";

const MobailHeader = ({ logo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between h-14">
        {/* Right Side - Menu Icon & App Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          <h1 className="text-lg font-bold text-gray-800">Hawaa</h1>
        </div>

        {/* Center - Search Box */}
        <div className="relative flex-1 mx-3">
          <Field>
            <ButtonGroup>
              <Input id="input-button-group" placeholder="Type to search..." />
              <Button variant="outline">Search</Button>
            </ButtonGroup>
          </Field>
        </div>

        {/* Left Side - Single Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header with Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <a href="/">
                <img
                  src={logo}
                  alt="no logo"
                  className="h-8 w-auto md:h-10 lg:h-12 object-contain"
                />
              </a>
              <h2 className="text-xl font-bold text-gray-800">Hawaa</h2>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>توقعات الأسبوع</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Star className="w-5 h-5" />
                  <span>مدني المفضلة</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>الإعدادات</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  <span>الإشعارات</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <MessageSquareWarning className="w-5 h-5" />
                  <span>حول</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobailHeader;
