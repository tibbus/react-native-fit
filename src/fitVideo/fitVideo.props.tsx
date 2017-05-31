import { ViewProperties } from 'react-native';

export interface FitVideoProps extends VideoProps {
  playable?: boolean,
  playIcon?: React.ReactNode
}

interface VideoProps extends ViewProperties {
    /* Native only */
    src?,
    seek?: number,
    fullscreen?: boolean,
    onVideoLoadStart?: Function,
    onVideoLoad?: Function,
    onVideoBuffer?: Function,
    onVideoError?: Function,
    onVideoProgress?: Function,
    onVideoSeek?: Function,
    onVideoEnd?: Function,
    onTimedMetadata?: Function,
    onVideoFullscreenPlayerWillPresent?: Function,
    onVideoFullscreenPlayerDidPresent?: Function,
    onVideoFullscreenPlayerWillDismiss?: Function,
    onVideoFullscreenPlayerDidDismiss?: Function,

    /* Wrapper component */
    source?,
    resizeMode?: string,
    poster?: string,
    repeat?: boolean,
    paused?: boolean,
    muted?: boolean,
    volume?: number,
    rate?: number,
    playInBackground?: boolean,
    playWhenInactive?: boolean,
    ignoreSilentSwitch?: string,
    disableFocus?: boolean,
    controls?: boolean,
    currentTime?: number,
    progressUpdateInterval?: number,
    onLoadStart?: Function,
    onLoad?: Function,
    onBuffer?: Function,
    onError?: Function,
    onProgress?: Function,
    onSeek?: Function,
    onEnd?: Function,
    onFullscreenPlayerWillPresent?: Function,
    onFullscreenPlayerDidPresent?: Function,
    onFullscreenPlayerWillDismiss?: Function,
    onFullscreenPlayerDidDismiss?: Function,
    onReadyForDisplay?: Function,
    onPlaybackStalled?: Function,
    onPlaybackResume?: Function,
    onPlaybackRateChange?: Function,
    onAudioFocusChanged?: Function,
    onAudioBecomingNoisy?: Function,

    /* Required by react-native */
    scaleX?: number,
    scaleY?: number,
    translateX?: number,
    translateY?: number,
    rotation?: number
}
