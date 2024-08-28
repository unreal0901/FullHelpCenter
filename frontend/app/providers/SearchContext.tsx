"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { GetAllCards } from "../services/cards.services";

interface Topic {
  title: string;
  description: string;
}

interface SearchState {
  searchQuery: string;
  helpTopics: Topic[];
  filteredTopics: Topic[];
}

interface SearchContextType extends SearchState {
  setSearchQuery: (query: string) => void;
  refetchData: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const searchReducer = (
  state: SearchState,
  action: { type: string; payload?: any }
): SearchState => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
        filteredTopics: state.helpTopics.filter(
          (topic) =>
            topic.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            topic.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
        ),
      };
    case "SET_HELP_TOPICS":
      return {
        ...state,
        helpTopics: action.payload,
        filteredTopics: action.payload.filter(
          (topic: Topic) =>
            topic.title
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            topic.description
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(searchReducer, {
    searchQuery: "",
    helpTopics: [],
    filteredTopics: [],
  });

  const setSearchQuery = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const refetchData = async () => {
    try {
      const data = await GetAllCards();
      dispatch({ type: "SET_HELP_TOPICS", payload: data?.data || [] });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refetchData();
  }, []);

  return (
    <SearchContext.Provider value={{ ...state, setSearchQuery, refetchData }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export { SearchProvider, useSearch };
