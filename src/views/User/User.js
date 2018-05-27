import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget02 from '../../views/Widgets/Widget02'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { read } from 'fs';

import profile from '../../assets/img/profile/lynnette.jpeg'

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstPost: '2018-04-02 08:54:00',
      lastPostedOn: {
        date: '2018-05-23 12:00:00', 
        content: 'UK announces £1b drive into artificial intelligence',
        link: 'https%3A%2F%2Fwww.businesstimes.com.sg%2Fgovernment-economy%2Fuk-announces-%C2%A31b-drive-into-artificial-intelligence&h=ATP4bL2ixfvEBGwBq72MPeLLoQiOKg_3eHfNCPt1D4-GurgJqHIpAkfIuu_2XiZK2igSIp1tEBKYarO9eZA5rlnDqnRRLGzUBl-GbughSCZ5qQUx2iEOpa9b0jBMn7Xa84xDMVk'
      }
    };
  }

  render() {

    return (
      <div className="animated fadeIn">
      
        <Row>
          <Col sm="8">
            <Widget02 header="Tan Jia Hui" mainText="Head (Tech Office), Digital Hub" pic={ profile } firstPost={ this.state.firstPost } lastPost={ this.state.lastPostedOn }>
            </Widget02>
          </Col>
        </Row>

      </div>
    );
  }
}

export default User;
