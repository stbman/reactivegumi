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

import profile from '../../assets/img/profile/lynnette.jpeg'
import { NetworkGraph } from '../../assets/data/NetworkGraph.new'

//TODO: Get this generated
const topics = [
  {
    'topic': 'ai',
    'likes': "3",
    'seen': "15",
    'postContent': "UK announces £1b drive into artificial intelligence",
    'postLink': "https%3A%2F%2Fwww.businesstimes.com.sg%2Fgovernment-economy%2Fuk-announces-%C2%A31b-drive-into-artificial-intelligence&h=ATP4bL2ixfvEBGwBq72MPeLLoQiOKg_3eHfNCPt1D4-GurgJqHIpAkfIuu_2XiZK2igSIp1tEBKYarO9eZA5rlnDqnRRLGzUBl-GbughSCZ5qQUx2iEOpa9b0jBMn7Xa84xDMVk",
    'postDate': "2018-04-27 09:15:00"
  },
  {
    'topic': 'voice',
    'likes': "1",
    'seen': "17",
    'postContent': "In pursuit of the perfect AI voice",
    'postLink': "http%3A%2F%2Fflip.it%2FdbGLMs&h=ATPVk9vcR1tVMdYd6DEZU-BhWn0AGJ9sDuTfJArTyzMieNpPS1GhQ-SvThsdsJAPnAUdMCZpbnq9mnNHDZSsnY88SLDtLdmHK74wjrbWgk3fyJsf9tSknk3-EDE-bWlVd5I1OIg",
    'postDate': "2018-04-19 08:05:00"
  },
  {
    'topic': 'nus enterprise',
    'likes': "2",
    'seen': "19",
    'postContent': "More happenings in Blk 71	NUS Enterprise and Singtel Innov8 launch new hub for cybersecurity startups",
    'postLink': "https%3A%2F%2Fwww.opengovasia.com%2Farticles%2Fnus-enterprise-and-singtel-innov8-launch-new-hub-for-cybersecurity-startups&h=ATP3EhB23lyAgydx4njuI42qkYs0uKc-tkU5AmDg3lj_zB1d_46ASIF520LqZ-NwjFhuxyFwyeA65aM49f2Es0ZSMA2ROIi4S_L-suJXNkLxhQoe-n4ntLNs8oYxGJ7S0ooCkgs",
    'postDate': "2018-04-03 23:46:00"
  },
  {
    'topic': 'ai imaging technique',
    'likes': "2",
    'seen': "17", 
    'postContent': "Nvidia's AI Imaging Technique Can Repair Damaged Photos Realistically",
    'postLink': "https%3A%2F%2Fbeebom.com%2Fnvidia-feature-repair-images%2F&h=ATND9K2Pusn5l0grvny39IyNOsDz9xbxSHII4_jW84Rou7DXxFYKvtsaMj_r2NMiIHDIzojZI8YDNXZrikWVprXG8ffkHf7uYoIOddUeQayFqsUG7BqUL8jp_C77F5cR3U_7Lt4",
    'postDate': "2018-04-25 09:15:00"
  }  
]

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

const experts = [
  {
    'name': 'Tan Kah Siong',
    'division': 'Digital Hub',
    'topics': 'natural language processing'
  },
  {
    'name': 'Gumi',
    'division': 'C4ID',
    'topics': 'kernel machine learning'
  },
  {
    'name': 'Kevin, Yih Liang Koo',
    'division': 'Digital Hub',
    'topics': 'ai, voiceradual use nature'
  }  
]

const twitter = [
  {
    'handle': 'AI @DeepLearn007',
    'description': '#ArtificialIntelligence #MachineLearning #DeepLearning',
    'lastPost': 'The Neural Network Zoo'
  },
  {
    'handle': 'Montréal.AI @Montreal_AI',
    'description': '1er conglomérat de l#IA a #Montreal',
    'lastPost': 'http://Montreal.AI  Joint Transformative AI Engineering Task Force'
  },
  {
    'handle': 'Omar Sultan AlOlama @OmarSAlolama',
    'description': 'Minister of State for Artificial Intelligence at UAE',
    'lastPost': 'Very warm welcome to Sheikh Abdullah and his delegation of UAE Ministers to Canada...'
  }
]

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
          <Col sm="4">
            <Widget02 className="profile-card" header="Tan Jia Hui" mainText="Head (Tech Office), Digital Hub" pic={ profile } firstPost={ this.state.firstPost } lastPost={ this.state.lastPostedOn }>
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
                  <div className="h4 mb-0" style={{color:"#20a8d8"}}>4</div>
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
                  <div className="h4 mb-0" style={{color:"#ffc107"}}>10</div>
                  <small className="text-muted text-uppercase font-weight-bold">Friends Like Her Posts</small>
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
                  <small className="text-muted text-uppercase font-weight-bold">Friends Seen Her Posts</small>
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
                <Graph style={{ height: "500px"}} graph={NetworkGraph['graph']} options={NetworkGraph['options']} events={NetworkGraph['events']} />
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default User;
