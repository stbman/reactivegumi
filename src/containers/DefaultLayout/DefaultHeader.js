import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    //this.dateDisplay = day + " " + month + " " + year;

    this.dateDisplay = "1 July 2018";

    this.state = {
      data: this.props.data
    };

    if (this.state.data != undefined) {
      this.getDataDetails();
    }
  }

  getDataDetails() {
    //this.state.fileName = this.state.data['filename'];
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Gumi Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Gumi Logo' }}
        />
        <Nav className="ml-auto" navbar>

          <NavItem className="d-md-down-none" id="date">
            <strong>Today's Date: </strong>{this.dateDisplay}
          </NavItem>

          {/* <NavItem className="d-md-down-none">
            <button className="btn btn-outline-info btn-block" id="import-file-btn">Import File Button</button>
          </NavItem> */}
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
