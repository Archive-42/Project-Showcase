import React from 'react';
import ThemeContext from './ThemeContext';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  updateSelection = (e) => {
    this.setState({ color: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.updateContext(this.state.color);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.updateSelection}
          value={this.state.color}
          placeholder="Type a color!"
        />
        <button onClick={this.handleClick}>
          Submit
        </button>
      </form>
    );
  }
}

const ProfileWithContext = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => <Profile updateContext={value.updateContext} />}
    </ThemeContext.Consumer>
  );
};

export default ProfileWithContext;
