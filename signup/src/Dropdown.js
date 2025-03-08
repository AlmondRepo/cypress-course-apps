export default function Dropdown({ options, selectedValue, onChange }) {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 dashboard-dropdown"
      id="dashboard-dropdown"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} id={`option-${index}`} className="dropdown-option">
          {option.label}
        </option>
      ))}
    </select>
  );
}
