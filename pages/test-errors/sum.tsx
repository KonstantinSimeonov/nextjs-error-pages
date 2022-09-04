import {GetServerSideProps} from "next";
import {BadRequest} from "../../util";

type PageProps = { sum: number }

export const getServerSideProps: GetServerSideProps<PageProps | BadRequest> = async context => {
  const { x, y } = context.query

  const xy = [x, y].map(Number).filter(Number.isFinite)

  if (xy.length < 2) return BadRequest(context, "One of the numbers wasn't valid.")

  return {
    props: {
      sum: xy.reduce((sum, n) => sum + n)
    }
  }
}

export default function Sum({ sum }: PageProps) {
  return (
    <article>
    <h2>Sum:</h2>
    <p>{sum}</p>
    </article>
  )
}

Sum.BadRequest = function BadRequest({ reason }: BadRequest) {
  return (
    <article>
      <h2>Invalid request</h2>
      <p>{reason}</p>
    </article>
  )
}
