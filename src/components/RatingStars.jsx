export default function RatingStars({ rating = 0 }) {
  const rounded = Math.round(rating * 2) / 2
  const stars = [1,2,3,4,5]
  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {stars.map((s)=> (
        <span key={s}>{rounded >= s ? '★' : rounded >= s - 0.5 ? '☆' : '☆'}</span>
      ))}
    </div>
  )
}


