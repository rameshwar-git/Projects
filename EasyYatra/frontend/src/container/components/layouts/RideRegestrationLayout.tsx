import React, {ReactNode} from 'react';

interface LayoutRide{
    children:ReactNode;
}

export const RideRegestrationLayout: React.FC<LayoutRide>=({ children })=>{
    return (
        <div className='min-h-screen bg-grey-100 flex flex-col item-center py-8'>
            <header  className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-blue-600">Product Management App</h1>
            </header>
            <main className="container mx-auto p-4 bg-white shadow-lg rounded-lg w-full max-w-4xl">
                {children}
            </main>
            <footer className="mt-8 text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Your App
            </footer>
        </div>
    );
};