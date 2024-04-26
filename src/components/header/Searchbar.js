import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Autocomplete,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { Link, Loading, Text } from "../atoms";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetchData } from "../../hooks/useFetchData";

const StyledImage = styled("img")(() => ({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: 25,
}));
export const Searchbar = ({ width }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch] = useDebounce(500, searchValue);
  const { getData, loading, data, setState } = useFetchData();

  useEffect(() => {
    if (debouncedSearch) {
      getData(`/products/search?name=${debouncedSearch}`);
    } else {
      setState((prev) => ({ ...prev, data: null }));
    }
  }, [debouncedSearch, getData, setState]);

  const { t } = useTranslation();
  // return <div>{t("searchbar")}</div>;

  return (
    <Autocomplete
      rfreeSolo
      disableClearable
      sx={{
        width: width || "300px",
        ".MuiOutlineInput-root .MuiOutlineInput-notchedOutline": {
          borderRadius: 4,
          borderColor: "#ec5e2a",
        },
        "& .MuiOutlineInput-root.Mui-focused .MuiOutlineInput-notchedOutline": {
          borderColor: "#ec5e2a",
        },
      }}
      loading={loading}
      loadingText={<Loading size={30} />}
      options={data?.products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { image, category, name, id, price } = option;
        return (
          <Link to={`/products/categories/${category}/${id}`}>
            <Stack direction="row">
              <StyledImage src={image} alt={`${category}-${name}`} />
              <Text>{name}</Text>
              <Text sx={{ marginLeft: 10 }}>{price}</Text>
            </Stack>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <BsSearch
                    color="white"
                    size={20}
                    style={{ marginLeft: "10" }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{ input: { color: "white" } }}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
        );
      }}
    />
  );
};
