var React = require("react");
// var SnapkiteStreamClient = require("snapkite-stream-client");
var StreamTweet = require("./StreamTweet.react");
var Header = require("./Header.react");
var TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({
  getInitialState: function() {
    return {
      // tweet: null
      tweet: TweetStore.getTweet()
    };
  },

  componentDidMount: function() {
    // SnapkiteStreamClient.initializeStream(this.handleNewTweet);
    TweetStore.addChangeListener(this.onTweetChange);
  },
  componentWillUnmount: function() {
    // SnapkiteStreamClient.destroyStream();
    TweetStore.removeChangeListener(this.onTweetChange);
  },
  // handleNewTweet: function(tweet) {
  //   this.setState({
  //     tweet: tweet
  //   });
  // },
  onTweetChange: function() {
    this.setState({
      tweet: TweetStore.getTweet()
    });
  },

  render: function() {
    var tweet = this.state.tweet;
    if (tweet) {
      // return ( < StreamTweet tweet = { tweet }
      //   onAddTweetToCollection = { this.props.onAddTweetToCollection }
      //   />
      // );
      return (<StreamTweet tweet = {tweet}/>);
    }
    return <Header text = "Waiting for public photos from Twitter..." / > ;
  }
});
module.exports = Stream;
