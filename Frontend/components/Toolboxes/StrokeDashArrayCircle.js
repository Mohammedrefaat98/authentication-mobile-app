import React, {Component} from 'react';
import {View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
export default class StrokeDashArrayCircle extends Component {
    render() {
        return (
            <View>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="320px"
                    height="320px"
                    viewBox="0 0 165 165"
                    xmlSpace="preserve"
                >
                    <Circle
                        fill="none"
                        stroke="#EBEBEB"
                        strokeWidth={9}
                        strokeMiterlimit={23}
                        cx={82.5}
                        cy={82.5}
                        r={75}
                    />
                    <Circle
                        translateX={82.5}
                        translateY={82.5}
                        fill="none"
                        stroke="#545DFF"
                        strokeWidth={9}
                        strokeMiterlimit={23}
                        strokeDasharray={471.238898}
                        strokeDashoffset={471.238898 - (471.238898 * -40) / 100}
                        r={75}
                        transform={{ rotation: 270 }}
                    />
                    <Circle
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth={10}
                        strokeMiterlimit={23}
                        strokeDasharray="5.0488,0.99"
                        cx={82.5}
                        cy={82.5}
                        r={75}
                    />
                    <Circle
                        fill="none"
                        stroke="#EBEBEB"
                        strokeWidth={2}
                        strokeMiterlimit={23}
                        strokeDasharray="1.0048,6.0288"
                        cx={82.5}
                        cy={82.5}
                        r={65}
                    />
                </Svg>
            </View>
        );
    }
}