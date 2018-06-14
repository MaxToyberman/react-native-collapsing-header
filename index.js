
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Animated, ScrollView, StyleSheet, View, Dimensions, Text, PanResponder} from 'react-native';


const {width} = Dimensions.get('window')


const HEADER_MAX_HEIGHT = 199;

class CollapsingHeader extends Component {

    constructor(props) {
        super(props);
        // scrolling distance
        this.HEADER_SCROLL_DISTANCE = props.headerMaxHeight - props.headerMinHeight
        this.state = {
            scrollY: new Animated.Value(0),
            showScrollShadow: false
        }
    }

    onScroll = (event) => {

        const { showScrollShadow } = this.state;
        const { y } = event.nativeEvent.contentOffset;

        if (y > 1 && !showScrollShadow)
            this.setState({ showScrollShadow: true });
        else if (y <= 1 && showScrollShadow)
            this.setState({ showScrollShadow: false });
    }


    render() {
        const headerPosition = this.state.scrollY.interpolate({
            inputRange: [0, this.HEADER_SCROLL_DISTANCE],
            outputRange: [0, - this.HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp' // clamp so translateY can’t go beyond -160
        })

        const opacity = this.state.scrollY.interpolate({
            inputRange: [0, this.HEADER_SCROLL_DISTANCE],
            outputRange: [1, 0],
            extrapolate: 'clamp' // clamp so translateY can’t go beyond -160
        })

        return (
            <View style={[styles.container]}>
                <Animated.View style={[styles.header,{height: this.props.headerMaxHeight, shadowOpacity: this.state.showScrollShadow ? 1 : 0, elevation: this.state.showScrollShadow ? 7 : 0},
                    {transform: [{
                        translateY: headerPosition
                    }]
                }]} >
                    {this.props.header(opacity)}
                </Animated.View>

                    <Animated.ScrollView
                        ref={(ref)=>{
                            if(ref && this.props.scrollViewRef) {
                                this.props.scrollViewRef(ref)
                            }
                        }}
                        contentContainerStyle={[{paddingTop: this.props.headerMaxHeight},this.props.contentContainerStyle]}
                        scrollIndicatorInsets={{
                            top: this.props.headerMaxHeight
                        }} 
                        scrollEventThrottle={this.props.scrollEventThrottle}
                        bounces={false}
                        style={{zIndex: -1}}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                            {
                            useNativeDriver: true,
                            listener: this.onScroll
                            },
                        )}
                    >
                        {this.props.children}
                    </Animated.ScrollView>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      zIndex: 1
    },
    header: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_MAX_HEIGHT,
        width,
        shadowColor: "rgba(1, 12, 39, 0.2)",
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 4,
        // shadowOpacity: 1,
        // elevation: 7
    },
    contentContainer: {
        width,
        marginTop: HEADER_MAX_HEIGHT
    },
});


CollapsingHeader.propTypes = {
    header: PropTypes.any,
    headerMaxHeight: PropTypes.number,
    headerMinHeight: PropTypes.number,
    scrollEventThrottle: PropTypes.number
}

CollapsingHeader.defaultProps = {
    headerMaxHeight: 199,
    headerMinHeight: 117,
    scrollEventThrottle: 16
}

export default CollapsingHeader;
