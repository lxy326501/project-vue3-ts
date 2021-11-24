import { Scene } from '@antv/l7';
import { WorldLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import {h, defineComponent, ref, getCurrentInstance, onMounted } from 'vue';
export default defineComponent({
    setup() {
        const app = ()=> {
            const scene = new Scene({
                id: 'map',
                map: new Mapbox({
                    center: [ 116.2825, 39.9 ],
                    pitch: 0,
                    style: 'blank',
                    zoom: 0,
                    minZoom: 0,
                    maxZoom: 10,
                })
            });
            scene.on('loaded', () => {
                new WorldLayer(scene, {
                    data: [],
                    bubble: {
                        enable: true,
                        color: {
                            field: 'NAME_CHN',
                            values: [
                                '#feedde',
                                '#fdd0a2',
                                '#fdae6b',
                                '#fd8d3c',
                                '#e6550d',
                                '#a63603'
                            ]
                        }
                    },
                    stroke: '#ccc',
                    label: {
                        enable: true,
                        textAllowOverlap: false,
                        field: 'NAME_CHN'
                    },
                });
            });

        }
        onMounted(app)
        return () => h(
            <div id="map" style={{width: '100%', height: '555px',position: 'relative' }} ></div>
        )
    }
});