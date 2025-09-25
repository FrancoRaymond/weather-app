import { useState } from "react";
import down from '../assets/images/arrow-down.svg'
import unitsIcon from '../assets/images/icon-units.svg'

export default function CustomSelect() {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Units");
  const options: string[] = ["Apple", "Banana", "Cherry"];

  return (
    <div className="relative w-fit cursor-pointer text-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-fit flex text-white justify-between items-center px-2 gap-2 py-1 rounded-lg bg-gray-500"
      >
        <img src={unitsIcon} alt="" className="size-4" />
        {selected}
        <img src={down} alt=""  className="size-5"/>
      </button>

      {open && (
        <ul className="absolute mt-1 w-full border rounded-lg bg-white shadow">
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}