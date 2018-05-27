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
import Widget03 from '../../views/Widgets/Widget03'
import Widget01 from '../../views/Widgets/Widget01'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { read } from 'fs';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      data: this.props.data
    };
    this.processJsonData();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  processJsonData() {
    this.uniquePeople = this.state.data['unique_people'];
    this.uniquePeople.sort(function(a,b) {return (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0);} ); 

    this.totalPosts = this.uniquePeople.reduce(function(prev, cur) {
      return prev + cur.count;
    }, 0);

    this.readership = this.state.data['readership'];
    this.totalReadership = this.readership.reduce(function(prev, cur) {
      return prev + cur.readership;
    }, 0);

    this.likes = this.state.data['likes'];
    this.totalLikes = this.likes.reduce(function(prev, cur) {
      return prev + cur.sum;
    }, 0);
    this.likes.sort(function(a,b) {return (a.sum < b.sum) ? 1 : ((b.sum < a.sum) ? -1 : 0);} ); 


    this.seenBy = this.state.data['seen_by'];
    this.totalSeenBy = this.likes.reduce(function(prev, cur) {
      return prev + cur.sum;
    }, 0);
    this.seenBy.sort(function(a,b) {return (a.sum < b.sum) ? 1 : ((b.sum < a.sum) ? -1 : 0);} );     
  }

  render() {
    this.entitiesData = this.state.data['top_entities']

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-4">
                <div className="text-value">{ this.totalPosts }</div>
                <div>Posts</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-4">
                <div className="text-value">{ this.uniquePeople.length }</div>
                <div>Active Members</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-4">
                <div className="text-value">{ this.totalReadership }</div>
                <div>Readership</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-4">
                <div className="text-value">{ this.totalLikes }</div>
                <div>Likes</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" lg="3">
            <Widget01 header={ this.entitiesData[0]["keyword"] } mainText={ this.entitiesData[0]["total_posts"].toString() } smallText={ this.entitiesData[0]["unique_string_2"].slice(0, -1) } className="bg-facebook" variant="inverse">
            </Widget01>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Widget01 header={ this.entitiesData[1]["keyword"] } mainText={ this.entitiesData[1]["total_posts"].toString() } smallText={ this.entitiesData[1]["unique_string_2"].slice(0, -1) } className="bg-twitter" variant="inverse">
            </Widget01>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Widget01 header={ this.entitiesData[2]["keyword"] } mainText={ this.entitiesData[2]["total_posts"].toString() } smallText={ this.entitiesData[2]["unique_string_2"].slice(0, -1) } className="bg-linkedin" variant="inverse">
            </Widget01>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Widget01 header={ this.entitiesData[3]["keyword"] } mainText={ this.entitiesData[3]["total_posts"].toString() } smallText={ this.entitiesData[3]["unique_string_2"].slice(0, -1) } className="bg-google-plus" variant="inverse">
            </Widget01>
          </Col>                    
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody className="pb-4">
                <h6>Content Analysis</h6>
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <tbody>
                    <tr>
                      <td><strong>Filename </strong></td>
                      <td>{ this.state.data['data_details']['filename']}</td>
                    </tr>
                    <tr>
                      <td><strong>Data Generated On </strong></td>
                      <td>{ this.state.data['data_details']['time_data_generated']}</td>
                    </tr>
                    <tr>
                      <td><strong>Earliest Post </strong></td>
                      <td>{ this.state.data['data_details']['earliest_post']}</td>
                    </tr>
                    <tr>
                      <td><strong>Latest Post </strong></td>
                      <td>{ this.state.data['data_details']['latest_post']}</td>
                    </tr>
                  </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody className="pb-4">
                <h6>Top Posters</h6>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="icon-people"></i></th>
                      <th>User</th>
                      <th>Posts</th>
                      <th className="topics-cell">Topics Posted</th>
                      <th className="content-cell">Last Post</th>
                    </tr>
                    </thead>
                    <tbody>{this.uniquePeople.map(function(item, key) {
                      return (
                          <tr key = {key}>
                            <td className="text-center">
                              <div className="avatar">
                                <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                <span className="avatar-status badge-success"></span>
                              </div>
                            </td>
                            <td>
                            <div>{item.name}</div>
                          </td>
                          <td>
                            <strong>{item.count}</strong>
                            <div>
                              <small className="text-muted">{item.first_post.split(" ")[0]} - {item.last_post.split(" ")[0]}</small>
                            </div>
                          </td>
                          <td>
                            {item.entities}
                          </td>
                          <td>
                            <div>{item.last_post_content}</div>
                            <div><a href={decodeURIComponent(item.last_post_link)} target="_blank">Read More</a></div>
                            <div className="small text-muted">{item.last_post}</div>
                          </td>
                        </tr>
                        )
                    })}
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody className="pb-4">
                <h6>Popular Posters</h6>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="icon-people"></i></th>
                      <th>User</th>
                      <th>Total Likes</th>
                      <th className="topics-cell">Topics</th>
                      <th className="content-cell">Most Liked Post</th>
                    </tr>
                    </thead>
                    <tbody>{this.likes.map(function(item, key) {
                      return (
                          <tr key = {key}>
                            <td className="text-center">
                              <div className="avatar">
                                <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                <span className="avatar-status badge-success"></span>
                              </div>
                            </td>
                            <td>
                            <div>{item.name}</div>
                          </td>
                          <td>
                            <strong>{item.sum}</strong>
                            <div>
                              <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                            </div>
                          </td>
                          <td>
                            {item.entities}
                          </td>
                          <td>
                            <div>{item.content}</div>
                            <div><a href={decodeURIComponent(item.link)} target="_blank">Read More</a></div>
                            <div className="small text-muted">{item.likes_max} Likes, Posted on {item.post_time}</div>
                          </td>
                        </tr>
                        )
                    })}
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>      

        <Row>
          <Col>
            <Card>
              <CardBody className="pb-4">
                <h6>Top Readership</h6>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="icon-people"></i></th>
                      <th>User</th>
                      <th>Number of Reads</th>
                      <th className="topics-cell">Topics</th>
                      <th className="content-cell">Most Read Post</th>
                    </tr>
                    </thead>
                    <tbody>{this.seenBy.map(function(item, key) {
                      return (
                          <tr key = {key}>
                            <td className="text-center">
                              <div className="avatar">
                                <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                <span className="avatar-status badge-success"></span>
                              </div>
                            </td>
                            <td>
                            <div>{item.name}</div>
                          </td>
                          <td>
                            <strong>{item.sum}</strong>
                            <div>
                              <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                            </div>
                          </td>
                          <td>
                            {item.entities}
                          </td>
                          <td>
                            <div>{item.content}</div>
                            <div><a href={decodeURIComponent(item.link)} target="_blank">Read More</a></div>
                            <div className="small text-muted">Seen By {item.seen_by_max} people, Posted on {item.post_time}</div>
                          </td>
                        </tr>
                        )
                    })}
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      {/* <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col sm="5">
                  <CardTitle className="mb-0">Traffic</CardTitle>
                  <div className="small text-muted">November 2015</div>
                </Col>
                <Col sm="7" className="d-none d-sm-inline-block">
                  <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                  <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-3" aria-label="First group">
                      <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                      <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                      <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Row>
              <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                <Line data={mainChart} options={mainChartOpts} height={300} />
              </div>
            </CardBody>
            <CardFooter>
              <Row className="text-center">
                <Col sm={12} md className="mb-sm-2 mb-0">
                  <div className="text-muted">Visits</div>
                  <strong>29.703 Users (40%)</strong>
                  <Progress className="progress-xs mt-2" color="success" value="40" />
                </Col>
                <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                  <div className="text-muted">Unique</div>
                  <strong>24.093 Users (20%)</strong>
                  <Progress className="progress-xs mt-2" color="info" value="20" />
                </Col>
                <Col sm={12} md className="mb-sm-2 mb-0">
                  <div className="text-muted">Pageviews</div>
                  <strong>78.706 Views (60%)</strong>
                  <Progress className="progress-xs mt-2" color="warning" value="60" />
                </Col>
                <Col sm={12} md className="mb-sm-2 mb-0">
                  <div className="text-muted">New Users</div>
                  <strong>22.123 Users (80%)</strong>
                  <Progress className="progress-xs mt-2" color="danger" value="80" />
                </Col>
                <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                  <div className="text-muted">Bounce Rate</div>
                  <strong>Average Rate (40.15%)</strong>
                  <Progress className="progress-xs mt-2" color="primary" value="40" />
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader>
              Traffic {' & '} Sales
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12" md="6" xl="6">
                  <Row>
                    <Col sm="6">
                      <div className="callout callout-info">
                        <small className="text-muted">New Clients</small>
                        <br />
                        <strong className="h4">9,123</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="callout callout-danger">
                        <small className="text-muted">Recurring Clients</small>
                        <br />
                        <strong className="h4">22,643</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr className="mt-0" />
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="34" />
                      <Progress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Tuesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="56" />
                      <Progress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Wednesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="12" />
                      <Progress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Thursday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="43" />
                      <Progress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Friday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="22" />
                      <Progress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Saturday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="53" />
                      <Progress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Sunday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="9" />
                      <Progress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                      New clients
                      &nbsp;
                      <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                      Recurring clients
                    </small>
                  </div>
                </Col>
                <Col xs="12" md="6" xl="6">
                  <Row>
                    <Col sm="6">
                      <div className="callout callout-warning">
                        <small className="text-muted">Pageviews</small>
                        <br />
                        <strong className="h4">78,623</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="callout callout-success">
                        <small className="text-muted">Organic</small>
                        <br />
                        <strong className="h4">49,123</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr className="mt-0" />
                  <ul>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-user progress-group-icon"></i>
                        <span className="title">Male</span>
                        <span className="ml-auto font-weight-bold">43%</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="warning" value="43" />
                      </div>
                    </div>
                    <div className="progress-group mb-5">
                      <div className="progress-group-header">
                        <i className="icon-user-female progress-group-icon"></i>
                        <span className="title">Female</span>
                        <span className="ml-auto font-weight-bold">37%</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="warning" value="37" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-globe progress-group-icon"></i>
                        <span className="title">Organic Search</span>
                        <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="56" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-social-facebook progress-group-icon"></i>
                        <span className="title">Facebook</span>
                        <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="15" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-social-twitter progress-group-icon"></i>
                        <span className="title">Twitter</span>
                        <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="11" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-social-linkedin progress-group-icon"></i>
                        <span className="title">LinkedIn</span>
                        <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="8" />
                      </div>
                    </div>
                    <div className="divider text-center">
                      <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                              title="" data-original-title="show more"><i className="icon-options"></i></Button>
                    </div>
                  </ul>
                </Col>
              </Row>
              <br />
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                <tr>
                  <th className="text-center"><i className="icon-people"></i></th>
                  <th>User</th>
                  <th className="text-center">Country</th>
                  <th>Usage</th>
                  <th className="text-center">Payment Method</th>
                  <th>Activity</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-success"></span>
                    </div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>50%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="50" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>10 sec ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-danger"></span>
                    </div>
                  </td>
                  <td>
                    <div>Avram Tarasios</div>
                    <div className="small text-muted">

                      <span>Recurring</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>10%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="10" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>5 minutes ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-warning"></span>
                    </div>
                  </td>
                  <td>
                    <div>Quintin Ed</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>74%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="warning" value="74" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>1 hour ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-secondary"></span>
                    </div>
                  </td>
                  <td>
                    <div>Enéas Kwadwo</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>98%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="danger" value="98" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Last month</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-success"></span>
                    </div>
                  </td>
                  <td>
                    <div>Agapetus Tadeáš</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-es h4 mb-0" title="es" id="es"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>22%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="22" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Last week</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-danger"></span>
                    </div>
                  </td>
                  <td>
                    <div>Friderik Dávid</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-pl h4 mb-0" title="pl" id="pl"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>43%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="43" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Yesterday</strong>
                  </td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
      </div>
    );
  }
}

export default Dashboard;
