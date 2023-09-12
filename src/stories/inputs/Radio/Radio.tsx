import {useRef} from "react"
import classes from "./Radio.module.css"
import {IRadioProps} from "./Radio.types"

//TODO Color, required, animation, direction

export default function Radio({
  data,
  selected,
  onChange,
  name,
  legend,
  disabled,
  ...props
}: IRadioProps) {
  const inputRef = useRef<Array<HTMLInputElement | null>>([])
  return (
    <div className={classes.container}>
      {legend && <legend className={classes.legend}>{legend}</legend>}
      <div
        className={`${classes.radioContainer} ${
          disabled ? classes.disabled : ""
        }`}
      >
        {data.map(({id, value, label}, i) => (
          <div className={classes.inputContainer}>
            <div
              onClick={() => inputRef.current[i]?.click()}
              className={`${classes.toggle} ${
                value === selected ? classes.selected : ""
              }`}
            />
            <input
              ref={(el) => (inputRef.current[i] = el)}
              className={classes.input}
              type="radio"
              {...{...props, name, value, id, onChange}}
              checked={value === selected}
            />
            <label className={classes.label} htmlFor={id}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
