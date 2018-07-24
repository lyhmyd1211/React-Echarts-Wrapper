# React-Echarts-Wrapper
An Echarts wrapper component for react


## Install

```
npm i React-Echarts-Wrapper
```

or

```
yarn add React-Echarts-Wrapper
```


## Usage

First import into the project:

```
import Echarts from 'React-Echarts-Wrapper';
```
Used is JSX:

```
 <Echarts
      options={this.state.option}
      loading={this.state.loading}
      onChartsReady={this.getInstance}
    />
```
When you change the value of option by setState, it is equivalent to executing 'echarts.setOption',you can display dynamic data by constantly changing the option and causing redrawing.'loading' is the same way.


You can get the object instance of echarts by 'onChartsReady',then
```
getInstance(instance){
    console.log('instance',instance);
  }
```

opts:

Additional parameters. There are several options below:

devicePixelRatio

Device pixel ratio, the browser value of window.devicePixelRatio is taken by default.

Renderer

Renderer that supports 'canvas' or 'svg'. See Rendering with Canvas or SVG.

Width

The instance width can be explicitly specified in pixels. If the value passed in is null/undefined/'auto', it means that the width of the dom (instance container) is automatically taken.

Height

The instance height can be explicitly specified in pixels. If the value passed in is null/undefined/'auto', it means that the height of the dom (instance container) is automatically taken.


## API
Parameter | Explain|Type|default
---|---|---|---
options |Configuration items and data for ECh-arts|Object|-
notMerge | Optional, whether not to merge with the previously set options.|Boolean|false
loading |Whether to display the loading animation effect|Boolean|false
onChartsReady|Get the object instance of echarts|function|-
theme|Change global style.Built in two sets of themes, 'light' and 'dark'.See the official documentation for details.|String|-
opts|Additional parameters|Object|-
lazyUpdate|Optional, whether to update the chart immediately after setting the option, the default is false, that is, update immediately|Boolean|false
silent|Optional, it prevents the event from being thrown when calling setOption. The default is false, that is, the event is thrown.|Boolean|false


