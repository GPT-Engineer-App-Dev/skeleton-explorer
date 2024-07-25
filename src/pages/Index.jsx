import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Welcome to My App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Interactive Component</h3>
          <p className="mb-4">Click count: {count}</p>
          <Button 
            variant="destructive" 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
