import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFocused: false,
        };
    }

    render() {

        const { searchFocused } = this.state;
        const { onLocationSelected } = this.props;

        return <GooglePlacesAutocomplete
            placeholder='para onde?'
            placeholerTextColor='#3333'
            onPress={onLocationSelected}
            query={{
                key: 'AIzaSyA3ftHZi5Cg0tIoB_0y3JQ5vsZi-AErdDA',
                language: 'pt'
            }}
            textInputProps={{
                onFocus: () => { this.setState({ searchFocused: true }) },
                onBlur: () => { this.setState({ searchFocused: false }) },
                autoCapitalize: 'none',
                autoCorrect: false,
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: Platform.select({ ios: 60, android: 40 }),
                    width: '100%',
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: '#DDD',
                    fontSize: 18,
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 10,
                },
                description: {
                    fontSize: 16,
                },
                row: {
                    padding: 20,
                    height: 58,
                },
            }}
        />
    }
}