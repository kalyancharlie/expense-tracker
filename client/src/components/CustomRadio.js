import React, { useEffect, useState, useContext } from "react";

const CustomRadioContext = React.createContext()

const CustomRadio = ({ children, setValue, activeClasses = [] }) => {
  const [activeBtnInd, setActiveBtnInd] = useState({})

  useEffect(() => {
    const selectedButton = Object.keys(activeBtnInd).find(value => activeBtnInd[value] === true)
    if (!selectedButton) return
    setValue(selectedButton)
  }, [activeBtnInd])

  return <CustomRadioContext.Provider value={{ activeBtnInd, setActiveBtnInd }}>
    {children}
  </CustomRadioContext.Provider>
}

export const RadioButton = ({ children, value = null, classNames = [], activeClassNames = [] }) => {
  const { activeBtnInd, setActiveBtnInd } = useContext(CustomRadioContext)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setActiveBtnInd((prev) => {
      return { ...prev, [value]: false }
    })
  }, [])

  useEffect(() => {
    const isCurrentOptSelected = Object.keys(activeBtnInd).filter(otherValue => otherValue === value && activeBtnInd[otherValue] === true)
    isCurrentOptSelected?.length === 1 ? setIsActive(true) : setIsActive(false)
  }, [activeBtnInd])

  const clickHandler = (event) => {
    try {
      if (event) {
        event.preventDefault()
      }

      const isNoneSelected = Object.keys(activeBtnInd).filter(otherValue => activeBtnInd[otherValue] === true)
      if (!isNoneSelected || isNoneSelected?.length === 0) {
        setIsActive(true)
        const newValues = Object.keys(activeBtnInd).reduce((prev, curr) => {
          if (curr === value) {
            prev[curr] = true
            return prev
          }
          prev[curr] = false
          return prev
        }, {})
        setActiveBtnInd(newValues)
        return
      }

      const isOtherOptionSelected = Object.keys(activeBtnInd).filter(otherValue => otherValue !== value && activeBtnInd[otherValue] === true)
      if (!isOtherOptionSelected || isOtherOptionSelected.length === 0) return
      setIsActive(true)
      const newValues = Object.keys(activeBtnInd).reduce((prev, curr) => {
        if (curr === value) {
          prev[curr] = true
          return prev
        }
        prev[curr] = false
        return prev
      }, {})
      setActiveBtnInd(newValues)
    } catch (error) {
      console.log('error in click handler');
      console.log(error);
    }
  }
  return <button onClick={(e) => clickHandler(e)} className={classNames.join(' ') + ` ${isActive ? activeClassNames.join(' ') : ''}`} value={value && value}>{children}</button>
}

export default CustomRadio