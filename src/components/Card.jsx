export default function Card({imageSrc, label = "meow",isFlipped ,onFlip}) {
  return (
    <div className="p-3 " onClick={onFlip }  >
   <div className="card-wrapper perspective">
    <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-face card-front  ">
        {/* BACK OF CARD (hidden image) */}
        <img src="/score.png" alt="Card Back" />
      </div>
      <div className="card-face card-back  ">
        {/* FRONT OF CARD (real image) */}
        <img src={imageSrc} alt={label} />
      </div>
    </div>
  </div>
      
      {isFlipped && (
        <p className="mt-2 text-center text-sm  font-medium  text-[var(--text-color)]">{label}</p>
      )}
    </div>
  );
}
