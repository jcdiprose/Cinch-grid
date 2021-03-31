import React, { Component, createRef, useRef } from 'react'
import ReactDom from 'react-dom'

import './demoStyles.scss'
import { Container, Col, Row } from './grid'

const ContentItem = () => {
  return <div className="content-item" />
}

const createSixteenColumns = () => {
  const columns = []
  for (let i = 0; i < 12; i++) {
    columns.push(
      <Col widths={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }} key={i}>
        <ContentItem />
      </Col>
    )
  }
  return columns
}

const Demo = () => {
  return (
    <>
      <h1>Cinch Grid</h1>
      <h4>
        Zero styles.
        <br />
        Zero padding to fight with.
        <br />
        Custom breakpoints.
      </h4>
      <Container>
        <Row>
          <Col widths={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <ContentItem />
          </Col>
        </Row>
        <Row>
          <Col widths={{ xs: 6, sm: 6, md: 10, lg: 9, xl: 8 }}>
            <ContentItem />
          </Col>
          <Col widths={{ xs: 6, sm: 6, md: 2, lg: 3, xl: 4 }}>
            <ContentItem />
          </Col>
        </Row>
        <Row>
          <Col widths={{ xs: 4, sm: 4, md: 3, lg: 2, xl: 2 }}>
            <ContentItem />
          </Col>
          <Col widths={{ xs: 4, sm: 4, md: 6, lg: 8, xl: 8 }}>
            <ContentItem />
          </Col>
          <Col widths={{ xs: 4, sm: 4, md: 3, lg: 2, xl: 2 }}>
            <ContentItem />
          </Col>
        </Row>
        <Row>
          <Col widths={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <ContentItem />
          </Col>
          <Col widths={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <ContentItem />
          </Col>
          <Col widths={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <ContentItem />
          </Col>
          <Col widths={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <ContentItem />
          </Col>
        </Row>
        <Row>{createSixteenColumns()}</Row>
      </Container>
    </>
  )
}

ReactDom.render(<Demo />, document.getElementById('notify'))
