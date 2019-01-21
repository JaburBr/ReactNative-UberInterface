import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyA3ftHZi5Cg0tIoB_0y3JQ5vsZi-AErdDA'
        strokeWidth={3}
        strokeColor='#222'
    />
);

export default Directions;
