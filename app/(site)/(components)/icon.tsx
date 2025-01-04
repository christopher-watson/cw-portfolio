import React from 'react'
import { any } from 'prop-types'

function icon(props) {
   return (
      <div className='icon-style text-7xl px-3'>
         {props.icon}
      </div>
   )
}

icon.propTypes = {
   icon: any,
}

export default icon;
