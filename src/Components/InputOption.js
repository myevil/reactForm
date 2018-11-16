import React from 'react';

class InputOption extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    }
  render() {
    return (
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={this.state.currency}
        onChange={this.handleChange('currency')}
        SelectProps={{
        MenuProps: {
            className: classes.menu,
        },
        }}
        helperText="Please select your currency"
        margin="normal"
    >
        {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>
        ))}
      </TextField>
    );
  }
}

export default InputOption;

