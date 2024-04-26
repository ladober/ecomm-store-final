import React, { useEffect } from "react";
import { LoadingWrapper } from "../../../components/atoms";
import { Stack } from "@mui/material";
import { Sort } from "./Sort";
import { Paginate } from "./Paginate";
import { GridContainer } from "../components";
import { ProductCard } from "../components/ProductCard";
import { useProduct, useQueryParams } from "../../../hooks";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux";
import { useParams } from "react-router-dom";

export const CategoryProductList = () => {
  const { loading, categoryProducts, totalPages } = useProduct();
  const dispatch = useDispatch();
  const { category } = useParams();
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  console.log("Sort", sort);
  useEffect(() => {
    dispatch(
      fetchCategoryProducts({
        category,
        queryUrl: `?size=1&sort=${sort}&page=${page}`,
      })
    );
  }, [sort, dispatch, page]);

  return (
    <LoadingWrapper isLoading={loading}>
      <Stack alignItems="center" justifyContent="space-between" height="100%">
        <Sort value={sort} changeSort={changeSort} />
        <GridContainer>
          {categoryProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
        <Paginate
          totalPages={totalPages}
          currentpage={page}
          changePage={changePage}
        />
      </Stack>
    </LoadingWrapper>
  );
};
