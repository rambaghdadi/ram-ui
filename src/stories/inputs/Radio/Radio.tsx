import {CSSProperties, ChangeEvent, useRef, useState} from "react"
import classes from "./Radio.module.css"
import {IRadioProps} from "./Radio.types"

export default function Radio({
  data,
  selected,
  onChange,
  name,
  legend,
  disabled,
  color = "blue",
  required,
  ...props
}: IRadioProps) {
  const inputRef = useRef<Array<HTMLInputElement | null>>([])
  const inputContainerRef = useRef<Array<HTMLDivElement | null>>([])
  const radioContainerRef = useRef<HTMLDivElement>(null)

  const [chipPosition, setChipPosition] = useState(0)

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>, index: number) {
    const parentTop =
      radioContainerRef.current?.getBoundingClientRect().top ?? 0
    const inputTop =
      inputContainerRef.current[index]?.getBoundingClientRect().top ?? 0

    setChipPosition(inputTop - parentTop)

    onChange && onChange(e)
  }

  return (
    <div
      style={{"--bg": `var(--bg-${color}-600)`} as CSSProperties}
      className={classes.container}
      role="radiogroup"
      aria-labelledby="radioGroupLabel"
    >
      {legend && (
        <legend id="radioGroupLabel" className={classes.legend}>
          {legend} {required ? <span>*</span> : ""}
        </legend>
      )}
      <div
        ref={radioContainerRef}
        className={`${classes.radioContainer} ${
          disabled ? classes.disabled : ""
        }`}
      >
        <div
          className={classes.chip}
          style={{top: `calc(${chipPosition + "px"} + 0.25rem)`}}
        />
        {data.map(({id, value, label}, i) => (
          <div
            key={i}
            ref={(e) => (inputContainerRef.current[i] = e)}
            className={classes.inputContainer}
            role="radio"
            aria-checked={value === selected}
            tabIndex={value === selected ? 0 : -1}
          >
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
              onChange={(e) => onChangeHandler(e, i)}
              {...{...props, name, value, id, required, disabled}}
              checked={value === selected}
              aria-labelledby={id}
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
