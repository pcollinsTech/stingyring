import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Hexagon = styled.div`
  padding: 20px;
`

const HexagonTop = styled.div`
  width: 0;
  border-bottom: 60px solid _palette(yellow);
  border-left: 104px solid transparent;
  border-right: 104px solid transparent;
`

const HexagonMid = styled.div`
  width: 208px;
  height: 120px;
  background-color: _palette(yellow);
  text-align: center;
  .hex_inner {
    padding: 15px;
    h3 {
      color: black;
    }
  }
`

const HexagonBottom = styled.div`
  width: 208px;
  height: 120px;
  background-color: _palette(yellow);
  text-align: center;
  .hex_inner {
    padding: 15px;
    h3 {
      color: black;
    }
  }
`

const ImgStyled = styled(Img)`
  width: 100%;
  height: 350px;

  @media (max-width: 930px) {
    height: 250px;
  }
`

export default function HexagonCard({ title, img }) {
  return (
    <Hexagon>
      <HexagonTop />
      <HexagonMid>
        <div className="hex_inner">
          <h3>{title}</h3>
          <Img fluid={img} />
        </div>
      </HexagonMid>

      <HexagonBottom />
    </Hexagon>
  )
}
