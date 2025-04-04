
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-time-lightgray">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-time-blue mb-4">404</h1>
        <p className="text-3xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button
          asChild
          className="bg-time-yellow hover:bg-time-blue text-time-blue hover:text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
