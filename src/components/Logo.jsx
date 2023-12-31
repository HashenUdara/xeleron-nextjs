import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        id="Xeleron" class="s0" aria-label="Xeleron"  
        d="m152.2 242.8l-152.3 190.2h87.7l109-137.8h3.1l106.9 137.8h92.9l-149.9-192.2 141.3-175.6h-90.3l-98.4 128.6h-3.5l-96.9-128.6h-92.4zm401.2 194.7q39.8 0 72.1-11.1 32.3-11.1 52.5-30.8 20.7-20.1 24.7-46.9h-67.6q-6 17.7-27.7 28.8-21.2 10.6-52.5 10.6-39.9 0-63.6-19.7-23.7-19.7-24.7-55h237.1q3.6-48.4-14.1-82.7-17.1-34.4-52.5-52.5-34.8-18.7-84.7-18.7-47.5 0-82.8 17.2-35.3 16.6-55 48.4-19.7 31.3-19.7 74.7 0 42.9 19.2 73.6 19.7 30.8 55 47.5 35.8 16.6 84.3 16.6zm-1.5-228q36.8 0 58 17.1 21.2 16.7 23.2 46.4h-167q4.5-29.7 26.7-46.4 22.7-17.1 59.1-17.1zm194.2-144.3v367.8h71.7v-367.8zm271.9 372.3q39.9 0 72.2-11.1 32.3-11.1 52.5-30.8 20.7-20.1 24.7-46.9h-67.6q-6.1 17.7-27.8 28.8-21.2 10.6-52.4 10.6-39.9 0-63.6-19.7-23.7-19.7-24.7-55h237.1q3.5-48.4-14.1-82.7-17.2-34.4-52.5-52.5-34.8-18.7-84.8-18.7-47.4 0-82.7 17.2-35.3 16.6-55 48.4-19.7 31.3-19.7 74.7 0 42.9 19.2 73.6 19.7 30.8 55 47.5 35.8 16.6 84.2 16.6zm-1.5-228q36.9 0 58.1 17.1 21.2 16.7 23.2 46.4h-167q4.5-29.7 26.7-46.4 22.7-17.1 59-17.1zm194.3-44.9v268.4h71.6v-136.8q1.1-37.3 20.7-54.4 19.7-17.2 52-17.2 12.1 0 24.7 2.5v-64.6q-8-2-23.2-2-27.2 0-46.9 13.1-19.7 13.2-28.3 35.9h-3l-3-44.9zm339.6 273.4q48.4 0 83.7-16.6 35.8-17.2 55.5-48.5 19.7-31.2 19.7-74.1 0-43.9-19.7-74.7-19.7-31.3-55.5-47.9-35.8-16.7-83.7-16.7-48 0-83.8 17.2-35.8 16.6-55.5 47.9-19.7 30.8-19.7 74.2 0 43.4 19.7 74.6 20.2 31.3 56 48 35.8 16.6 83.3 16.6zm0-55.5q-40.9 0-64.1-22.7-22.7-22.7-22.7-61 0-38.4 22.7-61.1 23.2-22.7 64.1-22.7 41.3 0 64 22.7 23.3 22.2 23.3 61.1 0 38.3-23.3 61-23.2 22.7-64 22.7zm201.3-217.9v268.4h71.6v-133.7q0-37.4 22.7-61.1 23.3-23.7 61.1-23.7 36.8 0 53 21.2 16.1 21.2 16.1 62.6v134.7h71.7v-147.3q0-47.5-15.2-74.7-14.6-27.8-40.8-39.4-26.3-12.1-61.1-12.1-32.3 0-61 14.6-28.8 14.2-42.4 40.9h-4.1l-2.5-50.4z"
      />
      <path id="Xeleron" class="s0" aria-label="Xeleron"  d="m152.2 242.8l-152.3 190.2h87.7l109-137.8h3.1l106.9 137.8h92.9l-149.9-192.2 141.3-175.6h-90.3l-98.4 128.6h-3.5l-96.9-128.6h-92.4zm401.2 194.7q39.8 0 72.1-11.1 32.3-11.1 52.5-30.8 20.7-20.1 24.7-46.9h-67.6q-6 17.7-27.7 28.8-21.2 10.6-52.5 10.6-39.9 0-63.6-19.7-23.7-19.7-24.7-55h237.1q3.6-48.4-14.1-82.7-17.1-34.4-52.5-52.5-34.8-18.7-84.7-18.7-47.5 0-82.8 17.2-35.3 16.6-55 48.4-19.7 31.3-19.7 74.7 0 42.9 19.2 73.6 19.7 30.8 55 47.5 35.8 16.6 84.3 16.6zm-1.5-228q36.8 0 58 17.1 21.2 16.7 23.2 46.4h-167q4.5-29.7 26.7-46.4 22.7-17.1 59.1-17.1zm194.2-144.3v367.8h71.7v-367.8zm271.9 372.3q39.9 0 72.2-11.1 32.3-11.1 52.5-30.8 20.7-20.1 24.7-46.9h-67.6q-6.1 17.7-27.8 28.8-21.2 10.6-52.4 10.6-39.9 0-63.6-19.7-23.7-19.7-24.7-55h237.1q3.5-48.4-14.1-82.7-17.2-34.4-52.5-52.5-34.8-18.7-84.8-18.7-47.4 0-82.7 17.2-35.3 16.6-55 48.4-19.7 31.3-19.7 74.7 0 42.9 19.2 73.6 19.7 30.8 55 47.5 35.8 16.6 84.2 16.6zm-1.5-228q36.9 0 58.1 17.1 21.2 16.7 23.2 46.4h-167q4.5-29.7 26.7-46.4 22.7-17.1 59-17.1zm194.3-44.9v268.4h71.6v-136.8q1.1-37.3 20.7-54.4 19.7-17.2 52-17.2 12.1 0 24.7 2.5v-64.6q-8-2-23.2-2-27.2 0-46.9 13.1-19.7 13.2-28.3 35.9h-3l-3-44.9zm339.6 273.4q48.4 0 83.7-16.6 35.8-17.2 55.5-48.5 19.7-31.2 19.7-74.1 0-43.9-19.7-74.7-19.7-31.3-55.5-47.9-35.8-16.7-83.7-16.7-48 0-83.8 17.2-35.8 16.6-55.5 47.9-19.7 30.8-19.7 74.2 0 43.4 19.7 74.6 20.2 31.3 56 48 35.8 16.6 83.3 16.6zm0-55.5q-40.9 0-64.1-22.7-22.7-22.7-22.7-61 0-38.4 22.7-61.1 23.2-22.7 64.1-22.7 41.3 0 64 22.7 23.3 22.2 23.3 61.1 0 38.3-23.3 61-23.2 22.7-64 22.7zm201.3-217.9v268.4h71.6v-133.7q0-37.4 22.7-61.1 23.3-23.7 61.1-23.7 36.8 0 53 21.2 16.1 21.2 16.1 62.6v134.7h71.7v-147.3q0-47.5-15.2-74.7-14.6-27.8-40.8-39.4-26.3-12.1-61.1-12.1-32.3 0-61 14.6-28.8 14.2-42.4 40.9h-4.1l-2.5-50.4z"/>

    </svg>
  )
}
