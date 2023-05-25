import grapesjs from 'grapesjs'
import basicBlocksPlugin from 'grapesjs-blocks-basic';
import countdownPlugin from 'grapesjs-component-countdown';
import touchPlugin from 'grapesjs-touch';
import postCssPlugin from 'grapesjs-parser-postcss';
import imageEditorPlugin from 'grapesjs-tui-image-editor';
import styleBgPlugin from 'grapesjs-style-bg';
import { AssetManager } from './Editor__AssetManager';
import { PluginManager } from './Editor__PluginManager';
import { SelectorManager } from './Editor__SelectorManager';
import { StorageManager } from './Editor__StorageManger';
import { StyleManager } from './Editor__StyleManager';
import { DeviceManager } from './Editor__DeviceManager';
import { LayersManager } from './Editor__LayersManager';
import { BlockManager } from './Editor__BlockManager';
import { TraitManager } from './Editor__TraitManager';
import { Pannels } from './Editor__Pannels';
import { CanvasManager } from './Editor__CanvasManager';
import axios from 'axios';


export const geditorConfig = (id) => {
    const editor = grapesjs.init({
        container: '#gjs',
        height: 'calc(100vh - 101px)',
        width: 'calc(100vw - 350px)',
        styleManager: StyleManager,
        storageManager: StorageManager(id),
        selectorManager: SelectorManager,
        assetManager: AssetManager(id),
        plugins: [basicBlocksPlugin, countdownPlugin, touchPlugin, postCssPlugin, imageEditorPlugin, styleBgPlugin],
        pluginsOpts: PluginManager,
        deviceManager: DeviceManager,
        layerManager: LayersManager,
        blockManager: BlockManager,
        traitManager: TraitManager,
        panels: Pannels,
        canvas: CanvasManager
    })

    editor.on('load', () =>  {
        axios.get(`/api/v1/landingpages/${id}/content`).then(response=> {
            editor.DomComponents.addComponent(response.data.html)
            editor.setStyle(response.data.css)
        }) 
    })

    return editor;
}

export default geditorConfig;