import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const DatabaseMenu = ({ onChangeDatabaseType }) => {

    const databaseTypes = [
        'sqlite',
        'mysql',
        'csv'
    ];

    return (
        <div>
            <div>
                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Database Type</InputLabel>
                    <Select
                        id="demo-simple-select-helper"
                        onChange={onChangeDatabaseType}
                        defaultValue={ "sqlite" }
                        style={{ width: 400 }}>
                        {databaseTypes.map((type, index) => (
                            <MenuItem key={index} value={type}>
                                <em>{type}</em>
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Choose your Database Type</FormHelperText>
                </FormControl>
            </div>
        </div>
    );
}

export default DatabaseMenu;
