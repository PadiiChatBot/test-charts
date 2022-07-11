/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, useEffect, useState} from 'react';
import {processColor, StyleSheet, Text, View} from 'react-native';

import {LineChart, LineData, PieChart} from 'react-native-charts-wrapper';

/*
const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
*/

const colors = [
  processColor('red'),
  processColor('blue'),
  processColor('green'),
  processColor('yellow'),
  processColor('purple'),
  processColor('pink'),
];

const App = () => {
  const [state, setState] = useState({
    values: [0, 1, 2, 3, 4, 55, 6, 700],
    colorIndex: 0,
    marker: {
      enabled: true,
      digits: 2,
      backgroundTint: processColor('teal'),
      markerColor: processColor('#F0C0FF8C'),
      textColor: processColor('white'),
    },
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState({
  //       ...state,
  //       values: state.values.concat([Math.floor(Math.random() * 100 + 1)]),
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [state.values.length, state]);

  const next = (values: number[]) => {
    return {
      data: {
        dataSets: [
          {
            values: series1.data.map(d => ({y: d.v, x: d.d})),
            label: 'Sine function',

            config: {
              drawValues: false,
              color: colors[0],
              mode: 'CUBIC_BEZIER',
              drawCircles: false,
              lineWidth: 2,
            },
          },
        ],
      },
      xAxis: {
        axisLineWidth: 0,
        drawLabels: false,
        position: 'BOTTOM',
        drawGridLines: false,
      },
    };
  };

  const config = next(state.values);
  return (
    <Fragment>
      <Text>test </Text>
      <Text>test </Text>
      <Text>test </Text>
      <Text>test </Text>
      <View style={styles.container}>
        <PieChart
          legend={{enabled: false}}
          holeRadius={80}
          styledCenterText={{size: 13, text: '15\n assets'}}
          animation={{
            durationX: 1000,
            durationY: 1000,
          }}
          style={styles.chart}
          data={{
            dataSets: [
              {
                label: '',
                config: {
                  selectionShift: 0,
                  drawValues: false,
                  highlightEnabled: false,

                  sliceSpace: 3,
                  colors: [
                    processColor('red'),
                    processColor('blue'),
                    processColor('green'),
                  ],
                },
                values: [{value: 1}, 3, 10],
              },
            ],
          }}
        />

        <LineChart
          legend={{enabled: false}}
          yAxis={{
            left: {
              enabled: false,
            },
            right: {
              enabled: false,
            },
          }}
          viewPortOffsets={{bottom: 0}}
          borderWidth={0}
          drawGridBackground={false}
          drawBorders={false}
          data={config.data as LineData}
          xAxis={{
            enabled: false,
            axisMaximum: series1.domainX[1],
          }}
          style={styles.lineContainer}
        />

        <LineChart
          legend={{enabled: false}}
          yAxis={{
            left: {
              enabled: false,
            },
            right: {
              enabled: false,
            },
          }}
          viewPortOffsets={{bottom: 0}}
          borderWidth={0}
          drawGridBackground={false}
          drawBorders={false}
          data={config.data as LineData}
          xAxis={{
            axisLineWidth: 0,
            drawLabels: false,
            drawAxisLines: false,
            drawLimitLinesBehindData: false,
            position: 'BOTTOM',
            drawGridLines: false,
          }}
          style={styles.lineContainer}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    height: 45,
    width: 116,
    backgroundColor: 'purple',
    marginVertical: 50,
    marginHorizontal: 50,
  },

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    height: 104,
    width: 104,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

export const series1 = {
  domainX: [1657531500000, 1657554900000],
  data: [
    {d: 1657531500000, v: 147.04},
    {d: 1657531800000, v: 145.47},
    {d: 1657532100000, v: 145.394},
    {d: 1657532400000, v: 144.364},
    {d: 1657532700000, v: 144.45},
    {d: 1657533000000, v: 143.966},
    {d: 1657533300000, v: 144.049},
    {d: 1657533600000, v: 144.218},
    {d: 1657533900000, v: 144.186},
    {d: 1657534200000, v: 144.414},
    {d: 1657534500000, v: 144.353},
    {d: 1657534800000, v: 144.619},
    {d: 1657535100000, v: 144.697},
    {d: 1657535400000, v: 145.053},
    {d: 1657535700000, v: 145.215},
    {d: 1657536000000, v: 145.418},
    {d: 1657536300000, v: 145.551},
    {d: 1657536600000, v: 145.551},
    {d: 1657536900000, v: 145.212},
    {d: 1657537200000, v: 145.117},
    {d: 1657537500000, v: 145.007},
    {d: 1657537800000, v: 145.5},
    {d: 1657538100000, v: 145.563},
    {d: 1657538400000, v: 145.563},
    {d: 1657538700000, v: 145.355},
    {d: 1657539000000, v: 145.38},
    {d: 1657539300000, v: 145.21},
    {d: 1657539600000, v: 145.288},
    {d: 1657539900000, v: 145.26},
    {d: 1657540200000, v: 145.003},
    {d: 1657540500000, v: 144.987},
    {d: 1657540800000, v: 145.203},
    {d: 1657541100000, v: 145.129},
    {d: 1657541400000, v: 145.336},
    {d: 1657541700000, v: 145.401},
    {d: 1657542000000, v: 145.332},
    {d: 1657542300000, v: 145.273},
    {d: 1657542600000, v: 145.315},
    {d: 1657542900000, v: 145.476},
    {d: 1657543200000, v: 145.572},
    {d: 1657543500000, v: 145.432},
    {d: 1657543800000, v: 145.349},
    {d: 1657544100000, v: 145.374},
    {d: 1657544400000, v: 145.502},
    {d: 1657544700000, v: 145.725},
    {d: 1657545000000, v: 146.006},
    {d: 1657545300000, v: 145.923},
    {d: 1657545600000, v: 145.923},
    {d: 1657545900000, v: 146.163},
    {d: 1657546200000, v: 146.128},
    {d: 1657546500000, v: 146.128},
    {d: 1657546800000, v: 146.128},
    {d: 1657547100000, v: 146.442},
    {d: 1657547400000, v: 146.469},
    {d: 1657547700000, v: 146.538},
    {d: 1657548000000, v: 146.398},
    // {d: 1657548300000, v: 146.253},
    // {d: 1657548600000, v: 146.049},
    // {d: 1657548900000, v: 146.03},
    // {d: 1657549200000, v: 146.03},
    // {d: 1657549500000, v: 145.886},
    // {d: 1657549800000, v: 145.792},
    // {d: 1657550100000, v: 145.715},
    // {d: 1657550400000, v: 145.8},
    // {d: 1657550700000, v: 145.913},
    // {d: 1657551000000, v: 145.569},
    // {d: 1657551300000, v: 145.522},
    // {d: 1657551600000, v: 145.395},
    // {d: 1657551900000, v: 145.067},
    // {d: 1657552200000, v: 144.993},
    // {d: 1657552500000, v: 144.942},
    // {d: 1657552800000, v: 144.882},
    // {d: 1657553100000, v: 144.958},
    // {d: 1657553400000, v: 145.01},
    // {d: 1657553700000, v: 144.979},
    // {d: 1657554000000, v: 145.083},
    // {d: 1657554300000, v: 144.803},
    // {d: 1657554600000, v: 144.779},
    // {d: 1657554900000, v: 144.649},
  ],
};
