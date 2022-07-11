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
import {
  processColor,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
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
  const isDarkMode = useColorScheme() === 'dark';

  const [state, setState] = useState({
    values: [0],
    colorIndex: 0,
    marker: {
      enabled: true,
      digits: 2,
      backgroundTint: processColor('teal'),
      markerColor: processColor('#F0C0FF8C'),
      textColor: processColor('white'),
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        ...state,
        values: state.values.concat([Math.floor(Math.random() * 100 + 1)]),
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [state.values.length, state]);

  const next = (values: number[]) => {
    return {
      data: {
        dataSets: [
          {
            values: values,
            label: 'Sine function',

            config: {
              drawValues: false,
              color: colors[2],
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
          borderWidth={0}
          drawGridBackground={false}
          drawBorders={false}
          data={config.data as LineData}
          xAxis={{
            enabled: false,
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
    height: 100,
    width: 300,
  },

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    backgroundColor: 'pink',
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
