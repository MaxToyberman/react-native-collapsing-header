
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
            	header={<Header />} // required
				scrollEventThrottle={16} // 16 is default value (Optional)
				headerMaxHeight={199} // 199 is default value (Optional)
				headerMinHeight={117} // 117 is default value (Optional)
            >
			 <Text>Your ScrollView body items</Text>
			</CollapsingHeader>
		)
	}

}
```
  