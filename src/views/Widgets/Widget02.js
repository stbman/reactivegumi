import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  footer: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  pic: '../../src/assets/image/brand/logo.png',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#',
  firstPost: '',
  lastPost: {}
};

class Widget02 extends Component {
  render() {
    const { className, cssModule, header, mainText, pic, icon, firstPost, lastPost, color, footer, link, children, variant, ...attributes } = this.props;

    // demo purposes only
    const padding = (variant === '0' ? { card: 'p-3', icon: 'p-3', lead: 'mt-2' } : (variant === '1' ? {
      card: 'p-0', icon: 'p-4', lead: 'pt-3',
    } : { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' }));

    const card = { style: 'clearfix', color: color, icon: icon, classes: '' };
    card.classes = mapToCssModules(classNames(className, card.style, padding.card), cssModule);

    const lead = { style: 'h5 mb-0', color: color, classes: '' };
    lead.classes = classNames(lead.style, 'text-' + card.color, padding.lead);

    const blockIcon = function (icon) {
      const classes = classNames(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
      return (<i className={classes}></i>);
    };

    const cardFooter = function () {
      if (footer) {
        return (
          <CardFooter className="px-3 py-2">
            <a className="font-weight-bold font-xs btn-block text-muted" href={link}>View More
              <i className="fa fa-angle-right float-right font-lg"></i></a>
          </CardFooter>
        );
      }
    };

    return (
      <Card>
        <CardBody className={card.classes} {...attributes}>
          {/* {blockIcon(card.icon)} */}
          <Row>
            <Col sm="3">
              <img src={pic} alt={mainText} className="user-image"/>
            </Col>
            <Col sm="8">
              <div className={lead.classes}>{header}</div>
              <div className="text-muted text-uppercase font-weight-bold font-xs">{mainText}</div>

              <hr size="3"></hr>
              <div><strong>First Posted On: </strong>{firstPost}</div>
              <div><strong>Latest Post:</strong>
                <div>{lastPost.content}</div>
                <div><a href={decodeURIComponent(lastPost.link)} target="_blank">Read More...</a></div>
                <div><span className="text-muted">{lastPost.date}</span></div>
              </div>
            </Col>
          </Row>
        </CardBody>
        {cardFooter()}
      </Card>
    );
  }
}

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;

export default Widget02;