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
      label: 'My Second dataset',
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

const networkGraph = {
  graph: {
    nodes: [
        {id: 0, "label": "Myriel", "group": 1},
        {id: 1, "label": "Napoleon", "group": 1},
        {id: 2, "label": "Mlle.Baptistine", "group": 1},
        {id: 3, "label": "Mme.Magloire", "group": 1},
        {id: 4, "label": "CountessdeLo", "group": 1},
        {id: 5, "label": "Geborand", "group": 1},
        {id: 6, "label": "Champtercier", "group": 1},
        {id: 7, "label": "Cravatte", "group": 1},
        {id: 8, "label": "Count", "group": 1},
        {id: 9, "label": "OldMan", "group": 1},
        {id: 10, "label": "Labarre", "group": 2},
        {id: 11, "label": "Valjean", "group": 2},
        {id: 12, "label": "Marguerite", "group": 3},
        {id: 13, "label": "Mme.deR", "group": 2},
        {id: 14, "label": "Isabeau", "group": 2},
        {id: 15, "label": "Gervais", "group": 2},
        {id: 16, "label": "Tholomyes", "group": 3},
        {id: 17, "label": "Listolier", "group": 3},
        {id: 18, "label": "Fameuil", "group": 3},
        {id: 19, "label": "Blacheville", "group": 3},
        {id: 20, "label": "Favourite", "group": 3},
        {id: 21, "label": "Dahlia", "group": 3},
        {id: 22, "label": "Zephine", "group": 3},
        {id: 23, "label": "Fantine", "group": 3},
        {id: 24, "label": "Mme.Thenardier", "group": 4},
        {id: 25, "label": "Thenardier", "group": 4},
        {id: 26, "label": "Cosette", "group": 5},
        {id: 27, "label": "Javert", "group": 4},
        {id: 28, "label": "Fauchelevent", "group": 0},
        {id: 29, "label": "Bamatabois", "group": 2},
        {id: 30, "label": "Perpetue", "group": 3},
        {id: 31, "label": "Simplice", "group": 2},
        {id: 32, "label": "Scaufflaire", "group": 2},
        {id: 33, "label": "Woman1", "group": 2},
        {id: 34, "label": "Judge", "group": 2},
        {id: 35, "label": "Champmathieu", "group": 2},
        {id: 36, "label": "Brevet", "group": 2},
        {id: 37, "label": "Chenildieu", "group": 2},
        {id: 38, "label": "Cochepaille", "group": 2},
        {id: 39, "label": "Pontmercy", "group": 4},
        {id: 40, "label": "Boulatruelle", "group": 6},
        {id: 41, "label": "Eponine", "group": 4},
        {id: 42, "label": "Anzelma", "group": 4},
        {id: 43, "label": "Woman2", "group": 5},
        {id: 44, "label": "MotherInnocent", "group": 0},
        {id: 45, "label": "Gribier", "group": 0},
        {id: 46, "label": "Jondrette", "group": 7},
        {id: 47, "label": "Mme.Burgon", "group": 7},
        {id: 48, "label": "Gavroche", "group": 8},
        {id: 49, "label": "Gillenormand", "group": 5},
        {id: 50, "label": "Magnon", "group": 5},
        {id: 51, "label": "Mlle.Gillenormand", "group": 5},
        {id: 52, "label": "Mme.Pontmercy", "group": 5},
        {id: 53, "label": "Mlle.Vaubois", "group": 5},
        {id: 54, "label": "Lt.Gillenormand", "group": 5},
        {id: 55, "label": "Marius", "group": 8},
        {id: 56, "label": "BaronessT", "group": 5},
        {id: 57, "label": "Mabeuf", "group": 8},
        {id: 58, "label": "Enjolras", "group": 8},
        {id: 59, "label": "Combeferre", "group": 8},
        {id: 60, "label": "Prouvaire", "group": 8},
        {id: 61, "label": "Feuilly", "group": 8},
        {id: 62, "label": "Courfeyrac", "group": 8},
        {id: 63, "label": "Bahorel", "group": 8},
        {id: 64, "label": "Bossuet", "group": 8},
        {id: 65, "label": "Joly", "group": 8},
        {id: 66, "label": "Grantaire", "group": 8},
        {id: 67, "label": "MotherPlutarch", "group": 9},
        {id: 68, "label": "Gueulemer", "group": 4},
        {id: 69, "label": "Babet", "group": 4},
        {id: 70, "label": "Claquesous", "group": 4},
        {id: 71, "label": "Montparnasse", "group": 4},
        {id: 72, "label": "Toussaint", "group": 5},
        {id: 73, "label": "Child1", "group": 10},
        {id: 74, "label": "Child2", "group": 10},
        {id: 75, "label": "Brujon", "group": 4},
        {id: 76, "label": "Mme.Hucheloup", "group": 8}
      ],
    edges: [
        {"from": 1, "to": 0},
        {"from": 2, "to": 0},
        {"from": 3, "to": 0},
        {"from": 3, "to": 2},
        {"from": 4, "to": 0},
        {"from": 5, "to": 0},
        {"from": 6, "to": 0},
        {"from": 7, "to": 0},
        {"from": 8, "to": 0},
        {"from": 9, "to": 0},
        {"from": 11, "to": 10},
        {"from": 11, "to": 3},
        {"from": 11, "to": 2},
        {"from": 11, "to": 0},
        {"from": 12, "to": 11},
        {"from": 13, "to": 11},
        {"from": 14, "to": 11},
        {"from": 15, "to": 11},
        {"from": 17, "to": 16},
        {"from": 18, "to": 16},
        {"from": 18, "to": 17},
        {"from": 19, "to": 16},
        {"from": 19, "to": 17},
        {"from": 19, "to": 18},
        {"from": 20, "to": 16},
        {"from": 20, "to": 17},
        {"from": 20, "to": 18},
        {"from": 20, "to": 19},
        {"from": 21, "to": 16},
        {"from": 21, "to": 17},
        {"from": 21, "to": 18},
        {"from": 21, "to": 19},
        {"from": 21, "to": 20},
        {"from": 22, "to": 16},
        {"from": 22, "to": 17},
        {"from": 22, "to": 18},
        {"from": 22, "to": 19},
        {"from": 22, "to": 20},
        {"from": 22, "to": 21},
        {"from": 23, "to": 16},
        {"from": 23, "to": 17},
        {"from": 23, "to": 18},
        {"from": 23, "to": 19},
        {"from": 23, "to": 20},
        {"from": 23, "to": 21},
        {"from": 23, "to": 22},
        {"from": 23, "to": 12},
        {"from": 23, "to": 11},
        {"from": 24, "to": 23},
        {"from": 24, "to": 11},
        {"from": 25, "to": 24},
        {"from": 25, "to": 23},
        {"from": 25, "to": 11},
        {"from": 26, "to": 24},
        {"from": 26, "to": 11},
        {"from": 26, "to": 16},
        {"from": 26, "to": 25},
        {"from": 27, "to": 11},
        {"from": 27, "to": 23},
        {"from": 27, "to": 25},
        {"from": 27, "to": 24},
        {"from": 27, "to": 26},
        {"from": 28, "to": 11},
        {"from": 28, "to": 27},
        {"from": 29, "to": 23},
        {"from": 29, "to": 27},
        {"from": 29, "to": 11},
        {"from": 30, "to": 23},
        {"from": 31, "to": 30},
        {"from": 31, "to": 11},
        {"from": 31, "to": 23},
        {"from": 31, "to": 27},
        {"from": 32, "to": 11},
        {"from": 33, "to": 11},
        {"from": 33, "to": 27},
        {"from": 34, "to": 11},
        {"from": 34, "to": 29},
        {"from": 35, "to": 11},
        {"from": 35, "to": 34},
        {"from": 35, "to": 29},
        {"from": 36, "to": 34},
        {"from": 36, "to": 35},
        {"from": 36, "to": 11},
        {"from": 36, "to": 29},
        {"from": 37, "to": 34},
        {"from": 37, "to": 35},
        {"from": 37, "to": 36},
        {"from": 37, "to": 11},
        {"from": 37, "to": 29},
        {"from": 38, "to": 34},
        {"from": 38, "to": 35},
        {"from": 38, "to": 36},
        {"from": 38, "to": 37},
        {"from": 38, "to": 11},
        {"from": 38, "to": 29},
        {"from": 39, "to": 25},
        {"from": 40, "to": 25},
        {"from": 41, "to": 24},
        {"from": 41, "to": 25},
        {"from": 42, "to": 41},
        {"from": 42, "to": 25},
        {"from": 42, "to": 24},
        {"from": 43, "to": 11},
        {"from": 43, "to": 26},
        {"from": 43, "to": 27},
        {"from": 44, "to": 28},
        {"from": 44, "to": 11},
        {"from": 45, "to": 28},
        {"from": 47, "to": 46},
        {"from": 48, "to": 47},
        {"from": 48, "to": 25},
        {"from": 48, "to": 27},
        {"from": 48, "to": 11},
        {"from": 49, "to": 26},
        {"from": 49, "to": 11},
        {"from": 50, "to": 49},
        {"from": 50, "to": 24},
        {"from": 51, "to": 49},
        {"from": 51, "to": 26},
        {"from": 51, "to": 11},
        {"from": 52, "to": 51},
        {"from": 52, "to": 39},
        {"from": 53, "to": 51},
        {"from": 54, "to": 51},
        {"from": 54, "to": 49},
        {"from": 54, "to": 26},
        {"from": 55, "to": 51},
        {"from": 55, "to": 49},
        {"from": 55, "to": 39},
        {"from": 55, "to": 54},
        {"from": 55, "to": 26},
        {"from": 55, "to": 11},
        {"from": 55, "to": 16},
        {"from": 55, "to": 25},
        {"from": 55, "to": 41},
        {"from": 55, "to": 48},
        {"from": 56, "to": 49},
        {"from": 56, "to": 55},
        {"from": 57, "to": 55},
        {"from": 57, "to": 41},
        {"from": 57, "to": 48},
        {"from": 58, "to": 55},
        {"from": 58, "to": 48},
        {"from": 58, "to": 27},
        {"from": 58, "to": 57},
        {"from": 58, "to": 11},
        {"from": 59, "to": 58},
        {"from": 59, "to": 55},
        {"from": 59, "to": 48},
        {"from": 59, "to": 57},
        {"from": 60, "to": 48},
        {"from": 60, "to": 58},
        {"from": 60, "to": 59},
        {"from": 61, "to": 48},
        {"from": 61, "to": 58},
        {"from": 61, "to": 60},
        {"from": 61, "to": 59},
        {"from": 61, "to": 57},
        {"from": 61, "to": 55},
        {"from": 62, "to": 55},
        {"from": 62, "to": 58},
        {"from": 62, "to": 59},
        {"from": 62, "to": 48},
        {"from": 62, "to": 57},
        {"from": 62, "to": 41},
        {"from": 62, "to": 61},
        {"from": 62, "to": 60},
        {"from": 63, "to": 59},
        {"from": 63, "to": 48},
        {"from": 63, "to": 62},
        {"from": 63, "to": 57},
        {"from": 63, "to": 58},
        {"from": 63, "to": 61},
        {"from": 63, "to": 60},
        {"from": 63, "to": 55},
        {"from": 64, "to": 55},
        {"from": 64, "to": 62},
        {"from": 64, "to": 48},
        {"from": 64, "to": 63},
        {"from": 64, "to": 58},
        {"from": 64, "to": 61},
        {"from": 64, "to": 60},
        {"from": 64, "to": 59},
        {"from": 64, "to": 57},
        {"from": 64, "to": 11},
        {"from": 65, "to": 63},
        {"from": 65, "to": 64},
        {"from": 65, "to": 48},
        {"from": 65, "to": 62},
        {"from": 65, "to": 58},
        {"from": 65, "to": 61},
        {"from": 65, "to": 60},
        {"from": 65, "to": 59},
        {"from": 65, "to": 57},
        {"from": 65, "to": 55},
        {"from": 66, "to": 64},
        {"from": 66, "to": 58},
        {"from": 66, "to": 59},
        {"from": 66, "to": 62},
        {"from": 66, "to": 65},
        {"from": 66, "to": 48},
        {"from": 66, "to": 63},
        {"from": 66, "to": 61},
        {"from": 66, "to": 60},
        {"from": 67, "to": 57},
        {"from": 68, "to": 25},
        {"from": 68, "to": 11},
        {"from": 68, "to": 24},
        {"from": 68, "to": 27},
        {"from": 68, "to": 48},
        {"from": 68, "to": 41},
        {"from": 69, "to": 25},
        {"from": 69, "to": 68},
        {"from": 69, "to": 11},
        {"from": 69, "to": 24},
        {"from": 69, "to": 27},
        {"from": 69, "to": 48},
        {"from": 69, "to": 41},
        {"from": 70, "to": 25},
        {"from": 70, "to": 69},
        {"from": 70, "to": 68},
        {"from": 70, "to": 11},
        {"from": 70, "to": 24},
        {"from": 70, "to": 27},
        {"from": 70, "to": 41},
        {"from": 70, "to": 58},
        {"from": 71, "to": 27},
        {"from": 71, "to": 69},
        {"from": 71, "to": 68},
        {"from": 71, "to": 70},
        {"from": 71, "to": 11},
        {"from": 71, "to": 48},
        {"from": 71, "to": 41},
        {"from": 71, "to": 25},
        {"from": 72, "to": 26},
        {"from": 72, "to": 27},
        {"from": 72, "to": 11},
        {"from": 73, "to": 48},
        {"from": 74, "to": 48},
        {"from": 74, "to": 73},
        {"from": 75, "to": 69},
        {"from": 75, "to": 68},
        {"from": 75, "to": 25},
        {"from": 75, "to": 48},
        {"from": 75, "to": 41},
        {"from": 75, "to": 70},
        {"from": 75, "to": 71},
        {"from": 76, "to": 64},
        {"from": 76, "to": 65},
        {"from": 76, "to": 66},
        {"from": 76, "to": 63},
        {"from": 76, "to": 62},
        {"from": 76, "to": 48},
        {"from": 76, "to": 58}
      ]
  },
  options: {
      nodes: {
        shape: 'dot',
        size: 16
    },
    physics: {
        forceAtlas2Based: {
            gravitationalConstant: -26,
            centralGravity: 0.005,
            springLength: 230,
            springConstant: 0.18
        },
        maxVelocity: 146,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: {iterations: 150}
    }
  }
}

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
            <Card>
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
            <Card>
              <CardHeader>
                My Network Graph
                <div className="card-header-actions">
                  <small className="text-muted">Based on friends reading my posts</small>
                </div>
              </CardHeader>
              <CardBody>
                <Graph graph={networkGraph['graph']} options={networkGraph['options']} events={networkGraph['events']} />
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default User;
