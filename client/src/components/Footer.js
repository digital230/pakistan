import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {_} from 'underscore';
import moment from 'moment';
import autoBind from 'react-autobind';
import './footer.css';

class Footer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };

    this._isMounted = null;

    autoBind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps(props) {

  }

  render() {
    return (
      <div>Hello Footer</div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
