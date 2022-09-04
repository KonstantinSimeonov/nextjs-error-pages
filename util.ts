import { GetServerSidePropsContext } from "next"

export const Forbidden = <Reason extends string>(context: GetServerSidePropsContext, reason?: Reason) => {
  context.res.statusCode = 403
  return {
    props: {
      __typename: `PageError`,
      status: 403,
      reason: reason,
      name: `Forbidden`
    }
  } as const
}

export type Forbidden = ReturnType<typeof Forbidden>['props']

export const BadRequest = <Reason extends string>(context: GetServerSidePropsContext, reason?: Reason) => {
  context.res.statusCode = 400
  return {
    props: {
      __typename: `PageError`,
      status: 400,
      reason: reason,
      name: `BadRequest`
    } as const
  }
}

export type BadRequest = ReturnType<typeof BadRequest>['props']

export type PageError = Forbidden | BadRequest

export const isPageError = (props: Record<string, unknown>): props is PageError =>
  props.__typename === `PageError`
