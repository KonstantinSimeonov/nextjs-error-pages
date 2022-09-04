import { GetServerSideProps } from "next";
import { Forbidden } from "../../util";

type PageProps = {
  value: number
}

export const getServerSideProps: GetServerSideProps<PageProps | Forbidden> = async context => {
  const { error } = context.query

  if (error) return Forbidden(context, "Can't touch this")

  return {
    props: {
      value: Math.random()
    }
  }
}

export default function RandomNumber(props: PageProps) {
  return <h1>{props.value}</h1>
}

RandomNumber.Forbidden = function Forbidden({ reason }: Forbidden) {
  return (
    <article>
      <h2>VERBOTEN! You no can haz random noomber</h2>
      <p>{reason}</p>
    </article>
  )
}
