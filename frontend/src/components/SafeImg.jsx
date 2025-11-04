import React, { useState } from 'react'

// 1x1 transparent GIF (no external request)
const FALLBACK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

const SafeImg = ({ src, alt = '', className = '', ...rest }) => {
  const [current, setCurrent] = useState(src || FALLBACK)

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={current}
      alt={alt}
      className={className}
      loading={rest.loading || 'lazy'}
      onError={() => setCurrent(FALLBACK)}
      {...rest}
    />
  )
}

export default SafeImg