
interface Options {
    el?: RefObject,
    mouseControls?: boolean,
    touchControls?: boolean,
    gyroControls?: boolean,
    color?: number,
    scale?: number,
    minHeight?: number,
    minWidth?: number,
    maxWidth?: number,
    maxHeight?: number,
    spacing?: number,
    backgroundColor?: number,
    scaleMobile?: number,
    showLines?: boolean,
    showDots?: boolean
}

declare module 'vanta/dist/vanta.dots.min' {
    const FOG: (props: Options) => void;
  export default FOG;
}

declare module 'vanta/dist/vanta.net.min' {
    const NET: (props: Options) => void;
    export default NET;
}

declare module 'vanta/dist/vanta.topology.min' {
    const TOPOLOGY: (props: Options) => void;
    export default TOPOLOGY;
}