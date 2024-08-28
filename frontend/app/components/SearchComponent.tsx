// SearchComponent.tsx
"use client";
import React from "react";
import { Search } from "lucide-react";
import { useSearch } from "../providers/SearchContext";

const SearchComponent = () => {
  const { searchQuery, filteredTopics, setSearchQuery } = useSearch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="flex-grow">
      <div className="bg-purple-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-4 pr-12 rounded-md shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md  border border-gray-300 cursor-pointer"
              >
                <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500">
              No results found. Please try a different search term.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchComponent;
