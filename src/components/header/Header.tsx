import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import reactLogo from "../../assets/react.svg";
import "./Header.css";
import { useAuth } from "@/context/AuthContext";

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  openLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ value, setValue, openLogin }) => {
  const { user, profile, loading, logout } = useAuth();
  if (loading) return null;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    handleClose();
  };

  return (
    <div className="header-left">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h3>Study ELS</h3>

      {/* ===== MENU ===== */}
      <nav className="header-mid">
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <TabList onChange={handleTabChange}>
              <Tab label="Home" value="1" />
              <Tab label="Quiz" value="2" />
              <Tab label="Vocabulary" value="3" />
              <Tab label="Dictionary" value="4" />
              <Tab label="Translator" value="5" />
              <Tab label="Thesaurus" value="6" />
            </TabList>
          </TabContext>
        </Box>
      </nav>

      {/* ===== RIGHT ===== */}
      <div className="header-right">
        {!user ? (
          <Button variant="contained" size="small" onClick={openLogin}>
            Login
          </Button>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            >
              <Avatar
                src={profile?.avatar || undefined}
                alt={profile?.name}
                sx={{ width: 28, height: 28 }}
              >
                {!profile?.avatar && profile?.name?.charAt(0).toUpperCase()}
              </Avatar>
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#222",
                }}
              >
                {profile?.name || "User"}
              </span>
            </Box>
            <Menu anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
