// src/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/chat">Chat</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Layout;
