
# react-native-collapsing-header

## Usage

npm install --save react-native-collapsing-header 

OR

yarn add react-native-collapsing-header

```javascript
import CollapsingHeader from 'react-native-collapsing-header';
import Text from 'react-native';

export default class Example extends Component { 

	render() {
		return (
			<CollapsingHeader
            			header={HeaderExample} // required
				scrollEventThrottle={16} // 16 is default value (Optional)
				headerMaxHeight={199} // 199 is default value (Optional)
				headerMinHeight={117} // 117 is default value (Optional)
           		 >
			 	<Text>Your ScrollView body items</Text>
			</CollapsingHeader>
		)
	}

}

// if you want to change the opacity of the header or a part of it while scrolling, just wrap it in an Animated.View (look at the example below)

const HeaderExample = (opacity) => {
	return (
		    <View style={{flex: 1, alignItems: 'center'}}>
				<Animated.View style={{
					opacity
				}}>
					<Text>this text will disappear when scrolling</Text>
				</Animated.View>
				

				<View style={{flexDirection:'row', marginTop: calcSize(15)}}>
					<AIIcon style={styles.viewDatesDropdownPng} image={Pictures.viewDatesDropdownPng} boxSize={8.5}/>
					<AIText fontSize={15}>בחירת תקופת זמן: הכל</AIText>
				</View>
				
			</View>		
	)
}
```
  
