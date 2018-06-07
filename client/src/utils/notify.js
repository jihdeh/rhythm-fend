/*global require, module, process, HOST, log */
import slackNotify from 'slack-notify'

const notify = (title, text) => {
  let slack = slackNotify(process.env.REACT_APP_SLACK_HOOK)
  let channel = '#soundit'

  let payload = {
    channel: channel,
    text: text ? text : title,
    username: title,
    icon_emoji: ':incoming_envelope:'
  }

  slack.send(payload)
}

export default notify
