// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoGto = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} fill="#7f27ff" r={16} />
      <path
        d="M15.376 14H8.02v7.222c-.008.739.288 1.45.82 1.972s1.257.813 2.01.806h4.527zm.17-3.779h.792c.784-1.35 1.502-2.268 2.177-2.764.832-.613 1.684-.618 2.352.038.624.612.741 1.38.33 2.12-.116.206-.27.408-.463.606h2.908c.679 0 1.358.558 1.358 1.333 0 .667-.569 1.334-1.358 1.334h-7.134V11.11h-1.132v1.778H8.358C7.68 12.888 7 12.33 7 11.554c0-.666.569-1.333 1.358-1.333h2.94a3.294 3.294 0 0 1-.488-.572c-.487-.744-.428-1.53.207-2.154.668-.656 1.52-.65 2.353-.038.674.496 1.392 1.415 2.177 2.764zm-1.315 0c-.58-.923-1.098-1.55-1.54-1.875-.409-.3-.633-.302-.874-.066-.247.243-.262.451-.055.767.236.361.733.768 1.449 1.174zm3.422 0h1.22c.683-.392 1.134-.788 1.33-1.14.17-.304.134-.535-.136-.8-.241-.237-.465-.236-.873.065-.443.325-.962.952-1.54 1.875zm-1.145 3.778h7.357v7.223a2.725 2.725 0 0 1-.82 1.972 2.83 2.83 0 0 1-2.01.806h-4.527z"
        fill="#fff"
      />
    </g>
  </svg>
)

export const CryptoGto = withStyle(SvgCryptoGto, 'CryptoGto', true)
