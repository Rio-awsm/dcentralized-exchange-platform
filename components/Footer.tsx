export const Footer = () => {
    return (
      <footer className="w-full border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Features</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Security</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
            © 2025 Indian Cryptocurrency Revolution. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  