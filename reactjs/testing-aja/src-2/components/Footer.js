import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>MY FOOTER</h1>
        {this.props.paragraph()}
      </div>
    );
  }
}

export default Footer;
