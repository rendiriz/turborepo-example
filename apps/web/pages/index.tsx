import '@fontsource/inter'
import { Button, Buttom } from 'ui'

import _ from 'lodash'

export default function Web() {
  return (
    <div style={{ fontFamily: 'Inter' }}>
      {_.isNumber('a') ? 'yes' : 'no'}
      <h1>Web</h1>
      <Button />
      <Buttom />
    </div>
  )
}
