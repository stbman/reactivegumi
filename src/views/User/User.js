import React, { Component } from 'react';
import { Bar, Line, Radar } from 'react-chartjs-2';
import Graph from 'react-graph-vis';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from 'reactstrap';
import Widget02 from '../../views/Widgets/Widget02'

import profile from '../../assets/img/profile/lynnette.png'
import { NetworkGraph } from '../../assets/data/NetworkGraph.new'
import axios from 'axios';

const radar = {
  labels: ['Web Development', 'Data Science', 'Data Engineering', 'Web Design', 'Coding'],
  datasets: [
    {
      label: 'My Proficiency dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [2, 3, 3, 2, 1],
    }
  ],
  options: {
      legend: {
        display: false,
    }
  }
};

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

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentWillMount() {
  const url = "data/user_dummy.json";
  const res = await axios.get(url);
  const jsonData = await res.data;
  await this.setStateAsync({data: jsonData});
  await this.setStateAsync({dataLoaded: true});
  }


  render() {
    if (this.state.dataLoaded === true) {
      const dummy_user_id = '52988281' // id to match the telegram
      const topics = this.state.data[dummy_user_id]["topics"]
      const experts = this.state.data[dummy_user_id]["experts"]
      const skillsFutureCourses = this.state.data[dummy_user_id]["skillsFutureCourses"]
      const cscCourses = this.state.data[dummy_user_id]["cscCourses"]
      const twitter = this.state.data[dummy_user_id]["twitter"]

      return (
        <div className="animated fadeIn">
        
          <Row>
            <Col sm="4">
              <Widget02 className="profile-card" header="Daryl Lee" mainText="Head Engineering (Data Analytics)" pic={ profile } firstPost={ this.state.firstPost } lastPost={ this.state.lastPostedOn }>
              </Widget02>
            </Col>

            <Col sm="4">
              <Card className="profile-card">
                <CardHeader>
                  My Proficiency Levels
                </CardHeader>
                <CardBody>
                  <div className="chart-wrapper">
                    <Radar data={radar} options={radar['options']}/>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
              <Row>
              <Col sm="6">
                <Card>
                  <CardBody>
                    <div className="h1 text-muted text-right mb-2">
                    <i className="icon-speech"></i>
                    </div>
                    <div className="h4 mb-0" style={{color:"#63c2de"}}>10</div>
                    <small className="text-muted text-uppercase font-weight-bold">Posts</small>
                  </CardBody>
                </Card>
                </Col>

                <Col sm="6">
                <Card>
                  <CardBody>
                    <div className="h1 text-muted text-right mb-2">
                    <i className="icon-calendar"></i>
                    </div>
                    <div className="h4 mb-0" style={{color:"#20a8d8"}}>10</div>
                    <small className="text-muted text-uppercase font-weight-bold">Posts This Month</small>
                  </CardBody>
                </Card>
                </Col>
              </Row>

              <Row>
              <Col sm="6">
                <Card>
                  <CardBody>
                    <div className="h1 text-muted text-right mb-2">
                    <i className="icon-user-follow"></i>
                    </div>
                    <div className="h4 mb-0" style={{color:"#ffc107"}}>60</div>
                    <small className="text-muted text-uppercase font-weight-bold">Friends Liked My Posts</small>
                  </CardBody>
                </Card>
                </Col>

                <Col sm="6">
                <Card>
                  <CardBody>
                    <div className="h1 text-muted text-right mb-2">
                    <i className="icon-people"></i>
                    </div>
                    <div className="h4 mb-0" style={{color:"#f86c6b"}}>182</div>
                    <small className="text-muted text-uppercase font-weight-bold">Friends Seen My Posts</small>
                  </CardBody>
                </Card>
                </Col>
              </Row>

            </Col>
          </Row>

          <Row>
            <Col sm="8">
                <Card className="fill-card">
                  <CardHeader>
                    Recommended Civil Service College Courses
                  </CardHeader>
                  <CardBody className="pb-4">
                    <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                        </thead>
                        <tbody>{cscCourses.map(function(item, key) {
                          return (
                              <tr key = {key}>
                                <td>
                                  <div><b><u>{item.courseName}</u></b></div>
                                  <div><span><b>Next Course Date:</b> {item.nextDate}</span></div>
                                  <div><span><b>Friends Attended:</b> {item.friendsAttended}</span></div>
                                  <div><span><b>Required For:</b> {item.requiredFor}</span></div>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                      </Table>
                  </CardBody>
                </Card>
              </Col>

            <Col sm="4">
                <Card className="fill-card">
                  <CardHeader>
                    Recommended Skills Future Courses
                  </CardHeader>
                  <CardBody className="pb-4">
                    <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                        </thead>
                        <tbody>{skillsFutureCourses.map(function(item, key) {
                          return (
                              <tr key = {key}>
                                <td>
                                  <div><b><u>{item.courseName}</u></b></div>
                                  <div><span><b>Next Course Date:</b> {item.nextDate}</span></div>
                                  <div><span><b>Friends Attended:</b> {item.friendsAttended}</span></div>
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
            <Col sm="8">
              <Card className="fill-card">
                <CardHeader>
                  Topics I Posted
                </CardHeader>
                <CardBody className="pb-4">
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                      <thead className="thead-light">
                      <tr>
                        <th className="topics-cell">Topic</th>
                        <th>Total Likes</th>
                        <th>Total Reads</th>
                        <th className="content-cell">Posts</th>
                      </tr>
                      </thead>
                      <tbody>{topics.map(function(item, key) {
                        return (
                            <tr key = {key}>
                              <td>
                                {item.topic}
                              </td>
                              <td>
                                {item.likes}
                              </td>
                              <td>
                                {item.seen}
                              </td>
                              <td>
                                <div>{item.postContent}</div>
                                <div><a href={decodeURIComponent(item.postLink)} target="_blank">Read More...</a></div>
                                <div><span className="text-muted">{item.postDate}</span></div>
                              </td>
                          </tr>
                          )
                      })}
                      </tbody>
                    </Table>
                </CardBody>
              </Card>
            </Col>
            
            <Col sm="4">
              <Row>
                <Card>
                  <CardHeader>
                    Experts in My Community
                    <div className="card-header-actions">
                        <small className="text-muted">Based on articles I posted</small>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                      <thead className="thead-light">
                      <tr>
                        <th className="name-cell">Name</th>
                        <th className="content-cell">Areas</th>
                      </tr>
                      </thead>
                      <tbody>{experts.map(function(item, key) {
                        return (
                            <tr key = {key}>
                              <td>
                                <div >{item.name}</div>
                                <div className="text-muted">{item.division}</div>
                              </td>
                              <td>
                                {item.topics}
                              </td>
                          </tr>
                          )
                      })}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Row>
              <Row>
                <Card>
                  <CardHeader>
                    Experts on Twitter
                    <div className="card-header-actions">
                        <small className="text-muted">Based on articles I posted</small>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                        <tr>
                          <th className="name-cell">Twitter Handle</th>
                          <th className="content-cell">Latest</th>
                        </tr>
                        </thead>
                        <tbody>{twitter.map(function(item, key) {
                          return (
                              <tr key = {key}>
                                <td>
                                  {/* <div><a href={"http://www.twitter.com/" + {item.handle}} target="_blank">{item.handle}</a></div> */}
                                  <div>{item.handle}</div>
                                  {/* <div className="text-muted">{item.description}</div> */}
                                </td>
                                <td>
                                  {item.description}
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                      </Table>
                    </CardBody>
                </Card>
              </Row>          
            </Col>
          </Row>       

          <Row>
            <Col>
              <Card id="networkgraph">
                <CardHeader>
                  My Network Graph
                  <div className="card-header-actions">
                    <small className="text-muted">Based on friends reading my posts</small>
                  </div>
                </CardHeader>
                <CardBody>
                  <Graph style={{ height: "700px"}} graph={NetworkGraph['graph']} options={NetworkGraph['options']} events={NetworkGraph['events']} />
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      );
    }
    else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default User;
