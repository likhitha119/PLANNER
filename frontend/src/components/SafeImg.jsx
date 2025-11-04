import React, { useState } from 'react'

const FALLBACK = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=60'

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