import { useState } from "react";

export const Tasklist = () => {
  const [prev, setTask] = useState({
    Nameofprev: '',
    Firstfech: '',
    Fechend: '',
  });

  // console.log(prev)

  return (
    <>
    <label>
      Nombre:
        <input value={prev.Nameoftask}
        onChange={e => {setTask({...prev,
        Nameofprev: e.target.value}) }}/>
    </label>
    <label>
      Fecha de inicio:
      <input value={prev.Firstfech}
      onChange={e => {setTask({...prev,
      Firstfech: e.target.value})}}/>
    </label>
    <label>
      Fecha final:
      <input value={prev.Fechend}
      onChange={e => {setTask({...prev,
      Fechend: e.target.value})}}/>
    </label>
    <p>
        {prev.Nameofprev}{', '}
        {prev.Firstfech}{', '}
        {prev.Fechend}{', '}
    </p>
    </>
  )
}
