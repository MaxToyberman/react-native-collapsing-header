
# react-native-collapsing-header

## Usage
```javascript
import CollapsingHeader from 'react-native-collapsing-header';


export default class Example extends Component { 

	render() {
		return (
			<CollapsingHeader
            	header={<Header />} // required
				scrollEventThrottle={16} // 16 is default value (Optional)
				headerMaxHeight={199} // 199 is default value (Optional)
				headerMinHeight={117} // 117 is default value (Optional)
				fadeoutHiddenPart={true}
            >
			 <Text>Your ScrollView body items</Text>
			</CollapsingHeader>
		)
	}

}
```
  