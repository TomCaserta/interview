export default function App() {
    const { useState, useEffect } = window.React;

    return (
        <>
            <div className="border-2 border-gray-200 rounded w-full">
                <input type="text" className="px-4 py-2 w-full" placeholder="Enter a name" />
            </div>
    
            <div className="rounded shadow bg-white w-full mt-1 border border-gray-200">
                { /** Repeat the following: */ }
                <div className="group border-t">
                    <span className="block p-2 border-transparent border-l-4">Name Here</span>
                </div>
            </div>
        </>
    );
}