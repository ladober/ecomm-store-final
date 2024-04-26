import React from "react";
import { useTranslation } from "react-i18next";
import { Autocomplete, Stack, TextField, styled } from "@mui/material";
import { Link, Loading, Text } from "../atoms";

const StyledImage = styled("img")(() => ({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: 3,
}));
export const Searchbar = ({ width }) => {
  const products = [
    { _id: 1, name: "iphone 15", category: "category", price: 100, image: "" },
  ];
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
      loading={false}
      loadingText={<Loading size={30} />}
      options={products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { image, category, name, _id, price } = option;
        <Link to="/">
          <Stack direction="row">
            <StyledImage src={image} alt={`${category}-${name}`} />
            <Text>{name}</Text>
            <Text sx={{ marginLeft: 10 }}>{price}</Text>
          </Stack>
        </Link>;
      }}
      renderInput={(params) => {
        return <TextField />;
      }}
    />
  );
};
