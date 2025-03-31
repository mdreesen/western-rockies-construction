'use client'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
        
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 48.22766348319926,
  lng: -114.27557032969496,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
     mapContainerStyle={containerStyle}
      center={center}
       zoom={16}
       options={{
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false
       }}
       >
      <MarkerF position={center} />
    </GoogleMap>
  );
};