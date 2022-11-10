import React, { useState, useEffect } from "react";
interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}
interface gapObj {
  before: boolean;
  paginationGroup: Array<number>;
  after: boolean;
}

interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  gaps: {
    before: boolean;
    paginationGroup: Array<number>;
    after: boolean;
  };
  setPage: (page: number) => void;
}

type UsePagination = (
  UsePaginationProps: UsePaginationProps
) => UsePaginationReturn;

const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const [gaps, setGaps] = useState<gapObj>({
    before: false,
    paginationGroup: [],
    after: true,
  });
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const [pagesInBetween, setPagesInBetween] = useState<number[]>([]);

  useEffect(() => {
    if (pageCount > 2) {
      const temp = new Array(pageCount - 2).fill(1).map((_, i) => i + 2);
      setPagesInBetween(temp);
    }
  }, [pageCount]);
  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup = [];
    let before = false;
    let after = false;
    if (page === 1) {
      paginationGroup = pagesInBetween.slice(0, 3);
    } else if (
      page === pageCount ||
      page === pageCount - 1 ||
      page === pageCount - 2
    ) {
      paginationGroup = pagesInBetween.slice(-3, pageCount);
    } else if (page === 2) {
      paginationGroup = pagesInBetween.slice(
        currentLocation,
        currentLocation + 3
      );
    } else {
      paginationGroup = [page - 1, page, page + 1];
    }
    if (pageCount <= 5) {
      before = false;
      after = false;
    } else {
      before = false;
      after = false;
      if (paginationGroup[0] > 2) {
        before = true;
      }
      if (paginationGroup[2] < pageCount - 1) {
        after = true;
      }
    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);
  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default usePagination;
