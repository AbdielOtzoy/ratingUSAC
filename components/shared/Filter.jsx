"use client";

import React, { useState } from "react";
import FilterComboBox from "./FilterComboBox";
import Image from "next/image";
import SearchUser from "./SearchUser";

const Filter = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = () => {
    // redificción a la página de filtro
    window.location.href = `/filter/${filter}`;
  };

  return (
    <>
      <FilterComboBox setFilter={setFilter} />
      <Image
        src="/icons/search.svg"
        alt="comment"
        width={34}
        height={34}
        className="cursor-pointer hover:opacity-70"
        onClick={handleFilter}
      />
      <SearchUser />
    </>
  );
};

export default Filter;
