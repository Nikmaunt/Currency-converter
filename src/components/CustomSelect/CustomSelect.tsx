import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';


interface CustomSelectProps {
    options: string[];
    onChange: (selectedValue: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectClick = (event: React.MouseEvent<HTMLLIElement>) => {
        const selectedValue = event.currentTarget.textContent;
        onChange(selectedValue || "");
        handleClose();
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Add Currency
                    <AddCircleIcon fontSize={'small'}  />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    style: {
                        maxHeight: '200px',
                    },
                    'aria-labelledby': 'basic-button',
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={handleSelectClick}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default CustomSelect;
