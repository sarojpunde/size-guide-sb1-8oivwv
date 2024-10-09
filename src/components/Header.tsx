import React from 'react'
import { Link } from 'react-router-dom'
import { Ruler } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Ruler className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-xl font-bold text-gray-800">Customizable Size Guides</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
            <li><Link to="/editor" className="text-gray-600 hover:text-blue-600">Size Guide Editor</Link></li>
            <li><Link to="/marketplace" className="text-gray-600 hover:text-blue-600">Marketplace Mappings</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header