import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = state => {
  console.log('VideoPlayer render ran.');
  return {
    video: state.currentVideo
  }
}

VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);
export default VideoPlayerContainer;
