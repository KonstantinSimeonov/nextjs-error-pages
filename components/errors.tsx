import * as React from "react"

type ErrorProps = { reason?: string }

export const Forbidden: React.FC<ErrorProps> = ({ reason }) => (
  <article>
  <h2>Forbidden</h2>
  <p>{reason}</p>
  </article>
)

export const BadRequest: React.FC<ErrorProps> = ({ reason }) => (
  <article>
    <h2>Your request was invalid.</h2>
    <p>{reason}</p>
  </article>
)
