import { styled, Toolbar, AppBar, Box, Badge, BadgeMark } from "@mui/material";
import React, { useState } from "react";
import { Button, Link } from "../atoms";
import { Searchbar } from "./Searchbar";
import { UserIcon } from "./UserIcon";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { CartModal } from "./CartModal";
import { BsCart4 } from "react-icons/bs";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "red",
  padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link style={{ color: "white" }} to="/">
            {t("home")}
          </Link>
          <Searchbar />
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            <Badge badgeContent={10} color="primary">
              <BsCart4 size={32} color="yellow" />
            </Badge>
          </Button>
          <UserIcon />
          <LanguageSelect />
        </StyledToolbar>
        <CartModal open={open} setOpen={setOpen} cartItems={[]} />
      </StyledAppBar>
    </Box>
  );
};
