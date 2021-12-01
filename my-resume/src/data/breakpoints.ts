//https://dev.to/cagatayunal/how-to-use-css-media-query-breakpoint-in-styled-components-9of

const size = {
 xs: '320px',
 sm: '768px',
 lg: '1200px',
}

const device = {
 xs: `(min-width: ${size.xs})`,
 sm: `(min-width: ${size.sm})`,
 lg: `(min-width: ${size.lg})`
}

export default {size, device}