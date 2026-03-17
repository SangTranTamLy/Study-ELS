import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Tab,
  IconButton
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import reactLogo from "../../assets/react.svg";
import "./Header.css";
import { useAuth } from "@/context/AuthContext";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  openLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ value, setValue, openLogin }) => {
  const { user, profile, loading, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Không render nếu đang loading auth
  if (loading) return null;

  const open = Boolean(anchorEl);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setMenuOpen(false); // Tự động đóng menu trên mobile khi đã chọn tab
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-left">
      {/* ===== TRÁI: BRAND ===== */}
      <div className="header-brand">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h3>STUDY ELS</h3>
      </div>

      {/* ===== GIỮA: MENU (TABS) ===== */}
      <nav className={`header-mid tabs ${menuOpen ? "active" : ""}`}>
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <TabList onChange={handleTabChange}>
              <Tab label="Home" value="1" />
              <Tab label="Vocabulary" value="2" />
              <Tab label="Practice" value="3" />
              <Tab label="Translator" value="4" />
              <Tab label="Quiz" value="5" />

            </TabList>
          </TabContext>
        </Box>
      </nav>

      {/* ===== PHẢI: USER ACTION & HAMBURGER ===== */}
      {/* Box này gom Nút Hamburger và User lại để layout không bị chia 3 lạc quẻ trên mobile */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        
        <div className="header-right">
          {!user ? (
            <Button id="Login-1" variant="contained" size="small" onClick={openLogin}>
              Đăng Nhập
            </Button>
          ) : (
            <>
              <div className="user-chip" onClick={handleAvatarClick}>
                <Avatar
                  src={profile?.avatar || undefined}
                  alt={profile?.name}
                  sx={{ width: 28, height: 28, bgcolor: "#6366f1", fontSize: "13px" }}
                >
                  {!profile?.avatar && profile?.name?.charAt(0).toUpperCase()}
                </Avatar>
                <span>
                  {profile?.name || "User"}
                </span>
                <ArrowDropDownIcon className={`arrow-icon ${open ? "rotate" : ''}`} />
              </div>
              
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={() => { setValue("7"); handleClose(); setMenuOpen(false); }}>Dashboard</MenuItem>
                <MenuItem onClick={() => { setValue("8"); handleClose(); setMenuOpen(false); }}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </div>

        {/* HAMBURGER (CSS của bạn đã ẩn trên Desktop và hiện trên Mobile) */}
        <IconButton className="menu-btn" onClick={toggleMenu} sx={{ padding: "4px" }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

      </div>
    </div>
  );
};

export default Header;