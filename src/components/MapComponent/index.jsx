import React from 'react';

const MapComponent = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <iframe
                src="https://yandex.uz/map-widget/v1/?azimuth=5.497787143782138&ll=59.610204%2C42.464521&mode=poi&poi%5Bpoint%5D=59.610125%2C42.464616&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D174674965852&tilt=0.8622389866600305&z=19.59"
                width="640"
                height="300"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
                title="Yandex Map"
            ></iframe>
        </div>
    );
};

export default MapComponent;