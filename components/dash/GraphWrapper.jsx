'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Preloader, Input, Row } from 'react-materialize';
import { mockData } from '../../test/mockdata.js'
import { ChartCanvas, Chart, series, scale, coordinates, tooltip, axes, indicator, helper } from "react-stockcharts";
var { CandlestickSeries, BarSeries, LineSeries, AreaSeries } = series;
var { discontinuousTimeScaleProvider } = scale;
var { CrossHairCursor, MouseCoordinateX, MouseCoordinateY, CurrentCoordinate } = coordinates;
var { OHLCTooltip, MovingAverageTooltip } = tooltip;
var { XAxis, YAxis } = axes;
var { ema, sma } = indicator;
var { fitWidth, TypeChooser } = helper;

var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { data, type, width, ratio } = this.props;

    var ema20 = ema()
      .windowSize(20) // optional will default to 10
      .sourcePath("close") // optional will default to close as the source
      .skipUndefined(true) // defaults to true
      .merge((d, c) => {d.ema20 = c}) // Required, if not provided, log a error
      .accessor(d => d.ema20) // Required, if not provided, log an error during calculation
      .stroke("#18ACDB") // Optional

    var sma20 = sma()
      .windowSize(20)
      .sourcePath("close")
      .merge((d, c) => {d.sma20 = c})
      .accessor(d => d.sma20)
      .stroke('#DB7A18')

    var ema50 = ema()
      .windowSize(50)
      .sourcePath("close")
      .merge((d, c) => {d.ema50 = c})
      .accessor(d => d.ema50)
      .stroke('#811B00')

    var smaVolume50 = sma()
      .windowSize(50)
      .sourcePath("volume")
      .merge((d, c) => {d.smaVolume50 = c})
      .accessor(d => d.smaVolume50)
      .stroke("#4682B4")
      .fill("#4682B4");

    var chartHeight = window.innerHeight * 0.4;
    var resize = function() {
      charHeight = window.innerHeight * 0.42;
    }

    // window.onresize = resize;

    return (
      <ChartCanvas ratio={ratio} width={width} height={400}
          margin={{ left: 50, right: 50, top: 60, bottom: 20 }} type={type}
          seriesName="MSFT"
          data={data} calculator={[sma20, ema20, ema50, smaVolume50]}
          xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
          xExtents={[new Date(2017, 0, 16), new Date()]}>
        <Chart id={1}
            yExtents={[d => [d.high, d.low], sma20.accessor(), ema20.accessor(), ema50.accessor()]}
            padding={{ top: 10, bottom: 10 }}>
          <XAxis axisAt="bottom" orient="bottom"/>
          <YAxis axisAt="right" orient="right" ticks={5} />

          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={d3.format(".5")} />

          <CandlestickSeries />
          <LineSeries yAccessor={sma20.accessor()} stroke={sma20.stroke()}/>
          <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()}/>
          <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>
          <CurrentCoordinate yAccessor={sma20.accessor()} fill={sma20.stroke()} />
          <CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()} />
          <CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />

          <OHLCTooltip origin={[-40, 0]} ohlcFormat={d3.format('.5')}/>
          <MovingAverageTooltip onClick={(e) => console.log(e)} origin={[-38, 15]}
            calculators={[sma20, ema20, ema50]} displayFormat={d3.format(".5")} />
        </Chart>
        <Chart id={2}
            yExtents={[d => d.volume, smaVolume50.accessor()]}
            height={150} origin={(w, h) => [0, h - 150]}>
          <YAxis axisAt="left" orient="left" ticks={5} tickFormat={d3.format(".0d")}/>

          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={d3.timeFormat("%H:%M:%S")} />
          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={d3.format(".4s")} />

          <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "#21CE99" : "#DA4E28"} />
          <AreaSeries yAccessor={smaVolume50.accessor()} stroke={smaVolume50.stroke()} fill={smaVolume50.fill()}/>
          <CurrentCoordinate yAccessor={smaVolume50.accessor()} fill={smaVolume50.stroke()} />
          <CurrentCoordinate yAccessor={d => d.volume} fill="#333333" />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
      )
  }
}
Graph.propTypes = {
  data: React.PropTypes.array.isRequired,
  width: React.PropTypes.number.isRequired,
  ratio: React.PropTypes.number.isRequired,
  type: React.PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

Graph.defaultProps = {
  type: "hybrid",
};


Graph = fitWidth(Graph);



class GraphWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) {
     return (
      <div className='graphSpinner'> 
        <Preloader flashing/>
      </div>
      ) 
    } else {
      this.props.data.forEach((d, i) => {
        d.date = new Date(d.date);
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        d.volume = +d.volume;
      })
      return (
        <div className='graph'>
          <TypeChooser type="hybrid">
            {type => <Graph data={this.props.data} type={type} />}
          </TypeChooser>
        </div>
      )
    }
  }
}



export default GraphWrapper;
