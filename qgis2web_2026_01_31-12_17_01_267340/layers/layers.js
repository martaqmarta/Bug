var wms_layers = [];

var format_Sentinel_vmap_0 = new ol.format.GeoJSON();
var features_Sentinel_vmap_0 = format_Sentinel_vmap_0.readFeatures(json_Sentinel_vmap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel_vmap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel_vmap_0.addFeatures(features_Sentinel_vmap_0);
var lyr_Sentinel_vmap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel_vmap_0, 
                style: style_Sentinel_vmap_0,
                popuplayertitle: 'Sentinel_vmap',
                interactive: true,
    title: 'Sentinel_vmap<br />\
    <img src="styles/legend/Sentinel_vmap_0_0.png" /> -76 - -38<br />\
    <img src="styles/legend/Sentinel_vmap_0_1.png" /> -38 - -18<br />\
    <img src="styles/legend/Sentinel_vmap_0_2.png" /> -18 - -5<br />\
    <img src="styles/legend/Sentinel_vmap_0_3.png" /> -5 - 8<br />\
    <img src="styles/legend/Sentinel_vmap_0_4.png" /> 8 - 34<br />' });
var format_Vmap_historyczna_1 = new ol.format.GeoJSON();
var features_Vmap_historyczna_1 = format_Vmap_historyczna_1.readFeatures(json_Vmap_historyczna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vmap_historyczna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vmap_historyczna_1.addFeatures(features_Vmap_historyczna_1);
var lyr_Vmap_historyczna_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vmap_historyczna_1, 
                style: style_Vmap_historyczna_1,
                popuplayertitle: 'Vmap_historyczna',
                interactive: true,
    title: 'Vmap_historyczna<br />\
    <img src="styles/legend/Vmap_historyczna_1_0.png" /> -81 - -35<br />\
    <img src="styles/legend/Vmap_historyczna_1_1.png" /> -35 - -8<br />\
    <img src="styles/legend/Vmap_historyczna_1_2.png" /> -8 - 17<br />\
    <img src="styles/legend/Vmap_historyczna_1_3.png" /> 17 - 58<br />\
    <img src="styles/legend/Vmap_historyczna_1_4.png" /> 58 - 100<br />' });
var format_Intersect_2 = new ol.format.GeoJSON();
var features_Intersect_2 = format_Intersect_2.readFeatures(json_Intersect_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersect_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersect_2.addFeatures(features_Intersect_2);
var lyr_Intersect_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersect_2, 
                style: style_Intersect_2,
                popuplayertitle: 'Intersect',
                interactive: true,
                title: '<img src="styles/legend/Intersect_2.png" /> Intersect'
            });
var format_Union_3 = new ol.format.GeoJSON();
var features_Union_3 = format_Union_3.readFeatures(json_Union_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_3.addFeatures(features_Union_3);
var lyr_Union_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Union_3, 
                style: style_Union_3,
                popuplayertitle: 'Union',
                interactive: true,
                title: '<img src="styles/legend/Union_3.png" /> Union'
            });
var format_Vmap_4 = new ol.format.GeoJSON();
var features_Vmap_4 = format_Vmap_4.readFeatures(json_Vmap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vmap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vmap_4.addFeatures(features_Vmap_4);
var lyr_Vmap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vmap_4, 
                style: style_Vmap_4,
                popuplayertitle: 'Vmap',
                interactive: true,
                title: '<img src="styles/legend/Vmap_4.png" /> Vmap'
            });
var format_Sentinel_5 = new ol.format.GeoJSON();
var features_Sentinel_5 = format_Sentinel_5.readFeatures(json_Sentinel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel_5.addFeatures(features_Sentinel_5);
var lyr_Sentinel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel_5, 
                style: style_Sentinel_5,
                popuplayertitle: 'Sentinel',
                interactive: true,
                title: '<img src="styles/legend/Sentinel_5.png" /> Sentinel'
            });
var format_Historyczna_6 = new ol.format.GeoJSON();
var features_Historyczna_6 = format_Historyczna_6.readFeatures(json_Historyczna_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historyczna_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historyczna_6.addFeatures(features_Historyczna_6);
var lyr_Historyczna_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historyczna_6, 
                style: style_Historyczna_6,
                popuplayertitle: 'Historyczna',
                interactive: true,
                title: '<img src="styles/legend/Historyczna_6.png" /> Historyczna'
            });

lyr_Sentinel_vmap_0.setVisible(true);lyr_Vmap_historyczna_1.setVisible(true);lyr_Intersect_2.setVisible(true);lyr_Union_3.setVisible(true);lyr_Vmap_4.setVisible(true);lyr_Sentinel_5.setVisible(true);lyr_Historyczna_6.setVisible(true);
var layersList = [lyr_Sentinel_vmap_0,lyr_Vmap_historyczna_1,lyr_Intersect_2,lyr_Union_3,lyr_Vmap_4,lyr_Sentinel_5,lyr_Historyczna_6];
lyr_Sentinel_vmap_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'hydro_hist': 'hydro_hist', 'sentine_hydro': 'sentine_hydro', });
lyr_Vmap_historyczna_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'hydro_hist': 'hydro_hist', 'sentine_hydro': 'sentine_hydro', });
lyr_Intersect_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_mapa_arch_poloczone_Clip': 'FID_mapa_arch_poloczone_Clip', 'Id': 'Id', 'FID_mapa_hydrogg_Clip': 'FID_mapa_hydrogg_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID', 'FID_sentinel_gg_Clip': 'FID_sentinel_gg_Clip', 'Id_12': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Union_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_mapa_arch_poloczone_Clip': 'FID_mapa_arch_poloczone_Clip', 'Id': 'Id', 'FID_sentinel_gg_Clip': 'FID_sentinel_gg_Clip', 'Id_1': 'Id', 'gridcode': 'gridcode', 'FID_mapa_hydrogg_Clip': 'FID_mapa_hydrogg_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Vmap_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Sentinel_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Historyczna_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Sentinel_vmap_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'hydro_hist': 'TextEdit', 'sentine_hydro': 'TextEdit', });
lyr_Vmap_historyczna_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'hydro_hist': 'TextEdit', 'sentine_hydro': 'TextEdit', });
lyr_Intersect_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_mapa_arch_poloczone_Clip': 'Range', 'Id': 'Range', 'FID_mapa_hydrogg_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'Range', 'FID_sentinel_gg_Clip': 'Range', 'Id_12': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Union_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_mapa_arch_poloczone_Clip': 'Range', 'Id': 'Range', 'FID_sentinel_gg_Clip': 'Range', 'Id_1': 'Range', 'gridcode': 'Range', 'FID_mapa_hydrogg_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Vmap_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sentinel_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Historyczna_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sentinel_vmap_0.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'hydro_hist': 'no label', 'sentine_hydro': 'no label', });
lyr_Vmap_historyczna_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'hydro_hist': 'no label', 'sentine_hydro': 'no label', });
lyr_Intersect_2.set('fieldLabels', {'OBJECTID': 'no label', 'FID_mapa_arch_poloczone_Clip': 'no label', 'Id': 'no label', 'FID_mapa_hydrogg_Clip': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_sentinel_gg_Clip': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Union_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_mapa_arch_poloczone_Clip': 'no label', 'Id': 'no label', 'FID_sentinel_gg_Clip': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'FID_mapa_hydrogg_Clip': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Vmap_4.set('fieldLabels', {'OBJECTID': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Sentinel_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Historyczna_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Historyczna_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});