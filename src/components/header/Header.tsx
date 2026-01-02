import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import reactLogo from "../../assets/react.svg";
import './Header.css';

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ value, setValue }) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="header-left">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h3>Study ELS</h3>

      <nav className="header-mid">
        <Box sx={{ width:'100%', typography: 'body1'}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <TabList onChange={handleChange} aria-label="tabs example">
                <Tab label="Home" value="1" />
                <Tab label="Quiz" value="2" />
                <Tab label="Vocabulary" value="3" />
                <Tab label="Dictionary" value="4" />
                <Tab label="Translator" value="5" />
                <Tab label="Thesaurus" value="6" />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </nav>

      <div className="header-right">
        <Button variant="contained" size="small" href="#contained-buttons">
          login
        </Button>
      </div>
    </div>
  );
};

export default Header;
