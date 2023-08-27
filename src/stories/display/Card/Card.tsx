import classes from "./Card.module.css"
import {ICardProps} from "./Card.types"

export default function Card({
  cardDescription,
  cardHeader,
  imageAlt,
  imageSrc,
  children,
}: ICardProps) {
  return (
    <div className={classes.container}>
      {children ? (
        children
      ) : (
        <>
          <img className={classes.image} src={imageSrc} alt={imageAlt} />
          <div className={classes.cardTextSection}>
            <p className={classes.cardHeader}>{cardHeader}</p>
            <p className={classes.cardDescription}>{cardDescription}</p>
          </div>
        </>
      )}
    </div>
  )
}
