import React from "react";;

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center text-9xl">😎</div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
  );
}

export default Error404;
