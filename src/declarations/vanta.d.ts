
interface Options {
    el?: RefObject,
    mouseControls?: boolean,
    touchControls?: boolean,
    gyroControls?: boolean,
    color?: number,
    scale?: number,
    minHeight?: number,
    minWidth?: number,
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