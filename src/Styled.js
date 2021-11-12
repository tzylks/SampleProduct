import styled from 'styled-components'

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 4em;
  line-height: 0.74em;
  color: #f7f4af;
  background: linear-gradient(15deg, #0a0a0a 0%, #444 100%);

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  margin-top: 12vh;
  grid-template-rows: 1fr auto;
  width: 100%;
  color: #FFD371;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: 'Open Sans Condensed', sans-serif;;
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #FFD371;
  color: #252525;
`

const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #f7f4af;
`

const Jumbo = styled.div`
  align-self: center;
  padding: 100px;
  font-size: 2.5em;
  margin-bottom: 10vh;
  color: #252525;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'ThunderThin';
  font-size: 0.2em;
  line-height: 1em;
  color: #FFD371;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`

export default function Styled() {
  return (
    <Grid>
      <Left>
        <div>
          THREE.JS
          <br />
          REACT THREE
          <br />
          STYLED COMPONENTS
          <br />
          SAMPLE
          <br />
          PRODUCT
        </div>
        <Sub />
      </Left>
      <Right>
        <Jumbo>EX#1</Jumbo>
      </Right>
    </Grid>
  )
}
