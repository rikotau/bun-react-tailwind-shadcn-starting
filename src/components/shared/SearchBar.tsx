import { Input } from "@/components/ui"


export const SearchBar = ({input, onChange}) => {
  return (
    <div className="">
      <Input
        type='text'
        placeholder='Find Characters...'
        value={input}
        onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}
