import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, ChevronDown, User, Menu, X } from "lucide-react"

export const Header = ({ cartCount, searchQuery, setSearchQuery, categories, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [filteredCategories, setFilteredCategories] = useState([])
  const searchRef = useRef(null)

  useEffect(() => {
    // Filter categories based on search query
    if (categories) {
      const filtered = categories.filter(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredCategories(filtered)
    }
  }, [searchQuery, categories])

  // Close categories dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowCategories(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearchFocus = () => {
    setShowCategories(true)
  }

  const handleCategoryClick = (category) => {
    onCategorySelect(category)
    setSearchQuery(category)
    setShowCategories(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FFB800] py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-4 md:space-x-12">
            <h2 className="text-xl font-bold">Harmoni</h2>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium">
                Home Page
              </a>
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium">
                Categories
              </a>
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium">
                Contact Us
              </a>
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium flex items-center">
                More Options
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative" ref={searchRef}>
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                className="w-[125px] md:w-[300px] rounded-xl border-none bg-white/50 pr-10 text-sm placeholder:text-gray-500"
              />
              <Button
                size="icon"
                className="hover:bg-transparent bg-transparent text-black rounded-full border-none outline-none box-shadow-none hover:outline-none focus:outline-none absolute right-0 top-0 h-full px-3"
              >
                <Search className="h-5 w-5 text-gray-500 outline-none border-none box-shadow-none" />
              </Button>
              {showCategories && categories && categories.length > 0 && (
                <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg">
                  <ul className="max-h-60 overflow-auto rounded-md py-2">
                    {filteredCategories.map((category, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative bg-transparent hover:bg-transparent text-black">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-transparent bg-transparent text-black"
              >
                <User className="h-6 w-6" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-transparent bg-transparent text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium">
                Home Page
              </a>
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium">
                Categories
              </a>
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium">
                Contact Us
              </a>
              <a href="#" className="text-black hover:text-gray-700 text-sm font-medium flex items-center">
                More Options
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </nav>
            <Button variant="ghost" size="icon" className="hover:bg-transparent bg-transparent text-black">
              <User className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}