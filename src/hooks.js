import React, { useState } from "react";

export const usePagination  = (data, count) => {
	const [currentPage, setCurrentPage] = useState(1);
	const maxPage = Math.ceil(data.length / count);

	function current() {
		const start = (currentPage - 1) * count;		
		const end = start + count;
		return data.reverse().slice(start, end);
	}

	function jump(page) {
		setCurrentPage(page);
	}

	return {currentPage, maxPage, current, jump};
}