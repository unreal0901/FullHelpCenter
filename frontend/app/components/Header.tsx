"use client";
import React, { useState } from "react";
import { useSearch } from "../providers/SearchContext";
import Modal from "./CreateCard";

const Header = () => {
  const { refetchData } = useSearch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    refetchData();
  };

  return (
    <>
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
            <span className="font-bold">Abstract</span>
            <span className="ml-2">|</span>
            <span className="ml-2">Help Center</span>
          </div>
          <button
            className="bg-white text-black px-4 py-2 rounded"
            onClick={handleOpenModal}
          >
            Submit a request
          </button>
        </div>
      </header>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default Header;
