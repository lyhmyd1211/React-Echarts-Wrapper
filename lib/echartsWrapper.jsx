import React, { Component } from "react";
import  echarts from 'echarts';
import './style.css';
export default class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.myCharts = '';
    this.state={
      options:this.props.options,
      loading: this.props.loading ? this.props.loading:false,
      onChartsReady: this.props.onChartsReady ? this.props.onChartsReady:null,
      
      theme: this.props.theme ? this.props.theme:'',
      opts: this.props.opts ? this.props.opts:'',

      notMerge: this.props.notMerge ? this.props.notMerge:false,
      lazyUpdate: this.props.lazyUpdate ? this.props.lazyUpdate:false,
      silent: this.props.silent ? this.props.silent:false,
    }
  }
  
  componentDidMount(){
    const { notMerge, lazyUpdate, silent, theme, opts}= this.state;
    this.myCharts = echarts.init(document.getElementById("mainCharts"),theme,opts);
    this.myCharts.setOption(this.props.options, notMerge, lazyUpdate, silent);
    if (this.state.onChartsReady) {
      this.state.onChartsReady(this.myCharts);
    }
  }
  componentDidUpdate(){
    const { notMerge, lazyUpdate, silent} = this.state;
    if (this.props.options!==this.state.options) {
      this.myCharts.setOption(this.props.options, notMerge, lazyUpdate, silent);
      this.setState({options:this.props.options});
    }
    if (this.props.loading !== this.state.loading) {
      this.props.loading ? this.myCharts.showLoading() : this.myCharts.hideLoading();
      this.setState({ loading: this.props.loading});
    }
  }
  render(){
    return (
      <div id="mainCharts" style={this.props.style||{}}/>
    )
  }
}