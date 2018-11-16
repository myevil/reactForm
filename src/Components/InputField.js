import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
// import regexExpression from '../../../../../../utils/regexExpression';

/**
 * @props    inputName     {type}    string    to fill name form REQUIRED.
 * @props    inputLabel    {type}    string    to fill label form REQUIRED.
 * @props    inputValue    {type}    string    initial value form REQUIRED.
 * @props    styleClass    {type}    Object    classes style to make a style form REQUIRED
 *
 * @return {type} Object-React.PureComponent Input Field.
 */
class InputField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      textMessage: '',
      errorCondition: false,
    };
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
  }

  onChangeInputValue(event) {
    const { regex } = this.props;

    const isEmail = () => {
      if (event.target.value.match(regex)) {
        return true;
      }
      return false;
    };

    const inputValid = () => {
      this.setState({
        textMessage: '',
        errorCondition: false,
      });
    };

    const inputNotValid = () => {
      this.setState({
        textMessage: `Please enter your ${this.props.label} is not valid`,
        errorCondition: true,
      });
    };

    if (isEmail()) {
      inputValid();
    } else {
      inputNotValid();
    }

    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const {
      styleClass,
    } = this.props;
    return (
      <TextField
        error={this.state.errorCondition}
        onChange={this.onChangeInputValue}
        className={styleClass}
        helperText={this.state.textMessage}
        {...this.props}
        value={this.state.value}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  styleClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
};

export default InputField;

