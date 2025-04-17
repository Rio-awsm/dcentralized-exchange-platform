import { Bell, Settings } from "lucide-react";

export default function Greeting({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  function getFormattedDateTime(): string {
    const now = new Date();
  
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12 || 12; 
    const minutesStr = String(minutes).padStart(2, '0');
  
    return `Today, ${hours}:${minutesStr} ${ampm}`;
  }
  const formattedDateTime: string = getFormattedDateTime();

  return (
    <div className="relative p-8 sm:p-10 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="100"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                stroke="currentColor"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <div className="flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="rounded-full w-16 h-16 object-cover border-2 border-white dark:border-gray-700 shadow-md"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>

          <div className="ml-4">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Welcome back
            </p>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Last login: {formattedDateTime}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

     
    </div>
  );
}
