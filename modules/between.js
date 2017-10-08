export default function between (str, leftLimit, rightLimit) {
  return R.last(
    R.split(
      leftLimit,
      R.head(R.split(rightLimit, str))
    )
  ).trim()
}