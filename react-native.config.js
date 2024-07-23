module.exports = {
    project: {
        android: {
            unstable_reactLegacyComponentNames: [
                'AIRMap',
                'AIRMapCallout',
                'AIRMapCalloutSubview',
                'AIRMapCircle',
                'AIRMapHeatmap',
                'AIRMapLocalTile',
                'AIRMapMarker',
                'AIRMapOverlay',
                'AIRMapPolygon',
                'AIRMapPolyline',
                'AIRMapUrlTile',
                'AIRMapWMSTile',
            ],
        },
        ios: {
            unstable_reactLegacyComponentNames: [
                'AIRMap',
                'AIRMapCallout',
                'AIRMapCalloutSubview',
                'AIRMapCircle',
                'AIRMapHeatmap',
                'AIRMapLocalTile',
                'AIRMapMarker',
                'AIRMapOverlay',
                'AIRMapPolygon',
                'AIRMapPolyline',
                'AIRMapUrlTile',
                'AIRMapWMSTile',
            ],
        },
    },
    assets: [
        './src/assets/fonts/',
        'node_modules/@ant-design/icons-react-native/fonts'],
}