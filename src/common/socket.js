import io from 'socket.io-client'

let url = 'ws://kxd-wxa-test.yy.com'
let path = '/finddifference/12345'
let json = {
  'roomid': `123457727`,
  'channelid': `yy`,
  'gameid': `finddifference`,
  'player': {
    'uid': `1234789`,
    'name': `test2`,
    'avatarurl': `http://s1.yy.com/guild/header/10001.jpg`,
    'opt': ''
  }

}
let options = {
  'post_data': JSON.stringify(json),
  'timestamp': `1509710152`,
  'nonstr': `jg4g3b0i-7pb0-92y5-mu0a-e997nmb6gg3p`,
  'sign': `c7961cc7357f8a991edf5a93daf1e69b2d7c30ab`,
  'EIO': 3,
  'transport': 'websocket'
}
/**
 *     {"path":"/finddifference/12345","query":{"post_data":"{\"roomid\":\"123457727\",\"channelid\":\"yy\",\"gameid\":\"finddifference\",\"player\":{\"uid\":\"1234789\",\"name\":\"test2\",\"avatarurl\":\"http://s1.yy.com/guild/header/10001.jpg\",\"opt\":\"\",\"teamid\":\"\"}}","timestamp":1509710152,"nonstr":"jg4g3b0i-7pb0-92y5-mu0a-e997nmb6gg3p","sign":"c7961cc7357f8a991edf5a93daf1e69b2d7c30ab"}}
 */
const socket = io(url, {
  transports: ['websocket'],
  path,
  query: options

})
console.log('socket', socket)
