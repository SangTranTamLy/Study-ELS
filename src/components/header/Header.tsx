import React from "react";
import reactLogo from "../../assets/react.svg";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Header.css'

function Header() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
  return (
    <>
      <div className="header-left">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h3>
          Study ELS
        </h3>

        {/*Menu*/}
        <nav className="header-mid">
            <Box sx={{ width:'100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange} aria-label="lap API tabs example">
                            <Tab label="Home" value="1" />
                            <Tab label="Course" value="2" />
                            <Tab label="Vocabulary" value="3" />
                            <Tab label="Dictionary" value="4" />
                        </TabList>
                    </Box>
                </TabContext>
            </Box>
        </nav>

        {/*Login/Sign up*/}
        <div className="header-right">
            <Button variant="contained"
            size="small" 
            href="#contained-buttons">
                login
            </Button>
        </div>
      </div>
    </>
  )
}
export default Header