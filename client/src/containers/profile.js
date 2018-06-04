import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import Bio from '../components/profile/bio'
import Splitads from '../components/profile/splitads'
import ProfileHeader from '../components/profile/profileHeader'
import Video from '../components/profile/video'
import Singlerowads from '../components/profile/singlerowads'
import Errorpage from '../components/profile/error'
import { getStyle } from '../utils/helpers'
import { getProfile, getProfilePending } from '../actions/profileAction'
import vote from '../actions/voteAction'
import VoteModal from '../components/voteModal'
import 'react-toastify/dist/ReactToastify.css'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true,
      profilePhoto: process.env.REACT_APP_DEFAULT_BACKGROUND,
      country: '',
      state: '',
      firstName: '',
      lastName: '',
      profileUrl: '',
      about: '',
      contestantVideo: process.env.REACT_APP_ADVERT,
      username: null,
      voteCount: '',
      email: '',
      show: false,
      showCastVote: false,
      loadingPaystack: false
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props
    const lowercaseUsername = params.username && params.username.toLowerCase()
    this.props.getProfilePending()
    this.props.getProfile(lowercaseUsername)
  }

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  onchangeVoteCount = e => {
    this.setState({ voteCount: e.target.value })
  }

  onchangeVoteAmount = val => {
    this.setState({ voteCount: val })
  }
  onShowcastvote = () => {
    this.setState(prevState => ({
      showCastVote: !prevState.showCastVote
    }))
  }

  componentWillReceiveProps(nextProps) {
    const state = {
      ...nextProps.profile.contestant,
      fetching: nextProps.profile.fetching
    }
    const prev = { ...this.state }
    if (state !== prev) {
      this.setState({ ...prev, ...state })
    }
  }

  onVote = () => {
    const { voteCount, username, email } = this.state
    this.setState({
      loadingPaystack: true
    })
    this.loadPayStack(username, voteCount, email)
  }

  handleClose = () => {
    this.setState({ showCastVote: !this.state.showCastVote })
  }

  loadPayStack = (username, voteCount, email) => {
    var handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: 'vote@soundit.africa',
      amount: 5000 * Number(voteCount), //in kobo
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      callback: response => {
        this.props.vote({
          reference: response.reference,
          username,
          voteCount
        })
        this.setState({
          voteCount: '',
          loadingPaystack: false
        })
        this.onShowcastvote()
      },
      onClose: () => {
        alert('window closed')
        this.setState({
          loadingPaystack: false,
          showCastVote: false,
          voteCount: ''
        })
      }
    })
    handler.openIframe()
  }

  onClear = () => {
    this.refs.container.clear()
  }

  render() {
    const {
      fetching,
      profilePhoto,
      country,
      state,
      firstName,
      lastName,
      profileUrl,
      about,
      contestantVideo,
      show,
      voteCount,
      showCastVote,
      loadingPaystack
    } = this.state

    const myStyle = getStyle('myStyle', fetching, profilePhoto)
    const myStyleProfile = getStyle('myStyleProfile', fetching, profilePhoto)
    const { error } = this.props.profile
    const { userInfo } = this.props.auth
    const isAuthticated = userInfo ? true : false

    return (
      <div className="profile--container">
        <ToastContainer hideProgressBar={true} />
        <VoteModal
          voteCount={voteCount}
          showCastVote={showCastVote}
          onVote={this.onVote}
          handleClose={this.handleClose}
          onchangeVoteAmount={this.onchangeVoteAmount}
          onchangeVoteCount={this.onchangeVoteCount}
          loadingPaystack={loadingPaystack}
        />
        <ToastContainer ref="container" className="toast-top-right" />
        <ProfileHeader
          myStyle={myStyle}
          state={state}
          country={country}
          profilelink={profileUrl}
          firstName={firstName}
          lastName={lastName}
          bio={about}
          isAuthticated={isAuthticated}
        />
        <div className="profile--body">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-3">
              <Bio
                myStyle={myStyleProfile}
                state={state}
                country={country}
                profilelink={profileUrl}
                firstName={firstName}
                lastName={lastName}
                profilePhoto={profilePhoto}
                bio={about}
                click={this.handleClick}
                show={show}
                onchangeVoteCount={this.onchangeVoteCount}
                voteCount={voteCount}
                onShowCastVote={this.onShowCastVote}
                onVote={this.onVote}
                isAuthticated={isAuthticated}
                loadingPaystack={loadingPaystack}
              />
            </div>
            <div className="col-sm-7">
              <Singlerowads />
              <Splitads />
              <Video videoUrl={contestantVideo} />
              <Splitads />
            </div>
            <div className="col-sm-1" />
          </div>
        </div>
        <Errorpage error={error} />
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  getProfile: bindActionCreators(getProfile, dispatch),
  getProfilePending: bindActionCreators(getProfilePending, dispatch),
  vote: bindActionCreators(vote, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
